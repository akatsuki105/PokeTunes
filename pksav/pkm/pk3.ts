import { Condition, Game3, GameVersion3, Gender, Locale, Nature, PKMData, Status, ZeroStatus } from 'pksav/data';
import { getLevel } from 'pksav/exp';
import { bit, loadU16LE, loadU32LE, setBit, slice, storeU16LE, storeU32LE } from 'utils';
import { calcHP, calcStat, dummyPKMA, getMoveSet, Move } from './common';
import { isDummy, PKM, PKMA } from './pkm';
import { Met, PPBonus } from './types';

const GAEM = [
  [0, 1, 2, 3], // [G, A, E, M]
  [0, 1, 3, 2], // [G, A, M, E]
  [0, 2, 1, 3],
  [0, 3, 1, 2],
  [0, 2, 3, 1],
  [0, 3, 2, 1],
  [1, 0, 2, 3],
  [1, 0, 3, 2],
  [2, 0, 1, 3],
  [3, 0, 1, 2],
  [2, 0, 3, 1],
  [3, 0, 2, 1],
  [1, 2, 0, 3],
  [1, 3, 0, 2],
  [2, 1, 0, 3],
  [3, 1, 0, 2],
  [2, 3, 0, 1],
  [3, 2, 0, 1],
  [1, 2, 3, 0],
  [1, 3, 2, 0],
  [2, 1, 3, 0],
  [3, 1, 2, 0],
  [2, 3, 1, 0],
  [3, 2, 1, 0],
] as const;

const LangID = ['', 'ja', 'en', 'fr', 'it', 'de', 'kr', 'es'] as const;

export type PK3 = Omit<PKMA, 'ver'> & {
  ver: GameVersion3;
  met: Met;
  condition: number;
  cnt: Condition;
  pokerusRemaining: number; // Offset 85 in Party mon
  ribbons: Ribbon3;
};

export type Ribbon3 = {
  cool: number;
  beauty: number;
  cute: number;
  smart: number;
  tough: number;
  champion: boolean;
  winning: boolean;
  victory: boolean;
  artist: boolean;
  effort: boolean;
  country: boolean;
  earth: boolean;
  world: boolean;
};

export const dummyPK3: PK3 = {
  ...dummyPKMA,
  ver: 'RS',
  met: {
    location: 0,
    ball: 4,
    game: 1,
    lv: 0,
  },
  condition: 0,
  pokerusRemaining: 0xFF,
  ribbons: {
    cool: 0,
    beauty: 0,
    cute: 0,
    smart: 0,
    tough: 0,
    champion: false,
    winning: false,
    victory: false,
    artist: false,
    effort: false,
    country: false,
    earth: false,
    world: false,
  },
};

export const PK3 = (game: Game3, buf: Uint8Array): PK3 => {
  const p = JSON.parse(JSON.stringify(dummyPK3)) as PK3;
  [p.ver, p.loc] = game;

  const isEncrypted = (buf: Uint8Array): boolean => {
    let chk = 0;
    for (let i = 32; i < 80; i += 2) {
      chk = (chk + loadU16LE(buf, i)) & 0xFFFF;
    }
    return chk !== loadU16LE(buf, 28);
  };
  if (isEncrypted(buf)) {
    buf = new Uint8Array(buf);
    const pid = loadU32LE(buf, 0);
    const otid = loadU32LE(buf, 4);
    const key = pid ^ otid;
    const order = GAEM[pid % 24];
    const [G, A, E, M] = order.map((ofs) => xor12byte(slice(buf, 32 + ofs * 12, 12), key));
    buf.set(G, 32);
    buf.set(A, 44);
    buf.set(E, 56);
    buf.set(M, 68);
  }

  const parsePK3 = (p: PK3, buf: Uint8Array): PK3 => {
    p.pid = loadU32LE(buf, 0);
    p.ot.id = loadU32LE(buf, 4);
    p.nickname = Array.from(slice(buf, 8, 10));
    p.loc = ['en', 'ja', 'en'][buf[18]] as Locale;
    p.ot.name = Array.from(slice(buf, 20, 7));
    p.marking = buf[27];
    const [G, A, E, M] = [slice(buf, 32, 12), slice(buf, 44, 12), slice(buf, 56, 12), slice(buf, 68, 12)];

    // G
    [p.id, p.item] = [loadU16LE(G, 0), loadU16LE(G, 2)];
    p.exp = loadU32LE(G, 4);
    p.lv = getLevel(p.exp, PKMData.PI[p.ver][dexno(p)].growth);
    const ppBonus = G[8];
    p.friendship = G[9];

    // A
    p.moves = [
      Move(loadU16LE(A, 0), A[8], (ppBonus & 0b11) as PPBonus),
      Move(loadU16LE(A, 2), A[9], ((ppBonus >> 2) & 0b11) as PPBonus),
      Move(loadU16LE(A, 4), A[10], ((ppBonus >> 4) & 0b11) as PPBonus),
      Move(loadU16LE(A, 6), A[11], ((ppBonus >> 6) & 0b11) as PPBonus),
    ];

    // E
    {
      p.evs = {
        hp: E[0],
        atk: E[1],
        def: E[2],
        spe: E[3],
        spa: E[4],
        spd: E[5],
      };
      p.cnt = {
        cool: E[6],
        beauty: E[7],
        cute: E[8],
        smart: E[9],
        tough: E[10],
        sheen: E[11],
      };
    }

    // M
    p.pokerus = M[0];
    {
      const origin = loadU16LE(M, 2);
      p.ot.gender = (origin >> 15) & 0b1;
      const ball = (origin >> 11) & 0b1111;
      const game = (origin >> 7) & 0b1111;
      const lv = origin & 0b1111111;
      const location = M[1];
      p.met = { ball, game, lv, location };
    }
    const ivs = loadU32LE(M, 4);
    p.ivs = {
      hp: ivs & 0b11111,
      atk: (ivs >> 5) & 0b11111,
      def: (ivs >> 10) & 0b11111,
      spa: (ivs >> 20) & 0b11111,
      spd: (ivs >> 25) & 0b11111,
      spe: (ivs >> 15) & 0b11111,
    };
    p.isEgg = ((ivs >> 30) & 0b1) !== 0;
    p.ability = (ivs >> 31) & 0b1;
    p.ribbons = parseRibbon3(loadU32LE(M, 8));

    if (buf.length === 100) {
      p.condition = loadU32LE(buf, 80);
      p.pokerusRemaining = buf[85];
      p.hp = loadU32LE(buf, 86);
    }
    return p;
  };
  parsePK3(p, buf);
  return p;
};

const xor12byte = (encrpted12bytes: Uint8Array, key32: number): Uint8Array => {
  const val0 = loadU32LE(encrpted12bytes, 0) ^ key32;
  const val4 = loadU32LE(encrpted12bytes, 4) ^ key32;
  const val8 = loadU32LE(encrpted12bytes, 8) ^ key32;
  const decrypted12bytes = new Uint8Array(12);
  storeU32LE(decrypted12bytes, 0, val0);
  storeU32LE(decrypted12bytes, 4, val4);
  storeU32LE(decrypted12bytes, 8, val8);
  return decrypted12bytes;
};

export const dumpPK3 = (p: PK3): Uint8Array => {
  const bytes = new Uint8Array(100);
  if (isDummy(p)) return bytes;

  storeU32LE(bytes, 0, p.pid);
  storeU32LE(bytes, 4, p.ot.id);
  bytes.set(p.nickname, 8);
  bytes[18] = LangID.includes(p.loc) ? LangID.indexOf(p.loc) : 2;
  bytes[19] = eggFlags(p);
  bytes.set(p.ot.name, 20);
  bytes[27] = p.marking;
  storeU16LE(bytes, 28, calcChecksum3(p));

  // Encrypt and shuffle
  let [G, A, E, M] = getRawGAEM(p);
  const key = p.pid ^ p.ot.id;
  [G, A, E, M] = [xor12byte(G, key), xor12byte(A, key), xor12byte(E, key), xor12byte(M, key)];
  const order = GAEM[p.pid % 24];
  bytes.set(G, 32 + order[0] * 12);
  bytes.set(A, 32 + order[1] * 12);
  bytes.set(E, 32 + order[2] * 12);
  bytes.set(M, 32 + order[3] * 12);

  // Party
  storeU32LE(bytes, 80, p.condition);
  bytes[84] = getLevel(p.exp, PKMData.PI[p.ver][dexno(p)].growth);
  bytes[85] = p.pokerusRemaining;
  const stats = stats3(p);
  let hp = p.hp;
  if (hp > stats.hp) {
    hp = stats.hp;
  }
  storeU16LE(bytes, 86, hp);
  storeU16LE(bytes, 88, stats.hp);
  storeU16LE(bytes, 90, stats.atk);
  storeU16LE(bytes, 92, stats.def);
  storeU16LE(bytes, 94, stats.spe);
  storeU16LE(bytes, 96, stats.spa);
  storeU16LE(bytes, 98, stats.spd);

  return bytes;
};

export const export3 = (p: PK3): Uint8Array => {
  return dumpPK3(p);
};

export const stats3 = (p: PKMA): Status => {
  if (isDummy(p)) return ZeroStatus();

  const base = PKMData.PI[p.ver][dexno(p)].baseStats;

  const hp = calcHP(p.ver, base.hp, p.lv, p.ivs.hp, p.evs.hp);
  const atk = calcStat(p.ver, base.atk, p.lv, p.ivs.atk, p.evs.atk);
  const def = calcStat(p.ver, base.def, p.lv, p.ivs.def, p.evs.def);
  const spa = calcStat(p.ver, base.spa, p.lv, p.ivs.spa, p.evs.spa);
  const spd = calcStat(p.ver, base.spd, p.lv, p.ivs.spa, p.evs.spa);
  const spe = calcStat(p.ver, base.spe, p.lv, p.ivs.spe, p.evs.spe);
  return { hp, atk, def, spa, spd, spe };
};

const eggFlags = (p: PK3): number => {
  const egg = p.isEgg ? 1 : 0;
  return 2 | (egg << 2);
};

const dexno = (p: PKM) => PKMData.DexNo[3][p.id];

const getRawGAEM = (p: PK3): [Uint8Array, Uint8Array, Uint8Array, Uint8Array] => {
  const moves = getMoveSet(p.moves);

  let [G, A, E, M] = [
    new Uint8Array(12),
    new Uint8Array(12),
    new Uint8Array(12),
    new Uint8Array(12),
  ];
  {
    // G
    storeU16LE(G, 0, p.id);
    storeU16LE(G, 2, p.item);
    storeU32LE(G, 4, p.exp);
    G[8] = (moves[3].up << 6) | (moves[2].up << 4) | (moves[1].up << 2) | moves[0].up;
    G[9] = p.friendship;
  }
  {
    // A
    for (let i = 0; i < 4; i++) {
      storeU16LE(A, 2 * i, moves[i].id);
      A[8 + i] = moves[i].pp;
    }
  }
  {
    // E
    E.set([p.evs.hp, p.evs.atk, p.evs.def, p.evs.spe, p.evs.spa, p.evs.spd], 0);
    E.set([p.cnt.cool, p.cnt.beauty, p.cnt.cute, p.cnt.smart, p.cnt.tough, p.cnt.sheen], 6);
  }
  {
    // M
    M[0] = p.pokerus;
    M[1] = p.met.location;

    let met = 0;
    met |= (p.ot.gender) << 15;
    met |= (p.met.ball & 0b1111) << 11;
    met |= (p.met.game & 0b1111) << 7;
    met |= p.met.lv & 0b111_1111;
    storeU16LE(M, 2, met);

    let iv32 = (p.ability << 31) | ((p.isEgg ? 1 : 0) << 30);
    iv32 |= (p.ivs.hp) & 0b11111;
    iv32 |= (p.ivs.atk & 0b11111) << 5;
    iv32 |= (p.ivs.def & 0b11111) << 10;
    iv32 |= (p.ivs.spe & 0b11111) << 15;
    iv32 |= (p.ivs.spa & 0b11111) << 20;
    iv32 |= (p.ivs.spd & 0b11111) << 25;
    storeU32LE(M, 4, iv32);

    storeU32LE(M, 8, flashRibbon3(p.ribbons));
  }
  return [G, A, E, M];
};

const calcChecksum3 = (p: PK3): number => {
  const raw = getRawGAEM(p);

  let checksum = 0;
  for (let i = 0; i < raw.length; i++) {
    for (let j = 0; j < 12; j += 2) {
      checksum = (checksum + loadU16LE(raw[i], j)) & 0xFFFF;
    }
  }
  return checksum;
};

const parseRibbon3 = (rib: number): Ribbon3 => {
  return {
    cool: (rib >> 0) & 0b111,
    beauty: (rib >> 3) & 0b111,
    cute: (rib >> 6) & 0b111,
    smart: (rib >> 9) & 0b111,
    tough: (rib >> 12) & 0b111,
    champion: bit(rib, 15),
    winning: bit(rib, 16),
    victory: bit(rib, 17),
    artist: bit(rib, 18),
    effort: bit(rib, 19),
    country: bit(rib, 23),
    earth: bit(rib, 25),
    world: bit(rib, 26),
  };
};

const flashRibbon3 = (r: Ribbon3): number => {
  let result = 0;
  result |= (r.cool & 0b111) << 0;
  result |= (r.beauty & 0b111) << 3;
  result |= (r.cute & 0b111) << 6;
  result |= (r.smart & 0b111) << 9;
  result |= (r.tough & 0b111) << 12;
  result = setBit(result, 15, r.champion);
  result = setBit(result, 16, r.winning);
  result = setBit(result, 17, r.victory);
  result = setBit(result, 18, r.artist);
  result = setBit(result, 19, r.effort);
  result = setBit(result, 23, r.country);
  result = setBit(result, 25, r.earth);
  result = setBit(result, 26, r.world);

  return result;
};

export const form3 = (p: PK3): string => {
  let form = '';

  // アンノーン
  if (p.id === 201) {
    const a = (p.pid >> 0) & 0b11;
    const b = (p.pid >> 8) & 0b11;
    const c = (p.pid >> 16) & 0b11;
    const d = (p.pid >> 24) & 0b11;
    const f = (d << 6) | (c << 4) | (b << 2) | a;
    const formIdx = f % 28;
    if (formIdx) form += `${formIdx}`;
  }

  // デオキシス
  if (p.id === 410) {
    switch (p.ver) {
      case 'FR':
        form += '1';
        break;
      case 'LG':
        form += '2';
        break;
      case 'E':
        form += '3';
        break;
    }
  }

  return form;
};

export const isShiny3 = (p: PKMA): boolean => {
  const [tid, sid] = [p.ot.id & 0xFFFF, (p.ot.id >> 16) & 0xFFFF];
  const val = tid ^ sid ^ (p.pid & 0xFFFF) ^ ((p.pid >> 16) & 0xFFFF);
  return (val & 0xFFFF) < 8;
};

export const gender3 = (p: PKMA): Gender => {
  const genderValue = p.pid & 0xFF;
  const threshold = PKMData.PI[p.ver][dexno(p)].gender;

  if (threshold === 0xFF) return 'unknown';
  return genderValue >= threshold ? 'male' : 'female';
};

export const isPK3 = (r: PKM): r is PK3 => {
  return ['RS', 'FR', 'LG', 'E'].includes(r.ver);
};
