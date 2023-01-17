import { Condition, GameVersion, Gen, Locale, PKMData, Status } from 'pksav/data';
import { isPK1 } from './pk1';
import { isPK2 } from './pk2';
import { isPK3 } from './pk3';
import { MoveSet, Ot } from './types';

export type PKM = {
  ver: GameVersion;
  id: number; // Internal Specie ID
  lv: number;
  exp: number;
  loc: Locale;
  item: number;
  nickname: number[];
  friendship: number;
  ot: Ot;
  hp: number;
  ivs: Status;
  evs: Status;
  moves: MoveSet;
  isEgg: boolean;
  pokerus: number;
};

// PKMA = PKM Advance = after Gen3
export type PKMA = PKM & {
  pid: number;
  marking: number;
  ability: number;
  cnt: Condition;
};

export const isDummy = (p: PKM): boolean => {
  if (isPK1(p)) return p.id === 0;
  if (isPK2(p)) return p.id === 252;
  if (isPK3(p)) return PKMData.DexNo[Gen[p.ver]][p.id] === 387;
  return true;
};
