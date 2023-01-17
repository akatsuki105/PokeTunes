import { Game2, GameVersion2, PKMData, Status, ZeroStatus } from 'pksav/data';
import { NameSize2, PARTYMON_SIZE2 } from 'pksav/sav';
import { loadU16BE, loadU24BE, slice, storeU16BE, storeU24BE } from 'utils';
import { calcHP, calcStat, dummyPKM, getMoveSet, MoveGB } from './common';
import { getIVs1, parseIV1 } from './pk1';
import { isDummy, PKM } from './pkm';

type MetInfo2 = {
  lv: number;
  location: number;
  time: number;
};

export type PK2 = PKM & {
  condition: number;
  met: MetInfo2;
  ver: GameVersion2;
};

export const dummyPK2: PK2 = {
  ...dummyPKM,
  ver: 'GS',
  id: 252, // Internal Specie ID
  condition: 0,
  met: {
    lv: 0,
    location: 0,
    time: 0,
  },
};

export const PK2 = (game: Game2, buf: Uint8Array): PK2 => {
  const p = JSON.parse(JSON.stringify(dummyPK2)) as PK2;
  [p.ver, p.loc] = game;

  const parseRawPK2 = (p: PK2, buf: Uint8Array): PK2 => {
    p.id = buf[0];
    p.item = buf[1];
    p.ot.id = loadU16BE(buf, 6);
    p.exp = loadU24BE(buf, 8);
    parseIV1(p, [buf[21], buf[22]]);
    {
      const [hp, atk, def, spa, spe] = [
        loadU16BE(buf, 0x0b),
        loadU16BE(buf, 0x0d),
        loadU16BE(buf, 0x0F),
        loadU16BE(buf, 0x13),
        loadU16BE(buf, 0x11),
      ];
      const spd = spa;
      p.evs = { hp, atk, def, spa, spd, spe };
    }
    p.friendship = buf[27];
    p.pokerus = buf[28];
    p.lv = buf[31];

    p.moves = [
      MoveGB(buf[2], buf[23]),
      MoveGB(buf[3], buf[24]),
      MoveGB(buf[4], buf[25]),
      MoveGB(buf[5], buf[26]),
    ];

    const met = [buf[29], buf[30]];
    p.met.lv = met[0] & 0b00111111;
    p.met.time = met[0] >> 6;
    p.met.location = met[1] & 0x7F;
    p.ot.gender = met[1] >> 7;
    return p;
  };
  parseRawPK2(p, buf.slice(3));
  p.ot.name = Array.from(slice(buf, 3 + PARTYMON_SIZE2, NameSize2[p.loc]));
  p.nickname = Array.from(slice(buf, 3 + PARTYMON_SIZE2 + NameSize2[p.loc], NameSize2[p.loc]));
  return p;
};

export const stats2 = (p: PK2): Status => {
  if (isDummy(p)) return ZeroStatus();

  const ivs = getIVs1(p);
  const base = PKMData.PI[p.ver][p.id].baseStats;

  const hp = calcHP(p.ver, base.hp, p.lv, ivs.hp, p.evs.hp);
  const atk = calcStat(p.ver, base.atk, p.lv, ivs.atk, p.evs.atk);
  const def = calcStat(p.ver, base.def, p.lv, ivs.def, p.evs.def);
  const spa = calcStat(p.ver, base.spa, p.lv, ivs.spa, p.evs.spa);
  const spd = calcStat(p.ver, base.spd, p.lv, ivs.spa, p.evs.spa);
  const spe = calcStat(p.ver, base.spe, p.lv, ivs.spe, p.evs.spe);
  return { hp, atk, def, spa, spd, spe };
};

export const exportRawPK2 = (p: PK2): Uint8Array => {
  const bytes = new Uint8Array(48);
  const moves = getMoveSet(p.moves);
  bytes[0] = p.id;
  bytes[1] = p.item;
  bytes.set(moves.map(({ id }) => id), 2);
  storeU16BE(bytes, 6, p.ot.id);
  storeU24BE(bytes, 8, p.exp);
  {
    // EVs
    storeU16BE(bytes, 11, p.evs.hp);
    storeU16BE(bytes, 13, p.evs.atk);
    storeU16BE(bytes, 15, p.evs.def);
    storeU16BE(bytes, 17, p.evs.spe);
    storeU16BE(bytes, 19, p.evs.spa);
  }
  {
    // IVs
    const { atk, def, spa, spe } = p.ivs;
    bytes[21] = (atk & 0x0F) << 4 | (def & 0x0F);
    bytes[22] = (spe & 0x0F) << 4 | (spa & 0x0F);
  }
  bytes.set(moves.map(({ pp, up }) => ((up & 0b11) << 6) | (pp & 0b111111)), 23);
  bytes[27] = p.friendship;
  bytes[28] = p.pokerus;
  {
    // Met
    bytes[29] = ((p.met.time & 0b11) << 6) | p.met.lv & 0b111111;
    bytes[30] = ((p.ot.gender & 0b1) << 7) | p.met.location & 0b111_1111;
  }
  // storeU16BE(bytes, 29, p.met);
  bytes[31] = p.lv;

  // Party
  const { hp, atk, def, spa, spd, spe } = stats2(p);
  storeU16BE(bytes, 34, hp);
  storeU16BE(bytes, 36, hp);
  storeU16BE(bytes, 38, atk);
  storeU16BE(bytes, 40, def);
  storeU16BE(bytes, 42, spe);
  storeU16BE(bytes, 44, spa);
  storeU16BE(bytes, 46, spd);

  return bytes;
};

export const export2 = (p: PK2): Uint8Array => {
  const namesize = p.nickname.length;
  const pkm = new Uint8Array(3 + PARTYMON_SIZE2 + namesize * 2);
  pkm.set([0x01, p.id, 0xFF], 0);
  pkm.set(exportRawPK2(p), 3);
  pkm.set(p.ot.name, 3 + PARTYMON_SIZE2);
  pkm.set(p.nickname, 3 + PARTYMON_SIZE2 + namesize);
  return pkm;
};

export const form2 = (p: PK2): string => {
  let form = '';

  // アンノーン
  if (p.id === 201) {
    let sum = 0;
    const { atk, def, spe, spa } = p.ivs;
    const ivs = [atk, def, spe, spa];
    for (let i = 0; i < ivs.length; i++) {
      const iv = ivs[i];

      /**
       * 倍率(x)
       *  [0, 1, 8, 9] = 0
       *  [2, 3, A, B] = 1
       *  [4, 5, C, D] = 2
       *  [6, 7, E, F] = 3
       */
      const x = (iv & 0b111) >> 1;
      const val = Math.pow(4, 3 - i) * x;
      sum += val;
    }

    const formIdx = Math.floor(sum / 10);
    if (formIdx) form += `${formIdx}`;
  }

  return form;
};

export const isShiny2 = (p: PK2): boolean => {
  const { atk, def, spa, spe } = p.ivs;
  return [2, 3, 6, 7].includes(atk & 0b111) && def === 10 && spa === 10 && spe === 10;
};

export const isPK2 = (m: PKM): m is PK2 => {
  return m.ver === 'GS' || m.ver === 'C';
};
