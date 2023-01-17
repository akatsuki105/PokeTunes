import { GameVersion, isGB, ZeroCondition, ZeroStatus } from 'pksav/data';
import { PKM, PKMA } from './pkm';
import { MoveSet, PPBonus } from './types';

/*
  Utility for internal
*/

export const Move = (id = 0, pp = 0, up: PPBonus = 0) => {
  return { id, pp, up };
};

export const MoveGB = (id = 0, pp = 0) => {
  const up = ((pp >> 6) & 0b11) as PPBonus;
  pp &= 0b111111;
  return { id, pp, up };
};

export const dummyPKM: PKM = {
  ver: 'Invalid',
  id: 0, // Internal Specie ID
  lv: 1,
  exp: 0,
  loc: 'en',
  item: 0,
  nickname: [],
  friendship: 0,
  ot: { name: [], id: 0, gender: 0 },
  hp: 0,
  ivs: ZeroStatus(),
  evs: ZeroStatus(),
  moves: [Move(), Move(), Move(), Move()],
  isEgg: false,
  pokerus: 0,
};

export const dummyPKMA: PKMA = {
  ...dummyPKM,
  pid: 0,
  marking: 0,
  ability: 0,
  cnt: ZeroCondition(),
};

const calcBaseStat = (ver: GameVersion, base: number, lv: number, iv = 0, ev = 0): number => {
  if (isGB(ver)) {
    ev = Math.ceil(Math.sqrt(ev));
    if (ev > 255) ev = 255;
    const tmp = (((base + iv) << 1) + (ev >> 2)) * lv;
    return Math.floor(tmp / 100);
  }

  const ev4 = Math.floor(ev / 4);
  return Math.floor(((2 * base + iv + ev4) * lv) / 100);
};

export const calcHP = (ver: GameVersion, base: number, lv: number, iv = 0, ev = 0): number => {
  return calcBaseStat(ver, base, lv, iv, ev) + lv + 10;
};

export const calcStat = (ver: GameVersion, base: number, lv: number, iv = 0, ev = 0): number => {
  return calcBaseStat(ver, base, lv, iv, ev) + 5;
};

export const getMoveSet = (ms: MoveSet): MoveSet => {
  const nullMove = Move(0, 0, 0);
  const newMs: (typeof nullMove)[] = [];

  for (const m of ms) {
    if (m.id === 0 || m.id === 165) continue;
    if (newMs.map((m) => m.id).includes(m.id)) continue;
    newMs.push(m);
  }
  for (let i = newMs.length; i < 4; i++) {
    newMs.push({ ...nullMove });
  }

  return newMs as MoveSet;
};
