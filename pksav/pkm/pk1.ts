import { Game1, GameVersion1, Gen, Gender, PKMData, Status, ZeroStatus } from 'pksav/data';
import { NameSize1, PARTYMON_SIZE1 } from 'pksav/sav';
import { loadU16BE, loadU24BE, slice, storeU16BE, storeU24BE } from 'utils';
import { calcHP, calcStat, dummyPKM, getMoveSet, MoveGB } from './common';
import { PK2 } from './pk2';
import { isDummy, PKM } from './pkm';

export type PK1 = PKM & {
  condition: number;
  ver: GameVersion1;
};

export const dummyPK1: PK1 = {
  ...dummyPKM,
  ver: 'RB',
  condition: 0,
};

/**
 * Header:    3 Bytes
 * Raw:      44 Bytes
 * OT Name:   n Bytes
 * Nickname:  n Bytes
 */
export const PK1 = (game: Game1, buf: Uint8Array): PK1 => {
  const p = JSON.parse(JSON.stringify(dummyPK1)) as PK1;
  [p.ver, p.loc] = game;

  const parseRawPK1 = (p: PK1, buf: Uint8Array): PK1 => {
    p.id = buf[0];
    p.hp = loadU16BE(buf, 1);
    p.lv = buf[3];
    p.condition = buf[4];
    p.item = buf[7];
    p.ot.id = loadU16BE(buf, 12);
    p.exp = loadU24BE(buf, 14);
    parseIV1(p, [buf[27], buf[28]]);
    {
      const [hp, atk, def, spa, spe] = [
        loadU16BE(buf, 17),
        loadU16BE(buf, 19),
        loadU16BE(buf, 21),
        loadU16BE(buf, 23),
        loadU16BE(buf, 25),
      ];
      const spd = spa;
      p.evs = { hp, atk, def, spa, spd, spe };
    }

    p.moves = [
      MoveGB(buf[8], buf[29]),
      MoveGB(buf[9], buf[30]),
      MoveGB(buf[10], buf[31]),
      MoveGB(buf[11], buf[32]),
    ];
    return p;
  };
  parseRawPK1(p, buf.slice(3, 3 + PARTYMON_SIZE1));

  p.ot.name = Array.from(slice(buf, 3 + PARTYMON_SIZE1, NameSize1[p.loc]));
  p.nickname = Array.from(slice(buf, 3 + PARTYMON_SIZE1 + NameSize1[p.loc], NameSize1[p.loc]));
  return p;
};

export const parseIV1 = (p: PK1 | PK2, iv: [number, number]) => {
  const [atk, def, spe, spa] = [iv[0] >> 4, iv[0] & 0xf, iv[1] >> 4, iv[1] & 0xf];
  const spd = spa;
  p.ivs = { hp: 0, atk, def, spa, spd, spe };
};

export const exportRawPK1 = (p: PK1): Uint8Array => {
  const bytes = new Uint8Array(44);
  const moves = getMoveSet(p.moves);
  bytes[0] = p.id;
  storeU16BE(bytes, 1, p.hp);
  bytes[3] = p.lv;
  bytes[4] = p.condition;
  bytes.set(PKMData.PI[p.ver][dexno(p)].types, 5); // Type1,2
  bytes[7] = p.item;
  bytes.set(moves.map(({ id }) => id), 8);
  storeU16BE(bytes, 12, p.ot.id);
  storeU24BE(bytes, 14, p.exp);
  {
    // EVs
    storeU16BE(bytes, 17, p.evs.hp);
    storeU16BE(bytes, 19, p.evs.atk);
    storeU16BE(bytes, 21, p.evs.def);
    storeU16BE(bytes, 23, p.evs.spe);
    storeU16BE(bytes, 25, p.evs.spa);
  }
  {
    // IVs
    const { atk, def, spa, spe } = p.ivs;
    bytes[27] = (atk & 0x0F) << 4 | (def & 0x0F);
    bytes[28] = (spe & 0x0F) << 4 | (spa & 0x0F);
  }

  // PP
  bytes.set(moves.map(({ pp, up }) => ((up & 0b11) << 6) | (pp & 0b111111)), 29);

  // Party
  bytes[33] = p.lv;
  const { hp, atk, def, spa, spe } = stats1(p);
  if (p.hp > hp) {
    storeU16BE(bytes, 1, hp);
  }
  storeU16BE(bytes, 34, hp);
  storeU16BE(bytes, 36, atk);
  storeU16BE(bytes, 38, def);
  storeU16BE(bytes, 40, spe);
  storeU16BE(bytes, 42, spa);

  return bytes;
};

export const export1 = (p: PK1): Uint8Array => {
  const namesize = p.nickname.length;
  const pkm = new Uint8Array(3 + PARTYMON_SIZE1 + namesize * 2);
  pkm.set([0x01, p.id, 0xFF], 0);
  pkm.set(exportRawPK1(p), 3);
  pkm.set(p.ot.name, 3 + PARTYMON_SIZE1);
  pkm.set(p.nickname, 3 + PARTYMON_SIZE1 + namesize);
  return pkm;
};

export const stats1 = (p: PK1): Status => {
  if (isDummy(p)) return ZeroStatus();

  const ivs = getIVs1(p);
  const base = PKMData.PI[p.ver][dexno(p)].baseStats;

  const hp = calcHP(p.ver, base.hp, p.lv, ivs.hp, p.evs.hp);
  const atk = calcStat(p.ver, base.atk, p.lv, ivs.atk, p.evs.atk);
  const def = calcStat(p.ver, base.def, p.lv, ivs.def, p.evs.def);
  const spa = calcStat(p.ver, base.spa, p.lv, ivs.spa, p.evs.spa);
  const spd = spa;
  const spe = calcStat(p.ver, base.spe, p.lv, ivs.spe, p.evs.spe);
  return { hp, atk, def, spa, spd, spe };
};

export const isPK1 = (m: PKM): m is PK1 => {
  return m.ver === 'RB' || m.ver === 'YW';
};

export const getIVs1 = (p: PK1 | PK2): Status => {
  const hp = calcHpIV1(p.ivs);
  return { ...p.ivs, hp };
};

export const calcHpIV1 = (s: Status): number => {
  let h = 0;

  if ((s.atk % 2) !== 0) {
    h += 8;
  }
  if ((s.def % 2) !== 0) {
    h += 4;
  }
  if ((s.spe % 2) !== 0) {
    h += 2;
  }
  if ((s.spa % 2) !== 0) {
    h += 1;
  }

  return h;
};

export const genderGB = (p: PK1 | PK2): Gender => {
  const genderValue = p.ivs.atk << 4;
  const threshold = PKMData.PI[p.ver][dexno(p)].gender;

  if (threshold === 0xFF) return 'unknown';
  return genderValue >= threshold ? 'male' : 'female';
};

const dexno = (p: PKM) => PKMData.DexNo[Gen[p.ver]][p.id];
