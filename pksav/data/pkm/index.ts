import { PI1 } from './pi/gen1';
import { PI2 } from './pi/gen2';
import { PI_E, PI_FR, PI_LG, PI_RS } from './pi/gen3';
import { Specie } from './species';
import { DexNo } from './dexno';
import { LvlMove } from './lvlmoves';

export * from './dexno';
export * from './pi/types';
export * from './lvlmoves';

const Invalid = [
  {
    gender: 0,
    baseStats: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
    types: [0, 0],
    catchRate: 0,
    baseExp: 0,
    moves: [0, 0, 0, 0],
    growth: 0,
    tmhm: [],
  },
];

// Personal Info
const PI = {
  Invalid,
  RB: PI1,
  YW: PI1,
  GS: PI2,
  C: PI2,
  RS: PI_RS,
  FR: PI_FR,
  LG: PI_LG,
  E: PI_E,
  DP: Invalid,
  Pt: Invalid,
  HGSS: Invalid,
} as const;

export const PKMData = {
  Specie,
  PI,
  DexNo,
  LvlMove,
} as const;
