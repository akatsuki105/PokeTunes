import { PersonalInfo3 } from './types';

const Egg: PersonalInfo3 = {
  dexid: 0,
  baseStats: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
  types: [0, 0],
  catchRate: 0,
  baseExp: 0,
  ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
  items: [0, 0],
  gender: 0,
  hatchCycles: 0,
  baseFriendship: 0,
  growth: 0,
  eggGroups: [0, 0],
  ability: [0, 0],
  escapeRate: 0,
  color: 0,
  noFlip: false,
  tmhm: [],
  tutor: [],
};

// deno-fmt-ignore
const Deoxys = {
  RS: {
    dexid: 386,
    baseStats: { hp: 50, atk: 150, def: 50, spa: 150, spd: 50, spe: 150 },
    types: [13, 13],
    catchRate: 3,
    baseExp: 215,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [0, 0],
    gender: 255,
    hatchCycles: 120,
    baseFriendship: 0,
    growth: 5,
    eggGroups: [15, 15],
    ability: [46, 46],
    tmhm: [
       1,  3,  4,  6, 10, 11, 12, 13, 15,
      16, 17, 18, 20, 21, 22, 24, 25, 27,
      29, 30, 31, 32, 33, 34, 39, 40, 41,
      42, 43, 44, 48, 49, 51, 54, 55, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      138,  86, 157, 164, 223, 244, 173,
      196, 203, 189,   8, 207, 214, 129,
        9,   7
    ]
  },
  FR: {
    dexid: 386,
    baseStats: { hp: 50, atk: 180, def: 20, spa: 180, spd: 20, spe: 150 },
    types: [13, 13],
    catchRate: 3,
    baseExp: 215,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [0, 0],
    gender: 255,
    hatchCycles: 120,
    baseFriendship: 0,
    growth: 5,
    eggGroups: [15, 15],
    ability: [46, 46],
    tmhm: [
       1,  3,  4,  6, 10, 11, 12, 13, 15,
      16, 17, 18, 20, 21, 22, 24, 25, 27,
      29, 30, 31, 32, 33, 34, 39, 40, 41,
      42, 43, 44, 48, 49, 51, 54, 55, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      138,  86, 157, 164, 223, 244, 173,
      196, 203, 189,   8, 207, 214, 129,
        9,   7
    ]
  },
  LG: {
    dexid: 386,
    baseStats: { hp: 50, atk: 70, def: 160, spa: 70, spd: 160, spe: 90 },
    types: [13, 13],
    catchRate: 3,
    baseExp: 215,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [0, 0],
    gender: 255,
    hatchCycles: 120,
    baseFriendship: 0,
    growth: 5,
    eggGroups: [15, 15],
    ability: [46, 46],
    tmhm: [
       1,  3,  4,  6, 10, 11, 12, 13, 15,
      16, 17, 18, 20, 21, 22, 24, 25, 27,
      29, 30, 31, 32, 33, 34, 39, 40, 41,
      42, 43, 44, 48, 49, 51, 54, 55, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      138,  86, 157, 164, 223, 244, 173,
      196, 203, 189,   8, 207, 214, 129,
        9,   7
    ]
  },
  E: {
    dexid: 386,
    baseStats: { hp: 50, atk: 95, def: 90, spa: 95, spd: 90, spe: 180 },
    types: [13, 13],
    catchRate: 3,
    baseExp: 215,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [0, 0],
    gender: 255,
    hatchCycles: 120,
    baseFriendship: 0,
    growth: 5,
    eggGroups: [15, 15],
    ability: [46, 46],
    tmhm: [
       1,  3,  4,  6, 10, 11, 12, 13, 15,
      16, 17, 18, 20, 21, 22, 24, 25, 27,
      29, 30, 31, 32, 33, 34, 39, 40, 41,
      42, 43, 44, 48, 49, 51, 54, 55, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      138,  86, 157, 164, 223, 244, 173,
      196, 203, 189,   8, 207, 214, 129,
        9,   7
    ]
  },
} as const;

// deno-fmt-ignore
const Dex3: PersonalInfo3[] = [
  {...Egg},
  {
    dexid: 1,
    baseStats: { hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45 },
    types: [ 11, 3 ],
    catchRate: 45,
    baseExp: 64,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 7 ],
    ability: [ 65, 65 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       6,  9, 10, 11, 17, 19, 21,
      22, 27, 32, 36, 42, 43, 44,
      45, 51, 54, 55, 56
    ],
    tutor: [
       14,  34,  38, 102,
      164, 173, 203, 189,
      207, 214, 111, 210
    ]
  },
  {
    dexid: 2,
    baseStats: { hp: 60, atk: 62, def: 63, spa: 80, spd: 80, spe: 60 },
    types: [ 11, 3 ],
    catchRate: 45,
    baseExp: 141,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 7 ],
    ability: [ 65, 65 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       6,  9, 10, 11, 17, 19, 21,
      22, 27, 32, 36, 42, 43, 44,
      45, 51, 54, 55, 56
    ],
    tutor: [
       14,  34,  38, 102,
      164, 173, 203, 189,
      207, 214, 111, 210
    ]
  },
  {
    dexid: 3,
    baseStats: { hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80 },
    types: [ 11, 3 ],
    catchRate: 45,
    baseExp: 208,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 7 ],
    ability: [ 65, 65 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       5,  6,  9, 10, 11, 15, 17,
      19, 21, 22, 26, 27, 32, 36,
      42, 43, 44, 45, 51, 54, 55,
      56
    ],
    tutor: [
       14,  34,  38, 102,
      164, 173, 203, 189,
      207, 214, 111, 210
    ]
  },
  {
    dexid: 4,
    baseStats: { hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65 },
    types: [ 9, 9 ],
    catchRate: 45,
    baseExp: 65,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 14 ],
    ability: [ 66, 66 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       1,  2,  6, 10, 11, 17, 21, 23,
      27, 28, 31, 32, 35, 38, 40, 42,
      43, 44, 45, 50, 51, 54, 56
    ],
    tutor: [
        5,  14,  25,  34,  38,  68,
       69, 102, 157, 164, 223, 173,
      203, 189, 207, 214, 129, 111,
        7, 210
    ]
  },
  {
    dexid: 5,
    baseStats: { hp: 58, atk: 64, def: 58, spa: 80, spd: 65, spe: 80 },
    types: [ 9, 9 ],
    catchRate: 45,
    baseExp: 142,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 14 ],
    ability: [ 66, 66 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       1,  2,  6, 10, 11, 17, 21, 23,
      27, 28, 31, 32, 35, 38, 40, 42,
      43, 44, 45, 50, 51, 54, 56
    ],
    tutor: [
        5,  14,  25,  34,  38,  68,
       69, 102, 157, 164, 223, 173,
      203, 189, 207, 214, 129, 111,
        7, 210
    ]
  },
  {
    dexid: 6,
    baseStats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
    types: [ 9, 2 ],
    catchRate: 45,
    baseExp: 209,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 14 ],
    ability: [ 66, 66 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       1,  2,  5,  6, 10, 11, 15, 17,
      21, 23, 26, 27, 28, 31, 32, 35,
      38, 40, 42, 43, 44, 45, 47, 50,
      51, 52, 54, 56
    ],
    tutor: [
        5,  14,  25,  34,  38,  68,
       69, 102, 157, 164, 223, 173,
      203, 189, 207, 214, 129, 111,
        7, 210
    ]
  },
  {
    dexid: 7,
    baseStats: { hp: 44, atk: 48, def: 65, spa: 50, spd: 64, spe: 43 },
    types: [ 10, 10 ],
    catchRate: 45,
    baseExp: 66,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 2 ],
    ability: [ 67, 67 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       1,  3,  6,  7, 10, 13, 14, 17,
      18, 21, 23, 27, 28, 31, 32, 42,
      43, 44, 45, 53, 54, 56, 57, 58
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 164, 223, 205, 173, 196,
      203, 189,   8, 207, 214, 111
    ]
  },
  {
    dexid: 8,
    baseStats: { hp: 59, atk: 63, def: 80, spa: 65, spd: 80, spe: 58 },
    types: [ 10, 10 ],
    catchRate: 45,
    baseExp: 143,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 2 ],
    ability: [ 67, 67 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       1,  3,  6,  7, 10, 13, 14, 17,
      18, 21, 23, 27, 28, 31, 32, 42,
      43, 44, 45, 53, 54, 56, 57, 58
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 164, 223, 205, 173, 196,
      203, 189,   8, 207, 214, 111
    ]
  },
  {
    dexid: 9,
    baseStats: { hp: 79, atk: 83, def: 100, spa: 85, spd: 105, spe: 78 },
    types: [ 10, 10 ],
    catchRate: 45,
    baseExp: 210,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 2 ],
    ability: [ 67, 67 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       1,  3,  5,  6,  7, 10, 13, 14,
      15, 17, 18, 21, 23, 26, 27, 28,
      31, 32, 42, 43, 44, 45, 53, 54,
      56, 57, 58
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 164, 223, 205, 173, 196,
      203, 189,   8, 207, 214, 111
    ]
  },
  {
    dexid: 10,
    baseStats: { hp: 45, atk: 30, def: 35, spa: 20, spd: 20, spe: 45 },
    types: [ 6, 6 ],
    catchRate: 255,
    baseExp: 53,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 3, 3 ],
    ability: [ 19, 19 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [],
    tutor: []
  },
  {
    dexid: 11,
    baseStats: { hp: 50, atk: 20, def: 55, spa: 25, spd: 25, spe: 30 },
    types: [ 6, 6 ],
    catchRate: 120,
    baseExp: 72,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 3, 3 ],
    ability: [ 61, 61 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [],
    tutor: []
  },
  {
    dexid: 12,
    baseStats: { hp: 60, atk: 45, def: 50, spa: 80, spd: 80, spe: 70 },
    types: [ 6, 2 ],
    catchRate: 45,
    baseExp: 160,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 3, 3 ],
    ability: [ 14, 14 ],
    escapeRate: 0,
    color: 8,
    noFlip: false,
    tmhm: [
       6, 10, 11, 15, 17, 18, 19,
      20, 21, 22, 27, 29, 30, 32,
      40, 42, 43, 44, 45, 46, 48,
      55
    ],
    tutor: [
       38, 102, 138, 164,
      173, 203, 207, 214,
      129
    ]
  },
  {
    dexid: 13,
    baseStats: { hp: 40, atk: 35, def: 30, spa: 20, spd: 20, spe: 50 },
    types: [ 6, 3 ],
    catchRate: 255,
    baseExp: 52,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 3, 3 ],
    ability: [ 19, 19 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [],
    tutor: []
  },
  {
    dexid: 14,
    baseStats: { hp: 45, atk: 25, def: 50, spa: 25, spd: 25, spe: 35 },
    types: [ 6, 3 ],
    catchRate: 120,
    baseExp: 71,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 3, 3 ],
    ability: [ 61, 61 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [],
    tutor: []
  },
  {
    dexid: 15,
    baseStats: { hp: 65, atk: 80, def: 40, spa: 45, spd: 80, spe: 75 },
    types: [ 6, 3 ],
    catchRate: 45,
    baseExp: 159,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 3, 3 ],
    ability: [ 68, 68 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       6, 10, 11, 15, 17, 19, 21,
      22, 27, 31, 32, 36, 40, 42,
      43, 44, 45, 46, 51, 56
    ],
    tutor: [
       14,  38, 102, 164,
      173, 203, 207, 214,
      129, 210
    ]
  },
  {
    dexid: 16,
    baseStats: { hp: 40, atk: 45, def: 40, spa: 35, spd: 35, spe: 56 },
    types: [ 0, 2 ],
    catchRate: 255,
    baseExp: 55,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 4, 4 ],
    ability: [ 51, 51 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       6, 10, 11, 17, 18, 21,
      27, 32, 40, 42, 43, 44,
      45, 46, 47, 52
    ],
    tutor: [
       38, 102, 164, 173,
      203, 189, 207, 214,
      129
    ]
  },
  {
    dexid: 17,
    baseStats: { hp: 63, atk: 60, def: 55, spa: 50, spd: 50, spe: 71 },
    types: [ 0, 2 ],
    catchRate: 120,
    baseExp: 113,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 4, 4 ],
    ability: [ 51, 51 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       6, 10, 11, 17, 18, 21,
      27, 32, 40, 42, 43, 44,
      45, 46, 47, 52
    ],
    tutor: [
       38, 102, 164, 173,
      203, 189, 207, 214,
      129
    ]
  },
  {
    dexid: 18,
    baseStats: { hp: 83, atk: 80, def: 75, spa: 70, spd: 70, spe: 91 },
    types: [ 0, 2 ],
    catchRate: 45,
    baseExp: 172,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 4, 4 ],
    ability: [ 51, 51 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       6, 10, 11, 15, 17, 18, 21,
      27, 32, 40, 42, 43, 44, 45,
      46, 47, 52
    ],
    tutor: [
       38, 102, 164, 173,
      203, 189, 207, 214,
      129
    ]
  },
  {
    dexid: 19,
    baseStats: { hp: 30, atk: 56, def: 35, spa: 25, spd: 35, spe: 72 },
    types: [ 0, 0 ],
    catchRate: 255,
    baseExp: 57,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 50, 62 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       6, 10, 11, 12, 13, 14, 17, 18,
      21, 23, 24, 25, 27, 28, 30, 32,
      34, 42, 43, 44, 45, 46, 51, 56
    ],
    tutor: [
       34,  38,  68, 102,  86,
      164, 173, 196, 203, 189,
      207, 214, 129, 111
    ]
  },
  {
    dexid: 20,
    baseStats: { hp: 55, atk: 81, def: 60, spa: 50, spd: 70, spe: 97 },
    types: [ 0, 0 ],
    catchRate: 127,
    baseExp: 116,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 50, 62 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       5,  6, 10, 11, 12, 13, 14, 15,
      17, 18, 21, 23, 24, 25, 27, 28,
      30, 32, 34, 42, 43, 44, 45, 46,
      51, 54, 56
    ],
    tutor: [
       34,  38,  68, 102,  86,
      164, 173, 196, 203, 189,
      207, 214, 129, 111
    ]
  },
  {
    dexid: 21,
    baseStats: { hp: 40, atk: 60, def: 30, spa: 31, spd: 31, spe: 70 },
    types: [ 0, 2 ],
    catchRate: 255,
    baseExp: 58,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 4, 4 ],
    ability: [ 51, 51 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       6, 10, 11, 17, 18, 21,
      27, 32, 40, 42, 43, 44,
      45, 46, 47, 52
    ],
    tutor: [
       38, 102, 164, 173,
      203, 189, 207, 214,
      129
    ]
  },
  {
    dexid: 22,
    baseStats: { hp: 65, atk: 90, def: 65, spa: 61, spd: 61, spe: 100 },
    types: [ 0, 2 ],
    catchRate: 90,
    baseExp: 162,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 4, 4 ],
    ability: [ 51, 51 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       6, 10, 11, 15, 17, 18, 21,
      27, 32, 40, 42, 43, 44, 45,
      46, 47, 52
    ],
    tutor: [
       38, 102, 164, 173,
      203, 189, 207, 214,
      129
    ]
  },
  {
    dexid: 23,
    baseStats: { hp: 35, atk: 60, def: 44, spa: 40, spd: 54, spe: 55 },
    types: [ 3, 3 ],
    catchRate: 255,
    baseExp: 62,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 14 ],
    ability: [ 22, 61 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       6, 10, 11, 17, 18, 19, 21,
      23, 26, 27, 28, 32, 36, 41,
      42, 43, 44, 45, 46, 49, 54
    ],
    tutor: [
       34,  38, 102, 157,
      164, 173, 203, 207,
      214
    ]
  },
  {
    dexid: 24,
    baseStats: { hp: 60, atk: 85, def: 69, spa: 65, spd: 79, spe: 80 },
    types: [ 3, 3 ],
    catchRate: 90,
    baseExp: 147,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 14 ],
    ability: [ 22, 61 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       6, 10, 11, 15, 17, 18, 19,
      21, 23, 26, 27, 28, 32, 36,
      41, 42, 43, 44, 45, 46, 49,
      54
    ],
    tutor: [
       34,  38, 102, 157,
      164, 173, 203, 207,
      214
    ]
  },
  {
    dexid: 25,
    baseStats: { hp: 35, atk: 55, def: 30, spa: 50, spd: 40, spe: 90 },
    types: [ 12, 12 ],
    catchRate: 190,
    baseExp: 82,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 10,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 6 ],
    ability: [ 9, 9 ],
    escapeRate: 6,
    color: 2,
    noFlip: false,
    tmhm: [
       1,  6, 10, 16, 17, 18, 21,
      23, 24, 25, 27, 28, 31, 32,
      34, 42, 43, 44, 45, 54, 55,
      56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102,  86, 164, 223, 205, 173,
      203, 189, 207, 214, 129, 111,
        9
    ]
  },
  {
    dexid: 26,
    baseStats: { hp: 60, atk: 90, def: 55, spa: 90, spd: 80, spe: 100 },
    types: [ 12, 12 ],
    catchRate: 75,
    baseExp: 122,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 10,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 6 ],
    ability: [ 9, 9 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       1,  6, 10, 15, 16, 17, 18, 21,
      23, 24, 25, 27, 28, 31, 32, 34,
      42, 43, 44, 45, 46, 54, 55, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102,  86, 164, 223, 205, 173,
      203, 189, 207, 214, 129, 111,
        9
    ]
  },
  {
    dexid: 27,
    baseStats: { hp: 50, atk: 75, def: 85, spa: 20, spd: 30, spe: 40 },
    types: [ 4, 4 ],
    catchRate: 255,
    baseExp: 93,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 8, 8 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       1,  6, 10, 11, 17, 21, 23, 26,
      27, 28, 31, 32, 37, 39, 40, 42,
      43, 44, 45, 46, 51, 54, 56
    ],
    tutor: [
       14,  34,  38,  68,  69, 102,
      157, 164, 223, 205, 173, 203,
      189, 207, 214, 129, 111, 210
    ]
  },
  {
    dexid: 28,
    baseStats: { hp: 75, atk: 100, def: 110, spa: 45, spd: 55, spe: 65 },
    types: [ 4, 4 ],
    catchRate: 90,
    baseExp: 163,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 8, 8 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       1,  6, 10, 11, 15, 17, 21, 23,
      26, 27, 28, 31, 32, 37, 39, 40,
      42, 43, 44, 45, 46, 51, 54, 56
    ],
    tutor: [
       14,  34,  38,  68,  69, 102,
      157, 164, 223, 205, 173, 203,
      189, 207, 214, 129, 111, 210
    ]
  },
  {
    dexid: 29,
    baseStats: { hp: 55, atk: 47, def: 52, spa: 40, spd: 40, spe: 41 },
    types: [ 3, 3 ],
    catchRate: 235,
    baseExp: 59,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 254,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 5 ],
    ability: [ 38, 38 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  6, 10, 11, 13, 14, 17, 18,
      21, 23, 24, 25, 27, 28, 32, 34,
      36, 40, 42, 43, 44, 45, 46, 51,
      54, 56
    ],
    tutor: [
       34,  38,  68, 102,
      164, 173, 203, 189,
      207, 214, 111
    ]
  },
  {
    dexid: 30,
    baseStats: { hp: 70, atk: 62, def: 67, spa: 55, spd: 55, spe: 56 },
    types: [ 3, 3 ],
    catchRate: 120,
    baseExp: 117,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 254,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 15, 15 ],
    ability: [ 38, 38 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  6, 10, 11, 13, 14, 17, 18,
      21, 23, 24, 25, 27, 28, 32, 34,
      36, 40, 42, 43, 44, 45, 46, 51,
      54, 56
    ],
    tutor: [
       34,  38,  68, 102,
      164, 173, 203, 189,
      207, 214, 111
    ]
  },
  {
    dexid: 31,
    baseStats: { hp: 90, atk: 82, def: 87, spa: 75, spd: 85, spe: 76 },
    types: [ 3, 4 ],
    catchRate: 45,
    baseExp: 194,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 254,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 15, 15 ],
    ability: [ 38, 38 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       1,  3,  5,  6, 10, 11, 12, 13, 14, 15,
      17, 18, 21, 23, 24, 25, 26, 27, 28, 30,
      31, 32, 34, 35, 36, 37, 38, 39, 40, 41,
      42, 43, 44, 45, 46, 51, 53, 54, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      157, 164, 223, 173, 196, 203, 189,
        8, 207, 214, 111,   9,   7, 210
    ]
  },
  {
    dexid: 32,
    baseStats: { hp: 46, atk: 57, def: 40, spa: 40, spd: 40, spe: 50 },
    types: [ 3, 3 ],
    catchRate: 235,
    baseExp: 60,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 0,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 5 ],
    ability: [ 38, 38 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       3,  6, 10, 11, 13, 14, 17, 18,
      21, 23, 24, 25, 27, 28, 32, 34,
      36, 42, 43, 44, 45, 46, 51, 54,
      56
    ],
    tutor: [
       34,  38,  68, 102,
      164, 173, 203, 189,
      207, 214, 111
    ]
  },
  {
    dexid: 33,
    baseStats: { hp: 61, atk: 72, def: 57, spa: 55, spd: 55, spe: 65 },
    types: [ 3, 3 ],
    catchRate: 120,
    baseExp: 118,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 0,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 5 ],
    ability: [ 38, 38 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       3,  6, 10, 11, 13, 14, 17, 18,
      21, 23, 24, 25, 27, 28, 32, 34,
      36, 42, 43, 44, 45, 46, 51, 54,
      56
    ],
    tutor: [
       34,  38,  68, 102,
      164, 173, 203, 189,
      207, 214, 111
    ]
  },
  {
    dexid: 34,
    baseStats: { hp: 81, atk: 92, def: 77, spa: 85, spd: 75, spe: 85 },
    types: [ 3, 4 ],
    catchRate: 45,
    baseExp: 195,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 0,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 5 ],
    ability: [ 38, 38 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       1,  3,  5,  6, 10, 11, 12, 13, 14, 15,
      17, 18, 21, 23, 24, 25, 26, 27, 28, 30,
      31, 32, 34, 35, 36, 37, 38, 39, 41, 42,
      43, 44, 45, 46, 51, 53, 54, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      157, 164, 223, 173, 196, 203, 189,
        8, 207, 214, 111,   9,   7, 210
    ]
  },
  {
    dexid: 35,
    baseStats: { hp: 70, atk: 45, def: 48, spa: 60, spd: 65, spe: 35 },
    types: [ 0, 0 ],
    catchRate: 150,
    baseExp: 68,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 191,
    hatchCycles: 10,
    baseFriendship: 140,
    growth: 4,
    eggGroups: [ 6, 6 ],
    ability: [ 56, 56 ],
    escapeRate: 0,
    color: 9,
    noFlip: false,
    tmhm: [
       1,  3,  4,  6, 10, 11, 13, 14, 16,
      17, 18, 20, 21, 22, 23, 24, 25, 27,
      28, 29, 30, 31, 32, 33, 34, 35, 38,
      42, 43, 44, 45, 49, 54, 55
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      118, 135, 138,  86, 164, 223, 205,
      244, 173, 203, 189,   8, 207, 214,
      111,   9,   7
    ]
  },
  {
    dexid: 36,
    baseStats: { hp: 95, atk: 70, def: 73, spa: 85, spd: 90, spe: 60 },
    types: [ 0, 0 ],
    catchRate: 25,
    baseExp: 129,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 191,
    hatchCycles: 10,
    baseFriendship: 140,
    growth: 4,
    eggGroups: [ 6, 6 ],
    ability: [ 56, 56 ],
    escapeRate: 0,
    color: 9,
    noFlip: false,
    tmhm: [
       1,  3,  4,  6, 10, 11, 13, 14, 15,
      16, 17, 18, 20, 21, 22, 23, 24, 25,
      27, 28, 29, 30, 31, 32, 33, 34, 35,
      38, 42, 43, 44, 45, 49, 54, 55
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      118, 135, 138,  86, 164, 223, 205,
      244, 173, 203, 189,   8, 207, 214,
      111,   9,   7
    ]
  },
  {
    dexid: 37,
    baseStats: { hp: 38, atk: 41, def: 40, spa: 50, spd: 65, spe: 65 },
    types: [ 9, 9 ],
    catchRate: 190,
    baseExp: 63,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 191,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 18, 18 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       5,  6, 10, 11, 17, 20, 21,
      23, 27, 28, 32, 35, 38, 42,
      43, 44, 45, 50
    ],
    tutor: [
       34,  38, 102, 164,
      173, 203, 207, 214,
      129
    ]
  },
  {
    dexid: 38,
    baseStats: { hp: 73, atk: 76, def: 75, spa: 81, spd: 100, spe: 100 },
    types: [ 9, 9 ],
    catchRate: 75,
    baseExp: 178,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 191,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 18, 18 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       5,  6, 10, 11, 15, 17, 20,
      21, 23, 27, 28, 32, 35, 38,
      42, 43, 44, 45, 50
    ],
    tutor: [
       34,  38, 102, 164,
      173, 203, 207, 214,
      129
    ]
  },
  {
    dexid: 39,
    baseStats: { hp: 115, atk: 45, def: 20, spa: 45, spd: 25, spe: 20 },
    types: [ 0, 0 ],
    catchRate: 170,
    baseExp: 76,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 191,
    hatchCycles: 10,
    baseFriendship: 70,
    growth: 4,
    eggGroups: [ 6, 6 ],
    ability: [ 56, 56 ],
    escapeRate: 0,
    color: 9,
    noFlip: false,
    tmhm: [
       1,  3,  6, 10, 11, 13, 14, 16, 17,
      18, 20, 21, 22, 24, 25, 27, 28, 29,
      30, 31, 32, 33, 34, 35, 38, 42, 43,
      44, 45, 49, 54, 55
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      138,  86, 164, 223, 205, 244, 173,
      203, 189,   8, 207, 214, 111,   9,
        7
    ]
  },
  {
    dexid: 40,
    baseStats: { hp: 140, atk: 70, def: 45, spa: 75, spd: 50, spe: 45 },
    types: [ 0, 0 ],
    catchRate: 50,
    baseExp: 109,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 191,
    hatchCycles: 10,
    baseFriendship: 70,
    growth: 4,
    eggGroups: [ 6, 6 ],
    ability: [ 56, 56 ],
    escapeRate: 0,
    color: 9,
    noFlip: false,
    tmhm: [
       1,  3,  6, 10, 11, 13, 14, 15, 16,
      17, 18, 20, 21, 22, 24, 25, 27, 28,
      29, 30, 31, 32, 33, 34, 35, 38, 42,
      43, 44, 45, 49, 54, 55
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      138,  86, 164, 223, 205, 244, 173,
      203, 189,   8, 207, 214, 111,   9,
        7
    ]
  },
  {
    dexid: 41,
    baseStats: { hp: 40, atk: 45, def: 35, spa: 30, spd: 40, spe: 55 },
    types: [ 3, 2 ],
    catchRate: 255,
    baseExp: 54,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 4, 4 ],
    ability: [ 39, 39 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       6, 10, 11, 12, 17, 18, 19,
      21, 27, 30, 32, 36, 40, 41,
      42, 43, 44, 45, 46, 47, 49
    ],
    tutor: [
       38, 102, 164,
      173, 203, 207,
      214, 129
    ]
  },
  {
    dexid: 42,
    baseStats: { hp: 75, atk: 80, def: 70, spa: 65, spd: 75, spe: 90 },
    types: [ 3, 2 ],
    catchRate: 90,
    baseExp: 171,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 4, 4 ],
    ability: [ 39, 39 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       6, 10, 11, 12, 15, 17, 18,
      19, 21, 27, 30, 32, 36, 40,
      41, 42, 43, 44, 45, 46, 47,
      49
    ],
    tutor: [
       38, 102, 164,
      173, 203, 207,
      214, 129
    ]
  },
  {
    dexid: 43,
    baseStats: { hp: 45, atk: 50, def: 55, spa: 75, spd: 65, spe: 30 },
    types: [ 11, 3 ],
    catchRate: 255,
    baseExp: 78,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 7, 7 ],
    ability: [ 34, 34 ],
    escapeRate: 4,
    color: 1,
    noFlip: false,
    tmhm: [
       6,  9, 10, 11, 17, 19, 21,
      22, 27, 32, 36, 42, 43, 44,
      45, 51, 55
    ],
    tutor: [
       14,  38, 102, 164,
      173, 203, 207, 214
    ]
  },
  {
    dexid: 44,
    baseStats: { hp: 60, atk: 65, def: 70, spa: 85, spd: 75, spe: 40 },
    types: [ 11, 3 ],
    catchRate: 120,
    baseExp: 132,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 7, 7 ],
    ability: [ 34, 34 ],
    escapeRate: 6,
    color: 1,
    noFlip: false,
    tmhm: [
       6,  9, 10, 11, 17, 19, 21,
      22, 27, 32, 36, 42, 43, 44,
      45, 51, 55
    ],
    tutor: [
       14,  38, 102, 164,
      173, 203, 207, 214
    ]
  },
  {
    dexid: 45,
    baseStats: { hp: 75, atk: 80, def: 85, spa: 100, spd: 90, spe: 50 },
    types: [ 11, 3 ],
    catchRate: 45,
    baseExp: 184,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 7, 7 ],
    ability: [ 34, 34 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       6,  9, 10, 11, 15, 17, 19,
      21, 22, 27, 32, 36, 42, 43,
      44, 45, 51, 55
    ],
    tutor: [
       14,  34,  38, 102,
      164, 173, 203, 207,
      214
    ]
  },
  {
    dexid: 46,
    baseStats: { hp: 35, atk: 70, def: 55, spa: 45, spd: 55, spe: 25 },
    types: [ 6, 11 ],
    catchRate: 190,
    baseExp: 70,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 3, 7 ],
    ability: [ 27, 27 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       6,  9, 10, 11, 17, 19, 21,
      22, 27, 28, 32, 36, 40, 42,
      43, 44, 45, 46, 51, 55, 56
    ],
    tutor: [
       14,  34,  38,  68,
      102, 164, 173, 203,
      207, 214, 210
    ]
  },
  {
    dexid: 47,
    baseStats: { hp: 60, atk: 95, def: 80, spa: 60, spd: 80, spe: 30 },
    types: [ 6, 11 ],
    catchRate: 75,
    baseExp: 128,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 3, 7 ],
    ability: [ 27, 27 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       6,  9, 10, 11, 15, 17, 19,
      21, 22, 27, 28, 32, 36, 40,
      42, 43, 44, 45, 46, 51, 55,
      56
    ],
    tutor: [
       14,  34,  38,  68,
      102, 164, 173, 203,
      207, 214, 210
    ]
  },
  {
    dexid: 48,
    baseStats: { hp: 60, atk: 55, def: 50, spa: 40, spd: 55, spe: 45 },
    types: [ 6, 3 ],
    catchRate: 190,
    baseExp: 75,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 3, 3 ],
    ability: [ 14, 14 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       6, 10, 11, 17, 19, 21, 22,
      27, 29, 32, 36, 42, 43, 44,
      45, 46, 48, 55
    ],
    tutor: [
       38, 102, 164,
      173, 203, 207,
      214, 129
    ]
  },
  {
    dexid: 49,
    baseStats: { hp: 70, atk: 65, def: 60, spa: 90, spd: 75, spe: 90 },
    types: [ 6, 3 ],
    catchRate: 75,
    baseExp: 138,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 3, 3 ],
    ability: [ 19, 19 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       6, 10, 11, 15, 17, 19, 21,
      22, 27, 29, 32, 36, 40, 42,
      43, 44, 45, 46, 48, 55
    ],
    tutor: [
       38, 102, 164,
      173, 203, 207,
      214, 129
    ]
  },
  {
    dexid: 50,
    baseStats: { hp: 10, atk: 55, def: 25, spa: 35, spd: 45, spe: 95 },
    types: [ 4, 4 ],
    catchRate: 255,
    baseExp: 81,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 8, 71 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       6, 10, 11, 17, 21, 26, 27,
      28, 32, 36, 39, 40, 42, 43,
      44, 45, 46, 51, 56
    ],
    tutor: [
       34,  38, 102, 157,
      164, 173, 203, 189,
      207, 214
    ]
  },
  {
    dexid: 51,
    baseStats: { hp: 35, atk: 80, def: 50, spa: 50, spd: 70, spe: 120 },
    types: [ 4, 4 ],
    catchRate: 50,
    baseExp: 153,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 8, 71 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       6, 10, 11, 15, 17, 21, 26,
      27, 28, 32, 36, 39, 40, 42,
      43, 44, 45, 46, 51, 56
    ],
    tutor: [
       34,  38, 102, 157,
      164, 173, 203, 189,
      207, 214
    ]
  },
  {
    dexid: 52,
    baseStats: { hp: 40, atk: 45, def: 35, spa: 40, spd: 40, spe: 90 },
    types: [ 0, 0 ],
    catchRate: 255,
    baseExp: 69,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 53, 53 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       3,  6, 10, 11, 12, 17, 18, 21,
      23, 24, 25, 27, 28, 30, 32, 34,
      40, 41, 42, 43, 44, 45, 46, 49,
      51, 55
    ],
    tutor: [
       34,  38, 102, 138, 164,
      244, 173, 196, 203, 189,
      207, 214, 129, 111
    ]
  },
  {
    dexid: 53,
    baseStats: { hp: 65, atk: 70, def: 60, spa: 65, spd: 65, spe: 115 },
    types: [ 0, 0 ],
    catchRate: 90,
    baseExp: 148,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 7, 7 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       3,  5,  6, 10, 11, 12, 15, 17,
      18, 21, 23, 24, 25, 27, 28, 30,
      32, 34, 40, 41, 42, 43, 44, 45,
      46, 49, 51, 55
    ],
    tutor: [
       34,  38, 102, 138, 164,
      244, 173, 196, 203, 189,
      207, 214, 129, 111
    ]
  },
  {
    dexid: 54,
    baseStats: { hp: 50, atk: 52, def: 48, spa: 65, spd: 50, spe: 55 },
    types: [ 10, 10 ],
    catchRate: 190,
    baseExp: 80,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 2, 5 ],
    ability: [ 6, 13 ],
    escapeRate: 6,
    color: 2,
    noFlip: false,
    tmhm: [
       1,  3,  4,  6,  7, 10, 13, 14,
      17, 18, 21, 23, 27, 28, 31, 32,
      40, 42, 43, 44, 45, 53, 54, 55,
      56, 57, 58
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 164, 223, 244, 173, 196,
      203, 189,   8, 207, 214, 129
    ]
  },
  {
    dexid: 55,
    baseStats: { hp: 80, atk: 82, def: 78, spa: 95, spd: 80, spe: 85 },
    types: [ 10, 10 ],
    catchRate: 75,
    baseExp: 174,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 2, 5 ],
    ability: [ 6, 13 ],
    escapeRate: 8,
    color: 1,
    noFlip: false,
    tmhm: [
       1,  3,  4,  6,  7, 10, 13, 14,
      15, 17, 18, 21, 23, 27, 28, 31,
      32, 40, 42, 43, 44, 45, 53, 54,
      55, 56, 57, 58
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 164, 223, 244, 173, 196,
      203, 189,   8, 207, 214, 129,
      210
    ]
  },
  {
    dexid: 56,
    baseStats: { hp: 40, atk: 80, def: 35, spa: 35, spd: 45, spe: 70 },
    types: [ 1, 1 ],
    catchRate: 190,
    baseExp: 74,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 72, 72 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       1,  6,  8, 10, 11, 12, 17, 18,
      21, 23, 24, 25, 26, 27, 28, 31,
      32, 39, 40, 42, 43, 44, 45, 46,
      50, 54, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      118, 157, 164, 223, 244, 173, 203,
      189,   8, 207, 214, 129, 111,   9,
        7
    ]
  },
  {
    dexid: 57,
    baseStats: { hp: 65, atk: 105, def: 60, spa: 60, spd: 70, spe: 95 },
    types: [ 1, 1 ],
    catchRate: 75,
    baseExp: 149,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 72, 72 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       1,  6,  8, 10, 11, 12, 15, 17,
      18, 21, 23, 24, 25, 26, 27, 28,
      31, 32, 39, 40, 42, 43, 44, 45,
      46, 50, 54, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      118, 157, 164, 223, 244, 173, 203,
      189,   8, 207, 214, 129, 111,   9,
        7
    ]
  },
  {
    dexid: 58,
    baseStats: { hp: 55, atk: 70, def: 45, spa: 70, spd: 50, spe: 60 },
    types: [ 9, 9 ],
    catchRate: 190,
    baseExp: 91,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 63,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 5, 5 ],
    ability: [ 22, 18 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       5,  6, 10, 11, 17, 21, 23,
      27, 28, 32, 35, 38, 40, 42,
      43, 44, 45, 46, 50, 54, 56
    ],
    tutor: [
       34,  38, 102, 164,
      173, 203, 207, 214,
      129
    ]
  },
  {
    dexid: 59,
    baseStats: { hp: 90, atk: 110, def: 80, spa: 100, spd: 80, spe: 95 },
    types: [ 9, 9 ],
    catchRate: 75,
    baseExp: 213,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 63,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 5, 5 ],
    ability: [ 22, 18 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       5,  6, 10, 11, 15, 17, 21,
      23, 27, 28, 32, 35, 38, 40,
      42, 43, 44, 45, 46, 50, 54,
      56
    ],
    tutor: [
       34,  38, 102, 164,
      173, 203, 207, 214,
      129
    ]
  },
  {
    dexid: 60,
    baseStats: { hp: 40, atk: 50, def: 40, spa: 40, spd: 40, spe: 90 },
    types: [ 10, 10 ],
    catchRate: 255,
    baseExp: 77,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 2, 2 ],
    ability: [ 11, 6 ],
    escapeRate: 0,
    color: 1,
    noFlip: true,
    tmhm: [
       3,  6,  7, 10, 13, 14, 17,
      18, 21, 27, 28, 29, 32, 42,
      43, 44, 45, 46, 53, 57, 58
    ],
    tutor: [
       34,  38, 102, 164,
      173, 196, 203, 207,
      214, 111
    ]
  },
  {
    dexid: 61,
    baseStats: { hp: 65, atk: 65, def: 65, spa: 50, spd: 50, spe: 90 },
    types: [ 10, 10 ],
    catchRate: 120,
    baseExp: 131,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 2, 2 ],
    ability: [ 11, 6 ],
    escapeRate: 0,
    color: 1,
    noFlip: true,
    tmhm: [
       1,  3,  6,  7, 10, 13, 14, 17,
      18, 21, 26, 27, 28, 29, 31, 32,
      42, 43, 44, 45, 46, 53, 54, 56,
      57, 58
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 118, 164, 173, 196, 203,
      189,   8, 207, 214, 111
    ]
  },
  {
    dexid: 62,
    baseStats: { hp: 90, atk: 85, def: 95, spa: 70, spd: 90, spe: 70 },
    types: [ 10, 1 ],
    catchRate: 45,
    baseExp: 185,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 2, 2 ],
    ability: [ 11, 6 ],
    escapeRate: 0,
    color: 1,
    noFlip: true,
    tmhm: [
       1,  3,  6,  7,  8, 10, 13, 14, 15,
      17, 18, 21, 26, 27, 28, 29, 31, 32,
      39, 42, 43, 44, 45, 46, 53, 54, 56,
      57, 58
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 118, 164, 223, 173, 196,
      203, 189,   8, 207, 214, 111
    ]
  },
  {
    dexid: 63,
    baseStats: { hp: 25, atk: 20, def: 15, spa: 105, spd: 55, spe: 90 },
    types: [ 13, 13 ],
    catchRate: 200,
    baseExp: 73,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 63,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 8, 8 ],
    ability: [ 28, 39 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       1,  4,  6, 10, 11, 12, 16, 17,
      18, 20, 21, 23, 27, 29, 30, 32,
      33, 34, 41, 42, 43, 44, 45, 46,
      48, 49, 55
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      118, 138,  86, 164, 223, 244, 173,
      203,   8, 207, 214,   9,   7
    ]
  },
  {
    dexid: 64,
    baseStats: { hp: 40, atk: 35, def: 30, spa: 120, spd: 70, spe: 105 },
    types: [ 13, 13 ],
    catchRate: 100,
    baseExp: 145,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 63,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 8, 8 ],
    ability: [ 28, 39 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       1,  4,  6, 10, 11, 12, 16, 17,
      18, 20, 21, 23, 27, 29, 30, 32,
      33, 34, 41, 42, 43, 44, 45, 46,
      48, 49, 55
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      118, 138,  86, 164, 223, 244, 173,
      203,   8, 207, 214,   9,   7
    ]
  },
  {
    dexid: 65,
    baseStats: { hp: 55, atk: 50, def: 45, spa: 135, spd: 85, spe: 120 },
    types: [ 13, 13 ],
    catchRate: 50,
    baseExp: 186,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 63,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 8, 8 ],
    ability: [ 28, 39 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       1,  4,  6, 10, 11, 12, 15, 16,
      17, 18, 20, 21, 23, 27, 29, 30,
      32, 33, 34, 41, 42, 43, 44, 45,
      46, 48, 49, 55
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      118, 138,  86, 164, 223, 244, 173,
      203,   8, 207, 214,   9,   7
    ]
  },
  {
    dexid: 66,
    baseStats: { hp: 70, atk: 80, def: 50, spa: 35, spd: 35, spe: 35 },
    types: [ 1, 1 ],
    catchRate: 180,
    baseExp: 88,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 63,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 8, 8 ],
    ability: [ 62, 62 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       1,  6,  8, 10, 11, 17, 18, 21,
      26, 27, 28, 31, 32, 35, 38, 39,
      42, 43, 44, 45, 46, 54, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 118, 157, 164, 223, 173,
      203, 189,   8, 207, 214,   9,
        7
    ]
  },
  {
    dexid: 67,
    baseStats: { hp: 80, atk: 100, def: 70, spa: 50, spd: 60, spe: 45 },
    types: [ 1, 1 ],
    catchRate: 90,
    baseExp: 146,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 63,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 8, 8 ],
    ability: [ 62, 62 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       1,  6,  8, 10, 11, 17, 18, 21,
      26, 27, 28, 31, 32, 35, 38, 39,
      42, 43, 44, 45, 46, 54, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 118, 157, 164, 223, 173,
      203, 189,   8, 207, 214,   9,
        7
    ]
  },
  {
    dexid: 68,
    baseStats: { hp: 90, atk: 130, def: 80, spa: 65, spd: 85, spe: 55 },
    types: [ 1, 1 ],
    catchRate: 45,
    baseExp: 193,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 63,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 8, 8 ],
    ability: [ 62, 62 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       1,  6,  8, 10, 11, 15, 17, 18,
      21, 26, 27, 28, 31, 32, 35, 38,
      39, 42, 43, 44, 45, 46, 54, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 118, 157, 164, 223, 173,
      203, 189,   8, 207, 214,   9,
        7
    ]
  },
  {
    dexid: 69,
    baseStats: { hp: 50, atk: 75, def: 35, spa: 70, spd: 30, spe: 40 },
    types: [ 11, 3 ],
    catchRate: 255,
    baseExp: 84,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 7, 7 ],
    ability: [ 34, 34 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       6,  9, 10, 11, 17, 19, 21,
      22, 27, 32, 36, 42, 43, 44,
      45, 46, 51, 55
    ],
    tutor: [
       14,  38, 102, 164,
      173, 203, 207, 214
    ]
  },
  {
    dexid: 70,
    baseStats: { hp: 65, atk: 90, def: 50, spa: 85, spd: 45, spe: 55 },
    types: [ 11, 3 ],
    catchRate: 120,
    baseExp: 151,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 7, 7 ],
    ability: [ 34, 34 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       6,  9, 10, 11, 17, 19, 21,
      22, 27, 32, 36, 42, 43, 44,
      45, 46, 51, 55
    ],
    tutor: [
       14,  38, 102, 164,
      173, 203, 207, 214
    ]
  },
  {
    dexid: 71,
    baseStats: { hp: 80, atk: 105, def: 65, spa: 100, spd: 60, spe: 70 },
    types: [ 11, 3 ],
    catchRate: 45,
    baseExp: 191,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 7, 7 ],
    ability: [ 34, 34 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       6,  9, 10, 11, 15, 17, 19,
      21, 22, 27, 32, 36, 42, 43,
      44, 45, 46, 51, 55
    ],
    tutor: [
       14,  34,  38, 102,
      164, 173, 203, 207,
      214
    ]
  },
  {
    dexid: 72,
    baseStats: { hp: 40, atk: 40, def: 35, spa: 50, spd: 100, spe: 70 },
    types: [ 10, 3 ],
    catchRate: 190,
    baseExp: 105,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 9, 9 ],
    ability: [ 29, 64 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 17,
      18, 19, 21, 27, 32, 36, 42,
      43, 44, 45, 46, 51, 53, 57,
      58
    ],
    tutor: [
       14,  38, 102, 164,
      173, 196, 203, 207,
      214
    ]
  },
  {
    dexid: 73,
    baseStats: { hp: 80, atk: 70, def: 65, spa: 80, spd: 120, spe: 100 },
    types: [ 10, 3 ],
    catchRate: 60,
    baseExp: 205,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 9, 9 ],
    ability: [ 29, 64 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 15, 17,
      18, 19, 21, 27, 32, 36, 42, 43,
      44, 45, 46, 51, 53, 57, 58
    ],
    tutor: [
       14,  38, 102, 164,
      173, 196, 203, 207,
      214
    ]
  },
  {
    dexid: 74,
    baseStats: { hp: 40, atk: 80, def: 100, spa: 30, spd: 30, spe: 20 },
    types: [ 5, 4 ],
    catchRate: 255,
    baseExp: 86,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 10, 10 ],
    ability: [ 69, 5 ],
    escapeRate: 4,
    color: 5,
    noFlip: false,
    tmhm: [
       1,  6, 10, 11, 17, 21, 26,
      27, 28, 31, 32, 35, 37, 38,
      39, 42, 43, 44, 45, 54, 56
    ],
    tutor: [
        5,  34,  38,  68,  69, 102,
      118, 153, 157, 164, 223, 205,
      173, 203, 189, 207, 214, 111,
        7
    ]
  },
  {
    dexid: 75,
    baseStats: { hp: 55, atk: 95, def: 115, spa: 45, spd: 45, spe: 35 },
    types: [ 5, 4 ],
    catchRate: 120,
    baseExp: 134,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 10, 10 ],
    ability: [ 69, 5 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       1,  6, 10, 11, 17, 21, 26,
      27, 28, 31, 32, 35, 37, 38,
      39, 42, 43, 44, 45, 54, 56
    ],
    tutor: [
        5,  34,  38,  68,  69, 102,
      118, 153, 157, 164, 223, 205,
      173, 203, 189, 207, 214, 111,
        7
    ]
  },
  {
    dexid: 76,
    baseStats: { hp: 80, atk: 110, def: 130, spa: 55, spd: 65, spe: 45 },
    types: [ 5, 4 ],
    catchRate: 45,
    baseExp: 177,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 10, 10 ],
    ability: [ 69, 5 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       1,  5,  6, 10, 11, 15, 17, 21,
      26, 27, 28, 31, 32, 35, 37, 38,
      39, 42, 43, 44, 45, 54, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 118, 153, 157, 164, 223,
      205, 173, 203, 189, 207, 214,
      111,   7, 210
    ]
  },
  {
    dexid: 77,
    baseStats: { hp: 50, atk: 85, def: 55, spa: 65, spd: 65, spe: 90 },
    types: [ 9, 9 ],
    catchRate: 190,
    baseExp: 152,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 50, 18 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       6, 10, 11, 17, 21, 22, 23,
      27, 32, 35, 38, 42, 43, 44,
      45, 50, 54
    ],
    tutor: [
       34,  38, 102, 164,
      173, 203, 207, 214,
      129
    ]
  },
  {
    dexid: 78,
    baseStats: { hp: 65, atk: 100, def: 70, spa: 80, spd: 80, spe: 105 },
    types: [ 9, 9 ],
    catchRate: 60,
    baseExp: 192,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 50, 18 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       6, 10, 11, 15, 17, 21, 22,
      23, 27, 32, 35, 38, 42, 43,
      44, 45, 50, 54
    ],
    tutor: [
       34,  38, 102, 164,
      173, 203, 207, 214,
      129
    ]
  },
  {
    dexid: 79,
    baseStats: { hp: 90, atk: 65, def: 65, spa: 40, spd: 40, spe: 15 },
    types: [ 10, 13 ],
    catchRate: 190,
    baseExp: 99,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 1, 2 ],
    ability: [ 12, 20 ],
    escapeRate: 0,
    color: 9,
    noFlip: false,
    tmhm: [
       3,  4,  6,  7, 10, 11, 13, 14, 17,
      18, 20, 21, 23, 26, 27, 28, 29, 30,
      32, 35, 38, 42, 43, 44, 45, 48, 53,
      54, 55, 58
    ],
    tutor: [
       34,  38, 102, 138,  86,
      164, 244, 173, 196, 203,
      189, 207, 214, 129
    ]
  },
  {
    dexid: 80,
    baseStats: { hp: 95, atk: 75, def: 110, spa: 100, spd: 80, spe: 30 },
    types: [ 10, 13 ],
    catchRate: 75,
    baseExp: 164,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 1, 2 ],
    ability: [ 12, 20 ],
    escapeRate: 0,
    color: 9,
    noFlip: false,
    tmhm: [
       1,  3,  4,  6,  7, 10, 11, 13, 14,
      15, 17, 18, 20, 21, 23, 26, 27, 28,
      29, 30, 31, 32, 35, 38, 42, 43, 44,
      45, 48, 53, 54, 55, 56, 58
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 138,  86, 164, 223, 244,
      173, 196, 203, 189,   8, 207,
      214, 129, 210
    ]
  },
  {
    dexid: 81,
    baseStats: { hp: 25, atk: 35, def: 70, spa: 95, spd: 55, spe: 45 },
    types: [ 12, 8 ],
    catchRate: 190,
    baseExp: 89,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 10, 10 ],
    ability: [ 42, 5 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       6, 10, 11, 17, 18, 21,
      24, 25, 27, 32, 33, 34,
      42, 43, 44, 55
    ],
    tutor: [
       38, 102,  86, 164,
      205, 173, 203, 207,
      214, 129
    ]
  },
  {
    dexid: 82,
    baseStats: { hp: 50, atk: 60, def: 95, spa: 120, spd: 70, spe: 70 },
    types: [ 12, 8 ],
    catchRate: 60,
    baseExp: 161,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 10, 10 ],
    ability: [ 42, 5 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       6, 10, 11, 15, 17, 18, 21,
      24, 25, 27, 32, 33, 34, 42,
      43, 44, 55
    ],
    tutor: [
       38, 102,  86, 164,
      205, 173, 203, 207,
      214, 129
    ]
  },
  {
    dexid: 83,
    baseStats: { hp: 52, atk: 65, def: 55, spa: 58, spd: 62, spe: 60 },
    types: [ 0, 2 ],
    catchRate: 45,
    baseExp: 94,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 4, 5 ],
    ability: [ 51, 39 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       6, 10, 11, 17, 21, 23, 27,
      32, 40, 42, 43, 44, 45, 46,
      47, 51, 52
    ],
    tutor: [
       14,  34,  38, 102,
      164, 244, 173, 203,
      189, 207, 214, 129
    ]
  },
  {
    dexid: 84,
    baseStats: { hp: 35, atk: 85, def: 45, spa: 35, spd: 35, spe: 75 },
    types: [ 0, 2 ],
    catchRate: 190,
    baseExp: 96,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 4, 4 ],
    ability: [ 50, 48 ],
    escapeRate: 8,
    color: 5,
    noFlip: false,
    tmhm: [
       6, 10, 11, 17, 21, 27,
      32, 40, 42, 43, 44, 45,
      46, 47, 52
    ],
    tutor: [
       34,  38, 102, 164,
      173, 203, 189, 207,
      214, 129
    ]
  },
  {
    dexid: 85,
    baseStats: { hp: 60, atk: 110, def: 70, spa: 60, spd: 60, spe: 100 },
    types: [ 0, 2 ],
    catchRate: 45,
    baseExp: 158,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 4, 4 ],
    ability: [ 50, 48 ],
    escapeRate: 10,
    color: 5,
    noFlip: false,
    tmhm: [
       6, 10, 11, 12, 15, 17, 21,
      27, 32, 40, 41, 42, 43, 44,
      45, 46, 47, 52
    ],
    tutor: [
       34,  38, 102, 164,
      173, 203, 189, 207,
      214, 129
    ]
  },
  {
    dexid: 86,
    baseStats: { hp: 65, atk: 45, def: 55, spa: 45, spd: 70, spe: 45 },
    types: [ 10, 10 ],
    catchRate: 190,
    baseExp: 100,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 2, 5 ],
    ability: [ 47, 47 ],
    escapeRate: 0,
    color: 8,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 17,
      18, 20, 21, 27, 32, 42, 43,
      44, 45, 46, 53, 57, 58
    ],
    tutor: [
       34,  38, 102, 164,
      173, 196, 203, 207,
      214
    ]
  },
  {
    dexid: 87,
    baseStats: { hp: 90, atk: 70, def: 80, spa: 70, spd: 95, spe: 70 },
    types: [ 10, 14 ],
    catchRate: 75,
    baseExp: 176,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 2, 5 ],
    ability: [ 47, 47 ],
    escapeRate: 0,
    color: 8,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 15,
      17, 18, 20, 21, 27, 32, 42,
      43, 44, 45, 46, 53, 57, 58
    ],
    tutor: [
       34,  38, 102, 164,
      173, 196, 203, 207,
      214
    ]
  },
  {
    dexid: 88,
    baseStats: { hp: 80, atk: 80, def: 50, spa: 40, spd: 50, spe: 25 },
    types: [ 3, 3 ],
    catchRate: 190,
    baseExp: 90,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 11, 11 ],
    ability: [ 1, 60 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       6, 10, 11, 12, 17, 18, 19, 21,
      24, 25, 27, 28, 32, 34, 35, 36,
      38, 39, 41, 42, 43, 44, 45, 46
    ],
    tutor: [
       34, 102, 153, 164, 223,
      173, 203, 189,   8, 207,
      214,   9,   7
    ]
  },
  {
    dexid: 89,
    baseStats: { hp: 105, atk: 105, def: 75, spa: 65, spd: 100, spe: 50 },
    types: [ 3, 3 ],
    catchRate: 75,
    baseExp: 157,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 11, 11 ],
    ability: [ 1, 60 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       1,  6, 10, 11, 12, 15, 17, 18, 19,
      21, 24, 25, 27, 28, 31, 32, 34, 35,
      36, 38, 39, 41, 42, 43, 44, 45, 46,
      54, 56
    ],
    tutor: [
       34, 102, 153, 164, 223,
      173, 203, 189,   8, 207,
      214,   9,   7
    ]
  },
  {
    dexid: 90,
    baseStats: { hp: 30, atk: 65, def: 100, spa: 45, spd: 25, spe: 40 },
    types: [ 10, 10 ],
    catchRate: 190,
    baseExp: 97,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 9, 9 ],
    ability: [ 75, 75 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 17,
      18, 21, 27, 32, 42, 43, 44,
      45, 53, 58
    ],
    tutor: [
       38, 102, 153, 164,
      173, 196, 203, 207,
      214, 129
    ]
  },
  {
    dexid: 91,
    baseStats: { hp: 50, atk: 95, def: 180, spa: 85, spd: 45, spe: 70 },
    types: [ 10, 14 ],
    catchRate: 60,
    baseExp: 203,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 9, 9 ],
    ability: [ 75, 75 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 15,
      17, 18, 21, 27, 32, 41, 42,
      43, 44, 45, 53, 58
    ],
    tutor: [
       38, 102, 153, 164,
      173, 196, 203, 207,
      214, 129
    ]
  },
  {
    dexid: 92,
    baseStats: { hp: 30, atk: 35, def: 30, spa: 100, spd: 35, spe: 80 },
    types: [ 7, 3 ],
    catchRate: 190,
    baseExp: 95,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 11, 11 ],
    ability: [ 26, 26 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       6, 10, 11, 12, 17, 18, 19,
      21, 24, 27, 29, 30, 32, 36,
      41, 42, 43, 44, 45, 46, 48,
      49
    ],
    tutor: [
      102, 138, 153,
      164, 244, 173,
      203, 207, 214
    ]
  },
  {
    dexid: 93,
    baseStats: { hp: 45, atk: 50, def: 45, spa: 115, spd: 55, spe: 95 },
    types: [ 7, 3 ],
    catchRate: 90,
    baseExp: 126,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 11, 11 ],
    ability: [ 26, 26 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       6, 10, 11, 12, 17, 18, 19,
      21, 24, 27, 29, 30, 32, 36,
      41, 42, 43, 44, 45, 46, 48,
      49
    ],
    tutor: [
      102, 138, 153,
      164, 244, 173,
      203, 207, 214
    ]
  },
  {
    dexid: 94,
    baseStats: { hp: 60, atk: 65, def: 60, spa: 130, spd: 75, spe: 110 },
    types: [ 7, 3 ],
    catchRate: 45,
    baseExp: 190,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 11, 11 ],
    ability: [ 26, 26 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       1,  6, 10, 11, 12, 15, 17, 18,
      19, 21, 24, 25, 27, 29, 30, 31,
      32, 36, 41, 42, 43, 44, 45, 46,
      48, 49, 54, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 118, 138, 153, 164, 223,
      244, 173, 203,   8, 207, 214,
        9,   7
    ]
  },
  {
    dexid: 95,
    baseStats: { hp: 35, atk: 45, def: 160, spa: 30, spd: 45, spe: 70 },
    types: [ 5, 4 ],
    catchRate: 45,
    baseExp: 108,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 25,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 10, 10 ],
    ability: [ 69, 5 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       5,  6, 10, 11, 12, 17, 21,
      23, 26, 27, 28, 32, 37, 39,
      41, 42, 43, 44, 45, 54, 56
    ],
    tutor: [
       34,  38, 102, 153,
      157, 164, 244, 173,
      203, 189, 207, 214
    ]
  },
  {
    dexid: 96,
    baseStats: { hp: 60, atk: 48, def: 45, spa: 43, spd: 90, spe: 42 },
    types: [ 13, 13 ],
    catchRate: 190,
    baseExp: 102,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 8, 8 ],
    ability: [ 15, 15 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       1,  4,  6, 10, 11, 12, 16, 17,
      18, 20, 21, 27, 29, 30, 31, 32,
      33, 41, 42, 43, 44, 45, 46, 48,
      49, 55
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      118, 138,  86, 164, 223, 244, 173,
      203,   8, 207, 214,   9,   7
    ]
  },
  {
    dexid: 97,
    baseStats: { hp: 85, atk: 73, def: 70, spa: 73, spd: 115, spe: 67 },
    types: [ 13, 13 ],
    catchRate: 75,
    baseExp: 165,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 8, 8 ],
    ability: [ 15, 15 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       1,  4,  6, 10, 11, 12, 15, 16,
      17, 18, 20, 21, 27, 29, 30, 31,
      32, 33, 41, 42, 43, 44, 45, 46,
      48, 49, 55
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      118, 138,  86, 164, 223, 244, 173,
      203,   8, 207, 214,   9,   7
    ]
  },
  {
    dexid: 98,
    baseStats: { hp: 30, atk: 105, def: 90, spa: 25, spd: 25, spe: 50 },
    types: [ 10, 10 ],
    catchRate: 225,
    baseExp: 115,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 9, 9 ],
    ability: [ 52, 75 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 17, 18,
      21, 27, 28, 32, 39, 42, 43, 44,
      45, 46, 51, 53, 54, 56, 58
    ],
    tutor: [
       14,  34,  38, 102,
      164, 173, 196, 203,
      189, 207, 214, 210
    ]
  },
  {
    dexid: 99,
    baseStats: { hp: 55, atk: 130, def: 115, spa: 50, spd: 50, spe: 75 },
    types: [ 10, 10 ],
    catchRate: 60,
    baseExp: 206,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 9, 9 ],
    ability: [ 52, 75 ],
    escapeRate: 0,
    color: 0,
    noFlip: true,
    tmhm: [
       3,  6,  7, 10, 13, 14, 15, 17,
      18, 21, 27, 28, 32, 39, 42, 43,
      44, 45, 46, 51, 53, 54, 56, 58
    ],
    tutor: [
       14,  34,  38, 102,
      164, 173, 196, 203,
      189, 207, 214, 210
    ]
  },
  {
    dexid: 100,
    baseStats: { hp: 40, atk: 30, def: 50, spa: 55, spd: 55, spe: 100 },
    types: [ 12, 12 ],
    catchRate: 190,
    baseExp: 103,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 10, 10 ],
    ability: [ 43, 9 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       6, 10, 12, 16, 17, 18, 21,
      24, 25, 27, 32, 34, 41, 42,
      43, 44, 46, 55
    ],
    tutor: [
      102,  86, 153, 164,
      205, 173, 203, 207,
      214, 129
    ]
  },
  {
    dexid: 101,
    baseStats: { hp: 60, atk: 50, def: 70, spa: 80, spd: 80, spe: 140 },
    types: [ 12, 12 ],
    catchRate: 60,
    baseExp: 150,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 10, 10 ],
    ability: [ 43, 9 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       6, 10, 12, 15, 16, 17, 18,
      21, 24, 25, 27, 32, 34, 41,
      42, 43, 44, 46, 55
    ],
    tutor: [
      102,  86, 153, 164,
      205, 173, 203, 207,
      214, 129
    ]
  },
  {
    dexid: 102,
    baseStats: { hp: 60, atk: 40, def: 80, spa: 60, spd: 45, spe: 40 },
    types: [ 11, 13 ],
    catchRate: 90,
    baseExp: 98,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 7, 7 ],
    ability: [ 34, 34 ],
    escapeRate: 0,
    color: 9,
    noFlip: false,
    tmhm: [
       6,  9, 10, 11, 16, 17, 19,
      21, 22, 27, 29, 32, 33, 36,
      42, 43, 44, 45, 46, 48, 54,
      55
    ],
    tutor: [
       38, 102, 138, 153,
      164, 205, 244, 173,
      203, 207, 214
    ]
  },
  {
    dexid: 103,
    baseStats: { hp: 95, atk: 95, def: 85, spa: 125, spd: 65, spe: 55 },
    types: [ 11, 13 ],
    catchRate: 45,
    baseExp: 212,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 7, 7 ],
    ability: [ 34, 34 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       6,  9, 10, 11, 15, 16, 17, 19,
      21, 22, 27, 29, 32, 33, 36, 42,
      43, 44, 45, 46, 48, 54, 55
    ],
    tutor: [
       38, 102, 138, 153,
      164, 205, 244, 173,
      203, 207, 214
    ]
  },
  {
    dexid: 104,
    baseStats: { hp: 50, atk: 50, def: 95, spa: 40, spd: 50, spe: 35 },
    types: [ 4, 4 ],
    catchRate: 190,
    baseExp: 87,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 1, 1 ],
    ability: [ 69, 31 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       1,  6, 10, 11, 13, 14, 17, 21,
      23, 26, 27, 28, 31, 32, 35, 37,
      38, 39, 40, 42, 43, 44, 45, 46,
      54, 56
    ],
    tutor: [
        5,  14,  25,  34,  38,  68,
       69, 102, 157, 164, 223, 173,
      196, 203, 189, 207, 214,   9,
        7
    ]
  },
  {
    dexid: 105,
    baseStats: { hp: 60, atk: 80, def: 110, spa: 50, spd: 80, spe: 45 },
    types: [ 4, 4 ],
    catchRate: 75,
    baseExp: 124,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 1, 1 ],
    ability: [ 69, 31 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       1,  6, 10, 11, 13, 14, 15, 17,
      21, 23, 26, 27, 28, 31, 32, 35,
      37, 38, 39, 40, 42, 43, 44, 45,
      46, 54, 56
    ],
    tutor: [
        5,  14,  25,  34,  38,  68,
       69, 102, 157, 164, 223, 173,
      196, 203, 189, 207, 214,   9,
        7
    ]
  },
  {
    dexid: 106,
    baseStats: { hp: 50, atk: 120, def: 53, spa: 35, spd: 110, spe: 87 },
    types: [ 1, 1 ],
    catchRate: 45,
    baseExp: 139,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 0,
    hatchCycles: 25,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 8, 8 ],
    ability: [ 7, 7 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       1,  6,  8, 10, 11, 17, 18,
      21, 26, 27, 31, 32, 39, 42,
      43, 44, 45, 46, 54, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 118, 157, 164, 223, 173,
      203, 189, 207, 214, 129
    ]
  },
  {
    dexid: 107,
    baseStats: { hp: 50, atk: 105, def: 79, spa: 35, spd: 110, spe: 76 },
    types: [ 1, 1 ],
    catchRate: 45,
    baseExp: 140,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 0,
    hatchCycles: 25,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 8, 8 ],
    ability: [ 51, 51 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       1,  6,  8, 10, 11, 17, 18,
      21, 26, 27, 31, 32, 39, 42,
      43, 44, 45, 46, 54, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 118, 157, 164, 223, 173,
      203, 189,   8, 207, 214, 129,
        9,   7
    ]
  },
  {
    dexid: 108,
    baseStats: { hp: 90, atk: 55, def: 75, spa: 60, spd: 75, spe: 30 },
    types: [ 0, 0 ],
    catchRate: 45,
    baseExp: 127,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 1, 1 ],
    ability: [ 20, 12 ],
    escapeRate: 0,
    color: 9,
    noFlip: false,
    tmhm: [
       1,  3,  6, 10, 11, 13, 14, 15, 17,
      18, 21, 22, 23, 24, 25, 26, 27, 28,
      30, 31, 32, 34, 35, 37, 38, 39, 42,
      43, 44, 45, 46, 51, 53, 54, 56
    ],
    tutor: [
        5,  14,  25,  34,  38,  68,  69,
      102, 138, 157, 164, 223, 205, 244,
      173, 196, 203, 189,   8, 207, 214,
      111,   9,   7
    ]
  },
  {
    dexid: 109,
    baseStats: { hp: 40, atk: 65, def: 95, spa: 60, spd: 45, spe: 35 },
    types: [ 3, 3 ],
    catchRate: 190,
    baseExp: 114,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 11, 11 ],
    ability: [ 26, 26 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       6, 10, 11, 12, 17, 18, 21, 24,
      25, 27, 30, 32, 34, 35, 36, 38,
      41, 42, 43, 44, 45, 46, 55
    ],
    tutor: [
      102, 153, 164,
      205, 173, 203,
      207, 214
    ]
  },
  {
    dexid: 110,
    baseStats: { hp: 65, atk: 90, def: 120, spa: 85, spd: 70, spe: 60 },
    types: [ 3, 3 ],
    catchRate: 60,
    baseExp: 173,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 11, 11 ],
    ability: [ 26, 26 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       6, 10, 11, 12, 15, 17, 18, 21,
      24, 25, 27, 30, 32, 34, 35, 36,
      38, 41, 42, 43, 44, 45, 46, 55
    ],
    tutor: [
      102, 153, 164,
      205, 173, 203,
      207, 214
    ]
  },
  {
    dexid: 111,
    baseStats: { hp: 80, atk: 85, def: 95, spa: 30, spd: 30, spe: 25 },
    types: [ 4, 5 ],
    catchRate: 120,
    baseExp: 135,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 1, 5 ],
    ability: [ 31, 69 ],
    escapeRate: 4,
    color: 7,
    noFlip: false,
    tmhm: [
       5,  6, 10, 11, 13, 14, 17, 18,
      21, 23, 24, 25, 26, 27, 28, 32,
      34, 35, 37, 38, 39, 42, 43, 44,
      45, 46, 54, 56
    ],
    tutor: [
       14,  34,  38,  68, 102,
      157, 164, 205, 173, 196,
      203, 189, 207, 214
    ]
  },
  {
    dexid: 112,
    baseStats: { hp: 105, atk: 130, def: 120, spa: 45, spd: 45, spe: 40 },
    types: [ 4, 5 ],
    catchRate: 60,
    baseExp: 204,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 1, 5 ],
    ability: [ 31, 69 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       1,  5,  6, 10, 11, 13, 14, 15, 17,
      18, 21, 23, 24, 25, 26, 27, 28, 31,
      32, 34, 35, 37, 38, 39, 42, 43, 44,
      45, 46, 51, 53, 54, 56
    ],
    tutor: [
        5,  14,  25,  34,  38,  68,
       69, 102, 157, 164, 223, 205,
      173, 196, 203, 189, 207, 214,
        9,   7, 210
    ]
  },
  {
    dexid: 113,
    baseStats: { hp: 250, atk: 5, def: 5, spa: 35, spd: 105, spe: 50 },
    types: [ 0, 0 ],
    catchRate: 30,
    baseExp: 255,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 254,
    hatchCycles: 40,
    baseFriendship: 140,
    growth: 4,
    eggGroups: [ 6, 6 ],
    ability: [ 30, 32 ],
    escapeRate: 0,
    color: 9,
    noFlip: false,
    tmhm: [
       1,  3,  4,  6,  7, 10, 11, 13, 14, 15,
      16, 17, 18, 20, 21, 22, 23, 24, 25, 26,
      27, 29, 30, 31, 32, 34, 35, 37, 38, 39,
      42, 43, 44, 45, 48, 49, 54, 55, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 118, 135, 138,  86, 164,
      223, 205, 244, 173, 196, 203,
      189, 207, 214, 111
    ]
  },
  {
    dexid: 114,
    baseStats: { hp: 65, atk: 55, def: 115, spa: 100, spd: 40, spe: 60 },
    types: [ 11, 11 ],
    catchRate: 45,
    baseExp: 166,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 7, 7 ],
    ability: [ 34, 34 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       6,  9, 10, 11, 15, 17, 19,
      21, 22, 27, 32, 36, 42, 43,
      44, 45, 46, 51, 55, 56
    ],
    tutor: [
       14,  34,  38, 102,
      164, 244, 173, 203,
      207, 214
    ]
  },
  {
    dexid: 115,
    baseStats: { hp: 105, atk: 95, def: 80, spa: 40, spd: 80, spe: 90 },
    types: [ 0, 0 ],
    catchRate: 45,
    baseExp: 175,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 254,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 1, 1 ],
    ability: [ 48, 48 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       1,  3,  5,  6,  7, 10, 11, 13, 14, 15,
      17, 18, 21, 22, 23, 24, 25, 26, 27, 28,
      30, 31, 32, 34, 35, 37, 38, 39, 40, 42,
      43, 44, 45, 46, 51, 53, 54, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 157, 164, 223, 173, 196,
      203, 189,   8, 207, 214,   9,
        7, 210
    ]
  },
  {
    dexid: 116,
    baseStats: { hp: 30, atk: 40, def: 70, spa: 70, spd: 25, spe: 60 },
    types: [ 10, 10 ],
    catchRate: 225,
    baseExp: 83,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 2, 14 ],
    ability: [ 33, 33 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 17,
      18, 21, 27, 32, 42, 43, 44,
      45, 53, 57, 58
    ],
    tutor: [
       38, 102, 164, 173,
      196, 203, 207, 214,
      129
    ]
  },
  {
    dexid: 117,
    baseStats: { hp: 55, atk: 65, def: 95, spa: 95, spd: 45, spe: 85 },
    types: [ 10, 10 ],
    catchRate: 75,
    baseExp: 155,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 2, 14 ],
    ability: [ 38, 38 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 15,
      17, 18, 21, 27, 32, 42, 43,
      44, 45, 53, 57, 58
    ],
    tutor: [
       38, 102, 164, 173,
      196, 203, 207, 214,
      129
    ]
  },
  {
    dexid: 118,
    baseStats: { hp: 45, atk: 67, def: 60, spa: 35, spd: 50, spe: 63 },
    types: [ 10, 10 ],
    catchRate: 225,
    baseExp: 111,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 12, 12 ],
    ability: [ 33, 41 ],
    escapeRate: 4,
    color: 0,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 17,
      18, 21, 27, 32, 42, 43, 44,
      45, 53, 57, 58
    ],
    tutor: [
       38, 102, 164, 173,
      196, 203, 207, 214,
      129
    ]
  },
  {
    dexid: 119,
    baseStats: { hp: 80, atk: 92, def: 65, spa: 65, spd: 80, spe: 68 },
    types: [ 10, 10 ],
    catchRate: 60,
    baseExp: 170,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 12, 12 ],
    ability: [ 33, 41 ],
    escapeRate: 6,
    color: 0,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 15,
      17, 18, 21, 27, 32, 42, 43,
      44, 45, 53, 57, 58
    ],
    tutor: [
       38, 102, 164, 173,
      196, 203, 207, 214,
      129
    ]
  },
  {
    dexid: 120,
    baseStats: { hp: 30, atk: 45, def: 55, spa: 70, spd: 55, spe: 85 },
    types: [ 10, 10 ],
    catchRate: 225,
    baseExp: 106,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 9, 9 ],
    ability: [ 35, 30 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 16, 17,
      18, 21, 24, 25, 27, 29, 32, 33,
      42, 43, 44, 53, 55, 57, 58
    ],
    tutor: [
       38, 102,  86, 164,
      244, 173, 196, 203,
      207, 214, 129
    ]
  },
  {
    dexid: 121,
    baseStats: { hp: 60, atk: 75, def: 85, spa: 100, spd: 85, spe: 115 },
    types: [ 10, 13 ],
    catchRate: 60,
    baseExp: 207,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 9, 9 ],
    ability: [ 35, 30 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 15, 16,
      17, 18, 21, 24, 25, 27, 29, 32,
      33, 42, 43, 44, 48, 53, 55, 57,
      58
    ],
    tutor: [
       38, 102, 138,  86,
      164, 244, 173, 196,
      203, 207, 214, 129
    ]
  },
  {
    dexid: 122,
    baseStats: { hp: 40, atk: 45, def: 65, spa: 100, spd: 120, spe: 90 },
    types: [ 13, 13 ],
    catchRate: 45,
    baseExp: 136,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 25,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 8, 8 ],
    ability: [ 43, 43 ],
    escapeRate: 0,
    color: 9,
    noFlip: false,
    tmhm: [
       1,  4,  6, 10, 11, 12, 15, 16, 17,
      18, 20, 21, 22, 24, 25, 27, 29, 30,
      31, 32, 33, 34, 41, 42, 43, 44, 45,
      46, 48, 49, 55
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      118, 138,  86, 164, 244, 173, 203,
      189,   8, 207, 214,   9,   7
    ]
  },
  {
    dexid: 123,
    baseStats: { hp: 70, atk: 110, def: 80, spa: 55, spd: 80, spe: 105 },
    types: [ 6, 2 ],
    catchRate: 45,
    baseExp: 187,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 25,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 3, 3 ],
    ability: [ 68, 68 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       6, 10, 11, 15, 17, 18, 21,
      27, 32, 40, 42, 43, 44, 45,
      46, 47, 51, 56
    ],
    tutor: [
       14,  38,  68, 102,
      164, 173, 203, 207,
      214, 129, 210
    ]
  },
  {
    dexid: 124,
    baseStats: { hp: 65, atk: 50, def: 35, spa: 115, spd: 95, spe: 95 },
    types: [ 14, 13 ],
    catchRate: 45,
    baseExp: 137,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 254,
    hatchCycles: 25,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 8, 8 ],
    ability: [ 12, 12 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       1,  3,  4,  6,  7, 10, 12, 13,
      14, 15, 16, 17, 18, 21, 27, 29,
      30, 31, 32, 33, 41, 42, 43, 44,
      45, 46, 48, 55
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 118, 138, 164, 223, 244,
      173, 196, 203, 189,   8, 207,
      214
    ]
  },
  {
    dexid: 125,
    baseStats: { hp: 65, atk: 83, def: 57, spa: 95, spd: 85, spe: 105 },
    types: [ 12, 12 ],
    catchRate: 45,
    baseExp: 156,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 63,
    hatchCycles: 25,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 8, 8 ],
    ability: [ 9, 9 ],
    escapeRate: 0,
    color: 2,
    noFlip: true,
    tmhm: [
       1,  6, 10, 15, 16, 17, 18, 21,
      23, 24, 25, 27, 29, 31, 32, 34,
      42, 43, 44, 45, 46, 54, 55, 56
    ],
    tutor: [
        5, 25,  34,  38,  68,  69,
      102, 86, 164, 223, 173, 203,
      189,  8, 207, 214, 129,   9,
        7
    ]
  },
  {
    dexid: 126,
    baseStats: { hp: 65, atk: 95, def: 57, spa: 100, spd: 85, spe: 93 },
    types: [ 9, 9 ],
    catchRate: 45,
    baseExp: 167,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 63,
    hatchCycles: 25,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 8, 8 ],
    ability: [ 49, 49 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       1,  6, 10, 11, 15, 17, 21,
      23, 27, 29, 31, 32, 35, 38,
      42, 43, 44, 45, 46, 54, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 164, 223, 173, 203, 189,
      207, 214,   9,   7
    ]
  },
  {
    dexid: 127,
    baseStats: { hp: 65, atk: 125, def: 100, spa: 55, spd: 70, spe: 85 },
    types: [ 6, 6 ],
    catchRate: 45,
    baseExp: 200,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 25,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 3, 3 ],
    ability: [ 52, 52 ],
    escapeRate: 8,
    color: 5,
    noFlip: false,
    tmhm: [
       1,  6,  8, 10, 11, 15, 17, 18,
      21, 26, 27, 28, 31, 32, 39, 42,
      43, 44, 45, 46, 51, 54, 56
    ],
    tutor: [
       14,  34,  38,  69, 102,
      157, 164, 173, 203, 207,
      214, 210
    ]
  },
  {
    dexid: 128,
    baseStats: { hp: 75, atk: 100, def: 95, spa: 40, spd: 70, spe: 110 },
    types: [ 0, 0 ],
    catchRate: 45,
    baseExp: 211,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 0,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 5, 5 ],
    ability: [ 22, 22 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       3,  6, 10, 11, 13, 14, 15, 17, 18,
      21, 22, 23, 24, 25, 26, 27, 32, 34,
      35, 37, 38, 39, 42, 43, 44, 45, 53,
      54, 56
    ],
    tutor: [
       34,  38, 102, 164,
      173, 196, 203, 207,
      214
    ]
  },
  {
    dexid: 129,
    baseStats: { hp: 20, atk: 10, def: 55, spa: 15, spd: 20, spe: 80 },
    types: [ 10, 10 ],
    catchRate: 255,
    baseExp: 20,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 5,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 12, 14 ],
    ability: [ 33, 33 ],
    escapeRate: 4,
    color: 0,
    noFlip: false,
    tmhm: [],
    tutor: []
  },
  {
    dexid: 130,
    baseStats: { hp: 95, atk: 125, def: 79, spa: 60, spd: 100, spe: 81 },
    types: [ 10, 2 ],
    catchRate: 45,
    baseExp: 214,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 5,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 12, 14 ],
    ability: [ 22, 22 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  5,  6,  7, 10, 12, 13, 14, 15,
      17, 18, 21, 24, 25, 26, 27, 32, 35,
      37, 38, 41, 42, 43, 44, 45, 53, 54,
      56, 57, 58
    ],
    tutor: [
       34,  38, 102,  86,
      164, 173, 196, 203,
      207, 214
    ]
  },
  {
    dexid: 131,
    baseStats: { hp: 130, atk: 85, def: 80, spa: 85, spd: 95, spe: 60 },
    types: [ 10, 14 ],
    catchRate: 45,
    baseExp: 219,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 40,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 1, 2 ],
    ability: [ 11, 75 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  5,  6,  7, 10, 13, 14, 15,
      17, 18, 20, 21, 23, 24, 25, 27,
      29, 32, 34, 42, 43, 44, 45, 53,
      54, 56, 57, 58
    ],
    tutor: [
       34,  38, 102, 138,
      164, 173, 196, 203,
      207, 214
    ]
  },
  {
    dexid: 132,
    baseStats: { hp: 48, atk: 48, def: 48, spa: 48, spd: 48, spe: 48 },
    types: [ 0, 0 ],
    catchRate: 35,
    baseExp: 61,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 13, 13 ],
    ability: [ 7, 7 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [],
    tutor: []
  },
  {
    dexid: 133,
    baseStats: { hp: 55, atk: 55, def: 50, spa: 45, spd: 65, spe: 55 },
    types: [ 0, 0 ],
    catchRate: 45,
    baseExp: 92,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 35,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 50, 50 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       6, 10, 11, 17, 18, 21,
      23, 27, 28, 30, 32, 42,
      43, 44, 45
    ],
    tutor: [
       34,  38, 102, 164,
      173, 203, 189, 207,
      214, 129
    ]
  },
  {
    dexid: 134,
    baseStats: { hp: 130, atk: 65, def: 60, spa: 110, spd: 95, spe: 65 },
    types: [ 10, 10 ],
    catchRate: 45,
    baseExp: 196,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 35,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 11, 11 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  5,  6,  7, 10, 11, 13, 14,
      15, 17, 18, 21, 23, 27, 28, 30,
      32, 42, 43, 44, 45, 53, 57, 58
    ],
    tutor: [
       34,  38, 102, 164,
      173, 196, 203, 189,
      207, 214, 129
    ]
  },
  {
    dexid: 135,
    baseStats: { hp: 65, atk: 65, def: 60, spa: 110, spd: 95, spe: 130 },
    types: [ 12, 12 ],
    catchRate: 45,
    baseExp: 197,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 35,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 10, 10 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       5,  6, 10, 11, 15, 17, 18,
      21, 23, 24, 25, 27, 28, 30,
      32, 34, 42, 43, 44, 45, 55
    ],
    tutor: [
       34,  38, 102,  86,
      164, 173, 203, 189,
      207, 214, 129
    ]
  },
  {
    dexid: 136,
    baseStats: { hp: 65, atk: 130, def: 60, spa: 95, spd: 110, spe: 65 },
    types: [ 9, 9 ],
    catchRate: 45,
    baseExp: 198,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 35,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 18, 18 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       5,  6, 10, 11, 15, 17, 18,
      21, 23, 27, 28, 30, 32, 35,
      38, 42, 43, 44, 45, 50
    ],
    tutor: [
       34,  38, 102, 164,
      173, 203, 189, 207,
      214, 129
    ]
  },
  {
    dexid: 137,
    baseStats: { hp: 65, atk: 60, def: 70, spa: 85, spd: 75, spe: 40 },
    types: [ 0, 0 ],
    catchRate: 45,
    baseExp: 130,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 10, 10 ],
    ability: [ 36, 36 ],
    escapeRate: 0,
    color: 9,
    noFlip: false,
    tmhm: [
       6, 10, 11, 13, 14, 15, 17, 18,
      21, 22, 23, 24, 25, 27, 29, 30,
      32, 34, 40, 42, 43, 44, 46, 55
    ],
    tutor: [
       38, 102, 138,  86,
      164, 244, 173, 196,
      203, 207, 214, 129
    ]
  },
  {
    dexid: 138,
    baseStats: { hp: 35, atk: 40, def: 100, spa: 90, spd: 55, spe: 35 },
    types: [ 5, 10 ],
    catchRate: 45,
    baseExp: 120,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 30,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 2, 9 ],
    ability: [ 33, 75 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 17,
      18, 21, 27, 32, 37, 39, 42,
      43, 44, 45, 46, 53, 56, 57,
      58
    ],
    tutor: [
       34,  38, 102, 157,
      164, 205, 173, 196,
      203, 207, 214
    ]
  },
  {
    dexid: 139,
    baseStats: { hp: 70, atk: 60, def: 125, spa: 115, spd: 70, spe: 55 },
    types: [ 5, 10 ],
    catchRate: 45,
    baseExp: 199,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 30,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 2, 9 ],
    ability: [ 33, 75 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 15, 17,
      18, 21, 27, 32, 37, 39, 42, 43,
      44, 45, 46, 53, 56, 57, 58
    ],
    tutor: [
       34,  38,  69, 102,
      157, 164, 205, 173,
      196, 203, 207, 214
    ]
  },
  {
    dexid: 140,
    baseStats: { hp: 30, atk: 80, def: 90, spa: 55, spd: 45, spe: 55 },
    types: [ 5, 10 ],
    catchRate: 45,
    baseExp: 119,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 30,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 2, 9 ],
    ability: [ 33, 4 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 17, 18,
      19, 21, 27, 28, 32, 37, 39, 40,
      42, 43, 44, 45, 46, 53, 56, 57
    ],
    tutor: [
       34,  38, 102, 157,
      164, 205, 173, 196,
      203, 207, 214
    ]
  },
  {
    dexid: 141,
    baseStats: { hp: 60, atk: 115, def: 105, spa: 65, spd: 70, spe: 80 },
    types: [ 5, 10 ],
    catchRate: 45,
    baseExp: 201,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 30,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 2, 9 ],
    ability: [ 33, 4 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 15, 17,
      18, 19, 21, 27, 28, 31, 32, 37,
      39, 40, 42, 43, 44, 45, 46, 51,
      53, 56, 57, 58
    ],
    tutor: [
       14,  25,  34,  38,  69,
      102, 157, 164, 205, 173,
      196, 203, 207, 214, 210
    ]
  },
  {
    dexid: 142,
    baseStats: { hp: 80, atk: 105, def: 65, spa: 60, spd: 75, spe: 130 },
    types: [ 5, 2 ],
    catchRate: 45,
    baseExp: 202,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 35,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 4, 4 ],
    ability: [ 69, 46 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       2,  5,  6, 10, 11, 12, 15, 17, 18,
      21, 23, 26, 27, 32, 35, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 52,
      54, 56
    ],
    tutor: [
       38, 102, 157, 164,
      173, 203, 207, 214,
      129
    ]
  },
  {
    dexid: 143,
    baseStats: { hp: 160, atk: 110, def: 65, spa: 65, spd: 110, spe: 30 },
    types: [ 0, 0 ],
    catchRate: 25,
    baseExp: 154,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 40,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 1, 1 ],
    ability: [ 17, 47 ],
    escapeRate: 0,
    color: 4,
    noFlip: false,
    tmhm: [
       1,  3,  6, 10, 11, 13, 14, 15, 17,
      18, 21, 22, 24, 25, 26, 27, 29, 30,
      31, 32, 34, 35, 37, 38, 39, 42, 43,
      44, 45, 53, 54
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      118, 157, 164, 223, 205, 244, 173,
      196, 203, 189,   8, 207, 214, 111,
        9,   7
    ]
  },
  {
    dexid: 144,
    baseStats: { hp: 90, atk: 85, def: 100, spa: 95, spd: 125, spe: 85 },
    types: [ 14, 2 ],
    catchRate: 3,
    baseExp: 215,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 80,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 15, 15 ],
    ability: [ 46, 46 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  5,  6,  7, 10, 11, 13, 14,
      15, 17, 18, 21, 27, 32, 33, 37,
      40, 42, 43, 44, 47, 52, 56
    ],
    tutor: [
       38, 102, 164, 173,
      196, 203, 189, 207,
      214, 129
    ]
  },
  {
    dexid: 145,
    baseStats: { hp: 90, atk: 90, def: 85, spa: 125, spd: 90, spe: 100 },
    types: [ 12, 2 ],
    catchRate: 3,
    baseExp: 216,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 80,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 15, 15 ],
    ability: [ 46, 46 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       5,  6, 10, 11, 15, 16, 17, 18,
      21, 24, 25, 27, 32, 34, 37, 40,
      42, 43, 44, 47, 52, 55, 56
    ],
    tutor: [
       38, 102,  86, 164,
      173, 203, 189, 207,
      214, 129
    ]
  },
  {
    dexid: 146,
    baseStats: { hp: 90, atk: 100, def: 90, spa: 125, spd: 85, spe: 90 },
    types: [ 9, 2 ],
    catchRate: 3,
    baseExp: 217,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 80,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 15, 15 ],
    ability: [ 46, 46 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       5,  6, 10, 11, 15, 17, 18,
      20, 21, 27, 32, 35, 37, 38,
      40, 42, 43, 44, 47, 50, 52,
      56
    ],
    tutor: [
       38, 102, 164, 173,
      203, 189, 207, 214,
      129
    ]
  },
  {
    dexid: 147,
    baseStats: { hp: 41, atk: 64, def: 45, spa: 50, spd: 50, spe: 50 },
    types: [ 15, 15 ],
    catchRate: 45,
    baseExp: 67,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 40,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 2, 14 ],
    ability: [ 61, 61 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 11, 13, 14, 15,
      17, 18, 20, 21, 23, 24, 25, 27,
      32, 34, 35, 38, 42, 43, 44, 45,
      53, 57
    ],
    tutor: [
       34,  38, 102,  86,
      164, 173, 196, 203,
      207, 214, 129
    ]
  },
  {
    dexid: 148,
    baseStats: { hp: 61, atk: 84, def: 65, spa: 70, spd: 70, spe: 70 },
    types: [ 15, 15 ],
    catchRate: 45,
    baseExp: 144,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 40,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 2, 14 ],
    ability: [ 61, 61 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 11, 13, 14, 15,
      17, 18, 20, 21, 23, 24, 25, 27,
      32, 34, 35, 38, 42, 43, 44, 45,
      53, 57
    ],
    tutor: [
       34,  38, 102,  86,
      164, 173, 196, 203,
      207, 214, 129
    ]
  },
  {
    dexid: 149,
    baseStats: { hp: 91, atk: 134, def: 95, spa: 100, spd: 100, spe: 80 },
    types: [ 15, 2 ],
    catchRate: 45,
    baseExp: 218,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 40,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 2, 14 ],
    ability: [ 39, 39 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       1,  2,  3,  5,  6,  7, 10, 11, 13, 14,
      15, 17, 18, 20, 21, 23, 24, 25, 26, 27,
      31, 32, 34, 35, 37, 38, 39, 40, 42, 43,
      44, 45, 47, 51, 52, 53, 54, 56, 57, 58
    ],
    tutor: [
       34,  38, 102,  86, 164, 223,
      173, 196, 203, 189,   8, 207,
      214, 129,   9,   7, 210
    ]
  },
  {
    dexid: 150,
    baseStats: { hp: 106, atk: 110, def: 90, spa: 154, spd: 90, spe: 130 },
    types: [ 13, 13 ],
    catchRate: 3,
    baseExp: 220,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 120,
    baseFriendship: 0,
    growth: 5,
    eggGroups: [ 15, 15 ],
    ability: [ 46, 46 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       1,  3,  4,  6,  7,  8, 10, 11, 12, 13,
      14, 15, 16, 17, 18, 20, 21, 22, 23, 24,
      25, 26, 27, 29, 30, 31, 32, 33, 34, 35,
      37, 38, 39, 40, 41, 42, 43, 44, 48, 49,
      54, 55, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      118, 138,  86, 164, 223, 244, 173,
      196, 203, 189,   8, 207, 214, 129,
        9,   7
    ]
  },
  {
    dexid: 151,
    baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
    types: [ 13, 13 ],
    catchRate: 45,
    baseExp: 64,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 120,
    baseFriendship: 100,
    growth: 3,
    eggGroups: [ 15, 15 ],
    ability: [ 28, 28 ],
    escapeRate: 0,
    color: 9,
    noFlip: false,
    tmhm: [
       1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12,
      13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
      25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
      37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
      49, 50, 51, 52, 53, 54, 55, 56, 57, 58
    ],
    tutor: [
        5,  14,  25,  34,  38,  68,  69, 102,
      118, 135, 138,  86, 153, 157, 164, 223,
      205, 244, 173, 196, 203, 189,   8, 207,
      214, 129, 111,   9,   7, 210
    ]
  },
  {
    dexid: 152,
    baseStats: { hp: 45, atk: 49, def: 65, spa: 49, spd: 65, spe: 45 },
    types: [ 11, 11 ],
    catchRate: 45,
    baseExp: 64,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 7 ],
    ability: [ 65, 65 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       6,  9, 10, 11, 16, 17, 19,
      20, 21, 22, 23, 27, 32, 33,
      42, 43, 44, 45, 51, 55
    ],
    tutor: [
       14,  34,  38,  68,
      102, 164, 173, 203,
      189, 207, 214
    ]
  },
  {
    dexid: 153,
    baseStats: { hp: 60, atk: 62, def: 80, spa: 63, spd: 80, spe: 60 },
    types: [ 11, 11 ],
    catchRate: 45,
    baseExp: 141,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 7 ],
    ability: [ 65, 65 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       6,  9, 10, 11, 16, 17, 19,
      20, 21, 22, 23, 27, 32, 33,
      42, 43, 44, 45, 51, 54, 55,
      56
    ],
    tutor: [
       14,  34,  38,  68, 102,
      164, 173, 203, 189, 207,
      214, 210
    ]
  },
  {
    dexid: 154,
    baseStats: { hp: 80, atk: 82, def: 100, spa: 83, spd: 100, spe: 80 },
    types: [ 11, 11 ],
    catchRate: 45,
    baseExp: 208,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 7 ],
    ability: [ 65, 65 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       6,  9, 10, 11, 15, 16, 17, 19,
      20, 21, 22, 23, 26, 27, 32, 33,
      42, 43, 44, 45, 51, 54, 55, 56
    ],
    tutor: [
       14,  34,  38,  68, 102,
      164, 173, 203, 189, 207,
      214, 210
    ]
  },
  {
    dexid: 155,
    baseStats: { hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65 },
    types: [ 9, 9 ],
    catchRate: 45,
    baseExp: 65,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 5, 5 ],
    ability: [ 66, 66 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       6, 10, 11, 17, 21, 27, 28,
      32, 35, 38, 40, 42, 43, 44,
      45, 50, 51
    ],
    tutor: [
       34,  38, 102, 164,
      205, 173, 203, 189,
      207, 214, 129, 111
    ]
  },
  {
    dexid: 156,
    baseStats: { hp: 58, atk: 64, def: 58, spa: 80, spd: 65, spe: 80 },
    types: [ 9, 9 ],
    catchRate: 45,
    baseExp: 142,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 5, 5 ],
    ability: [ 66, 66 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       1,  5,  6, 10, 11, 17, 21,
      27, 28, 31, 32, 35, 38, 40,
      42, 43, 44, 45, 50, 51, 54,
      56
    ],
    tutor: [
       34,  38, 102, 164,
      205, 173, 203, 189,
      207, 214, 129, 111,
      210
    ]
  },
  {
    dexid: 157,
    baseStats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
    types: [ 9, 9 ],
    catchRate: 45,
    baseExp: 209,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 5, 5 ],
    ability: [ 66, 66 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       1,  5,  6, 10, 11, 15, 17, 21,
      26, 27, 28, 31, 32, 35, 38, 40,
      42, 43, 44, 45, 50, 51, 54, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 157, 164, 223, 205, 173,
      203, 189, 207, 214, 129, 111,
        9,   7, 210
    ]
  },
  {
    dexid: 158,
    baseStats: { hp: 50, atk: 65, def: 64, spa: 44, spd: 48, spe: 43 },
    types: [ 10, 10 ],
    catchRate: 45,
    baseExp: 66,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 2 ],
    ability: [ 67, 67 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       1,  3,  6,  7, 10, 13, 14, 17,
      18, 21, 23, 27, 28, 31, 32, 40,
      42, 43, 44, 45, 51, 53, 57, 58
    ],
    tutor: [
        5,  14,  25,  34,  38,  68,
       69, 102, 157, 164, 223, 173,
      196, 203, 189,   8, 207, 214
    ]
  },
  {
    dexid: 159,
    baseStats: { hp: 65, atk: 80, def: 80, spa: 59, spd: 63, spe: 58 },
    types: [ 10, 10 ],
    catchRate: 45,
    baseExp: 143,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 2 ],
    ability: [ 67, 67 ],
    escapeRate: 0,
    color: 1,
    noFlip: true,
    tmhm: [
       1,  3,  5,  6,  7, 10, 13, 14,
      17, 18, 21, 23, 27, 28, 31, 32,
      40, 42, 43, 44, 45, 51, 53, 54,
      56, 57, 58
    ],
    tutor: [
        5,  14,  25,  34,  38,  68,
       69, 102, 157, 164, 223, 173,
      196, 203, 189,   8, 207, 214,
      210
    ]
  },
  {
    dexid: 160,
    baseStats: { hp: 85, atk: 105, def: 100, spa: 79, spd: 83, spe: 78 },
    types: [ 10, 10 ],
    catchRate: 45,
    baseExp: 210,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 2 ],
    ability: [ 67, 67 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       1,  2,  3,  5,  6,  7, 10, 13, 14,
      15, 17, 18, 21, 23, 26, 27, 28, 31,
      32, 40, 42, 43, 44, 45, 51, 53, 54,
      56, 57, 58
    ],
    tutor: [
        5,  14,  25,  34,  38,  68,
       69, 102, 157, 164, 223, 173,
      196, 203, 189,   8, 207, 214,
      210
    ]
  },
  {
    dexid: 161,
    baseStats: { hp: 35, atk: 46, def: 34, spa: 35, spd: 45, spe: 20 },
    types: [ 0, 0 ],
    catchRate: 255,
    baseExp: 57,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 50, 51 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       1,  3,  6, 10, 11, 13, 17, 18,
      21, 22, 23, 24, 27, 28, 30, 31,
      32, 34, 35, 42, 43, 44, 45, 46,
      51, 53
    ],
    tutor: [
       34,  38, 102, 164, 223, 205,
      173, 203, 189,   8, 207, 214,
      129, 111,   9,   7, 210
    ]
  },
  {
    dexid: 162,
    baseStats: { hp: 85, atk: 76, def: 64, spa: 45, spd: 55, spe: 90 },
    types: [ 0, 0 ],
    catchRate: 90,
    baseExp: 116,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 50, 51 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       1,  3,  6, 10, 11, 13, 14, 15, 17,
      18, 21, 22, 23, 24, 25, 27, 28, 30,
      31, 32, 34, 35, 42, 43, 44, 45, 46,
      51, 53, 54, 56
    ],
    tutor: [
       34,  38, 102, 164, 223, 205,
      173, 203, 189,   8, 207, 214,
      129, 111,   9,   7, 210
    ]
  },
  {
    dexid: 163,
    baseStats: { hp: 60, atk: 30, def: 30, spa: 36, spd: 56, spe: 50 },
    types: [ 0, 2 ],
    catchRate: 255,
    baseExp: 58,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 4, 4 ],
    ability: [ 15, 51 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       6, 10, 11, 17, 18, 21, 27,
      29, 30, 32, 33, 40, 42, 43,
      44, 45, 46, 47, 52, 55
    ],
    tutor: [
       38, 102, 138, 164,
      173, 203, 189, 207,
      214, 129
    ]
  },
  {
    dexid: 164,
    baseStats: { hp: 100, atk: 50, def: 50, spa: 76, spd: 96, spe: 70 },
    types: [ 0, 2 ],
    catchRate: 90,
    baseExp: 162,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 4, 4 ],
    ability: [ 15, 51 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       6, 10, 11, 15, 17, 18, 21,
      27, 29, 30, 32, 33, 40, 42,
      43, 44, 45, 46, 47, 52, 55
    ],
    tutor: [
       38, 102, 138, 164,
      173, 203, 189, 207,
      214, 129
    ]
  },
  {
    dexid: 165,
    baseStats: { hp: 40, atk: 20, def: 30, spa: 40, spd: 80, spe: 55 },
    types: [ 6, 2 ],
    catchRate: 255,
    baseExp: 54,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 4,
    eggGroups: [ 3, 3 ],
    ability: [ 68, 48 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       1,  6, 10, 11, 16, 17, 19,
      20, 21, 22, 27, 28, 31, 32,
      33, 40, 42, 43, 44, 45, 46,
      55
    ],
    tutor: [
        5,  14,  38, 102, 164,
      223, 205, 173, 203,   8,
      207, 214, 129,   9
    ]
  },
  {
    dexid: 166,
    baseStats: { hp: 55, atk: 35, def: 50, spa: 55, spd: 110, spe: 85 },
    types: [ 6, 2 ],
    catchRate: 90,
    baseExp: 134,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 4,
    eggGroups: [ 3, 3 ],
    ability: [ 68, 48 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       1,  6, 10, 11, 15, 16, 17, 19,
      20, 21, 22, 27, 28, 31, 32, 33,
      40, 42, 43, 44, 45, 46, 55
    ],
    tutor: [
        5,  14,  38, 102, 164,
      223, 205, 173, 203,   8,
      207, 214, 129,   9
    ]
  },
  {
    dexid: 167,
    baseStats: { hp: 40, atk: 60, def: 40, spa: 40, spd: 40, spe: 30 },
    types: [ 6, 3 ],
    catchRate: 255,
    baseExp: 54,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 4,
    eggGroups: [ 3, 3 ],
    ability: [ 68, 15 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       6, 10, 11, 17, 19, 21, 22,
      27, 28, 29, 32, 36, 42, 43,
      44, 45, 46, 55
    ],
    tutor: [
       34,  38, 102, 164,
      173, 203, 207, 214
    ]
  },
  {
    dexid: 168,
    baseStats: { hp: 70, atk: 90, def: 70, spa: 60, spd: 60, spe: 40 },
    types: [ 6, 3 ],
    catchRate: 90,
    baseExp: 134,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 4,
    eggGroups: [ 3, 3 ],
    ability: [ 68, 15 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       6, 10, 11, 15, 17, 19, 21,
      22, 27, 28, 29, 32, 36, 42,
      43, 44, 45, 46, 55
    ],
    tutor: [
       34,  38, 102, 164,
      173, 203, 207, 214
    ]
  },
  {
    dexid: 169,
    baseStats: { hp: 85, atk: 90, def: 80, spa: 70, spd: 80, spe: 130 },
    types: [ 3, 2 ],
    catchRate: 90,
    baseExp: 204,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 4, 4 ],
    ability: [ 39, 39 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       6, 10, 11, 12, 15, 17, 18, 19,
      21, 27, 30, 32, 36, 40, 41, 42,
      43, 44, 45, 46, 47, 49, 52
    ],
    tutor: [
       38, 102, 164,
      173, 203, 207,
      214, 129
    ]
  },
  {
    dexid: 170,
    baseStats: { hp: 75, atk: 38, def: 38, spa: 56, spd: 56, spe: 67 },
    types: [ 10, 12 ],
    catchRate: 190,
    baseExp: 90,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 12, 12 ],
    ability: [ 10, 35 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 17,
      18, 21, 24, 25, 27, 32, 34,
      42, 43, 44, 45, 53, 55, 57,
      58
    ],
    tutor: [
       38, 102,  86, 164,
      173, 203, 207, 214
    ]
  },
  {
    dexid: 171,
    baseStats: { hp: 125, atk: 58, def: 58, spa: 76, spd: 76, spe: 67 },
    types: [ 10, 12 ],
    catchRate: 75,
    baseExp: 156,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 12, 12 ],
    ability: [ 10, 35 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 15, 17,
      18, 21, 24, 25, 27, 32, 34, 42,
      43, 44, 45, 53, 55, 57, 58
    ],
    tutor: [
       38, 102,  86, 164,
      173, 203, 207, 214
    ]
  },
  {
    dexid: 172,
    baseStats: { hp: 20, atk: 40, def: 15, spa: 35, spd: 35, spe: 60 },
    types: [ 12, 12 ],
    catchRate: 190,
    baseExp: 42,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 10,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 15, 15 ],
    ability: [ 9, 9 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       6, 10, 16, 17, 18, 21, 23,
      24, 25, 27, 32, 34, 42, 43,
      44, 45, 55
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102,  86, 164, 205, 173, 203,
      189, 207, 214, 129, 111
    ]
  },
  {
    dexid: 173,
    baseStats: { hp: 50, atk: 25, def: 28, spa: 45, spd: 55, spe: 15 },
    types: [ 0, 0 ],
    catchRate: 150,
    baseExp: 37,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 191,
    hatchCycles: 10,
    baseFriendship: 140,
    growth: 4,
    eggGroups: [ 15, 15 ],
    ability: [ 56, 56 ],
    escapeRate: 0,
    color: 9,
    noFlip: false,
    tmhm: [
       3,  6, 10, 11, 16, 17, 18, 20,
      21, 22, 23, 27, 28, 29, 30, 32,
      33, 34, 35, 38, 42, 43, 44, 45,
      55
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 118, 135, 138,  86, 164,
      205, 244, 173, 196, 203, 189,
      207, 214, 111
    ]
  },
  {
    dexid: 174,
    baseStats: { hp: 90, atk: 30, def: 15, spa: 40, spd: 20, spe: 15 },
    types: [ 0, 0 ],
    catchRate: 170,
    baseExp: 39,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 191,
    hatchCycles: 10,
    baseFriendship: 70,
    growth: 4,
    eggGroups: [ 15, 15 ],
    ability: [ 56, 56 ],
    escapeRate: 0,
    color: 9,
    noFlip: true,
    tmhm: [
       3,  6, 10, 11, 16, 17, 18, 20,
      21, 22, 27, 28, 29, 30, 32, 33,
      34, 35, 38, 42, 43, 44, 45, 55
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 138,  86, 164, 205, 244,
      173, 196, 203, 189, 207, 214,
      111
    ]
  },
  {
    dexid: 175,
    baseStats: { hp: 35, atk: 20, def: 65, spa: 40, spd: 65, spe: 20 },
    types: [ 0, 0 ],
    catchRate: 190,
    baseExp: 74,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 10,
    baseFriendship: 70,
    growth: 4,
    eggGroups: [ 15, 15 ],
    ability: [ 55, 32 ],
    escapeRate: 0,
    color: 8,
    noFlip: false,
    tmhm: [
       3,  6, 10, 11, 16, 17, 18, 20,
      21, 22, 27, 29, 30, 32, 33, 34,
      35, 38, 42, 43, 44, 45, 55, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 118, 135, 138,  86, 164,
      205, 244, 173, 203, 189, 207,
      214, 129, 111
    ]
  },
  {
    dexid: 176,
    baseStats: { hp: 55, atk: 40, def: 85, spa: 80, spd: 105, spe: 40 },
    types: [ 0, 2 ],
    catchRate: 75,
    baseExp: 114,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 10,
    baseFriendship: 70,
    growth: 4,
    eggGroups: [ 4, 6 ],
    ability: [ 55, 32 ],
    escapeRate: 0,
    color: 8,
    noFlip: false,
    tmhm: [
       1,  3,  6, 10, 11, 15, 16, 17, 18,
      20, 21, 22, 27, 29, 30, 31, 32, 33,
      34, 35, 38, 40, 42, 43, 44, 45, 47,
      52, 55, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 118, 135, 138,  86, 164,
      205, 244, 173, 203, 189, 207,
      214, 129, 111
    ]
  },
  {
    dexid: 177,
    baseStats: { hp: 40, atk: 50, def: 45, spa: 70, spd: 45, spe: 70 },
    types: [ 13, 2 ],
    catchRate: 190,
    baseExp: 73,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 4, 4 ],
    ability: [ 28, 48 ],
    escapeRate: 6,
    color: 3,
    noFlip: false,
    tmhm: [
       4,  6, 10, 11, 16, 17, 18, 19,
      21, 22, 27, 29, 30, 32, 33, 40,
      42, 43, 44, 45, 46, 47, 48, 55
    ],
    tutor: [
       38, 102, 138,  86,
      164, 244, 173, 203,
      207, 214, 129
    ]
  },
  {
    dexid: 178,
    baseStats: { hp: 65, atk: 75, def: 70, spa: 95, spd: 70, spe: 95 },
    types: [ 13, 2 ],
    catchRate: 75,
    baseExp: 171,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 4, 4 ],
    ability: [ 28, 48 ],
    escapeRate: 8,
    color: 3,
    noFlip: false,
    tmhm: [
       4,  6, 10, 11, 15, 16, 17, 18,
      19, 21, 22, 27, 29, 30, 32, 33,
      40, 42, 43, 44, 45, 46, 47, 48,
      52, 55
    ],
    tutor: [
       38, 102, 138,  86,
      164, 244, 173, 203,
      207, 214, 129
    ]
  },
  {
    dexid: 179,
    baseStats: { hp: 55, atk: 40, def: 40, spa: 65, spd: 45, spe: 35 },
    types: [ 12, 12 ],
    catchRate: 235,
    baseExp: 59,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 5 ],
    ability: [ 9, 9 ],
    escapeRate: 0,
    color: 8,
    noFlip: false,
    tmhm: [
       6, 10, 16, 17, 18, 21, 23,
      24, 25, 27, 32, 34, 42, 43,
      44, 45, 55
    ],
    tutor: [
       34,  38, 102,  86,
      164, 173, 203, 207,
      214, 129, 111
    ]
  },
  {
    dexid: 180,
    baseStats: { hp: 70, atk: 55, def: 55, spa: 80, spd: 60, spe: 45 },
    types: [ 12, 12 ],
    catchRate: 120,
    baseExp: 117,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 5 ],
    ability: [ 9, 9 ],
    escapeRate: 0,
    color: 9,
    noFlip: false,
    tmhm: [
       1,  6, 10, 16, 17, 18, 21,
      23, 24, 25, 27, 31, 32, 34,
      42, 43, 44, 45, 54, 55, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102,  86, 164, 223, 173, 203,
      207, 214, 129, 111,   9,   7
    ]
  },
  {
    dexid: 181,
    baseStats: { hp: 90, atk: 75, def: 75, spa: 115, spd: 90, spe: 55 },
    types: [ 12, 12 ],
    catchRate: 45,
    baseExp: 194,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 5 ],
    ability: [ 9, 9 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       1,  6, 10, 15, 16, 17, 18,
      21, 23, 24, 25, 27, 31, 32,
      34, 42, 43, 44, 45, 54, 55,
      56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102,  86, 164, 223, 173, 203,
      207, 214, 129, 111,   9,   7
    ]
  },
  {
    dexid: 182,
    baseStats: { hp: 75, atk: 80, def: 85, spa: 90, spd: 100, spe: 50 },
    types: [ 11, 11 ],
    catchRate: 45,
    baseExp: 184,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 7, 7 ],
    ability: [ 34, 34 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       6,  9, 10, 11, 15, 17, 19,
      20, 21, 22, 27, 32, 36, 42,
      43, 44, 45, 51, 55
    ],
    tutor: [
       14,  38, 102, 164,
      173, 203, 207, 214
    ]
  },
  {
    dexid: 183,
    baseStats: { hp: 70, atk: 20, def: 50, spa: 20, spd: 50, spe: 40 },
    types: [ 10, 10 ],
    catchRate: 190,
    baseExp: 58,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 10,
    baseFriendship: 70,
    growth: 4,
    eggGroups: [ 2, 6 ],
    ability: [ 47, 37 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       1,  3,  6,  7, 10, 13, 14, 17,
      18, 21, 23, 27, 28, 31, 32, 42,
      43, 44, 45, 53, 54, 56, 57, 58
    ],
    tutor: [
        5,  25,  34,  38,  69, 102,
      164, 223, 205, 173, 196, 203,
      189,   8, 207, 214, 129, 111
    ]
  },
  {
    dexid: 184,
    baseStats: { hp: 100, atk: 50, def: 80, spa: 50, spd: 80, spe: 50 },
    types: [ 10, 10 ],
    catchRate: 75,
    baseExp: 153,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 10,
    baseFriendship: 70,
    growth: 4,
    eggGroups: [ 2, 6 ],
    ability: [ 47, 37 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       1,  3,  6,  7, 10, 13, 14, 15,
      17, 18, 21, 23, 27, 28, 31, 32,
      42, 43, 44, 45, 53, 54, 56, 57,
      58
    ],
    tutor: [
        5,  25,  34,  38,  69, 102,
      164, 223, 205, 173, 196, 203,
      189,   8, 207, 214, 129, 111
    ]
  },
  {
    dexid: 185,
    baseStats: { hp: 70, atk: 100, def: 115, spa: 30, spd: 65, spe: 30 },
    types: [ 5, 5 ],
    catchRate: 65,
    baseExp: 135,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 10, 10 ],
    ability: [ 5, 69 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       1,  4,  6, 10, 11, 12, 17,
      21, 26, 27, 28, 31, 32, 37,
      39, 42, 43, 44, 45, 46, 54,
      56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      153, 157, 164, 223, 205, 244, 173,
      203, 189,   8, 207, 214, 111,   9,
        7
    ]
  },
  {
    dexid: 186,
    baseStats: { hp: 90, atk: 75, def: 75, spa: 90, spd: 100, spe: 70 },
    types: [ 10, 10 ],
    catchRate: 45,
    baseExp: 185,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 2, 2 ],
    ability: [ 11, 6 ],
    escapeRate: 0,
    color: 3,
    noFlip: true,
    tmhm: [
       1,  3,  6,  7, 10, 13, 14, 15,
      17, 18, 21, 26, 27, 28, 29, 31,
      32, 42, 43, 44, 45, 46, 53, 54,
      56, 57, 58
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 118, 164, 223, 173, 196,
      203, 189, 207, 214, 111
    ]
  },
  {
    dexid: 187,
    baseStats: { hp: 35, atk: 35, def: 40, spa: 35, spd: 55, spe: 50 },
    types: [ 11, 2 ],
    catchRate: 255,
    baseExp: 74,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 6, 7 ],
    ability: [ 34, 34 ],
    escapeRate: 0,
    color: 9,
    noFlip: false,
    tmhm: [
       6,  9, 10, 11, 17, 19,
      21, 22, 27, 32, 40, 42,
      43, 44, 45, 55
    ],
    tutor: [
       14,  38, 102, 164,
      173, 203, 207, 214,
      111
    ]
  },
  {
    dexid: 188,
    baseStats: { hp: 55, atk: 45, def: 50, spa: 45, spd: 65, spe: 80 },
    types: [ 11, 2 ],
    catchRate: 120,
    baseExp: 136,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 6, 7 ],
    ability: [ 34, 34 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       6,  9, 10, 11, 17, 19,
      21, 22, 27, 32, 40, 42,
      43, 44, 45, 55
    ],
    tutor: [
       14,  38, 102, 164,
      173, 203, 207, 214,
      111
    ]
  },
  {
    dexid: 189,
    baseStats: { hp: 75, atk: 55, def: 70, spa: 55, spd: 85, spe: 110 },
    types: [ 11, 2 ],
    catchRate: 45,
    baseExp: 176,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 6, 7 ],
    ability: [ 34, 34 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       6,  9, 10, 11, 15, 17, 19,
      21, 22, 27, 32, 40, 42, 43,
      44, 45, 55
    ],
    tutor: [
       14,  38, 102, 164,
      173, 203, 207, 214,
      111
    ]
  },
  {
    dexid: 190,
    baseStats: { hp: 55, atk: 70, def: 55, spa: 40, spd: 55, spe: 85 },
    types: [ 0, 0 ],
    catchRate: 45,
    baseExp: 94,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 4,
    eggGroups: [ 5, 5 ],
    ability: [ 50, 53 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       1,  3,  6, 10, 11, 12, 17, 18, 21,
      22, 23, 24, 25, 27, 28, 30, 31, 32,
      34, 40, 42, 43, 44, 45, 46, 49, 51,
      54, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      118, 138,  86, 164, 223, 173, 203,
      189,   8, 207, 214, 129, 111,   9,
        7, 210
    ]
  },
  {
    dexid: 191,
    baseStats: { hp: 30, atk: 30, def: 30, spa: 30, spd: 30, spe: 30 },
    types: [ 11, 11 ],
    catchRate: 235,
    baseExp: 52,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 7, 7 ],
    ability: [ 34, 34 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       6,  9, 10, 11, 16, 17, 19,
      20, 21, 22, 27, 32, 36, 42,
      43, 44, 45, 51, 55
    ],
    tutor: [
       14,  38, 102, 164,
      173, 203, 207, 214
    ]
  },
  {
    dexid: 192,
    baseStats: { hp: 75, atk: 75, def: 55, spa: 105, spd: 85, spe: 30 },
    types: [ 11, 11 ],
    catchRate: 120,
    baseExp: 146,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 7, 7 ],
    ability: [ 34, 34 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       6,  9, 10, 11, 15, 16, 17,
      19, 20, 21, 22, 27, 32, 36,
      42, 43, 44, 45, 51, 55
    ],
    tutor: [
       14,  38, 102, 164,
      173, 203, 207, 214
    ]
  },
  {
    dexid: 193,
    baseStats: { hp: 65, atk: 65, def: 45, spa: 75, spd: 45, spe: 95 },
    types: [ 6, 2 ],
    catchRate: 75,
    baseExp: 147,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 3, 3 ],
    ability: [ 3, 14 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       6, 10, 11, 17, 19, 21, 22,
      27, 29, 30, 32, 40, 42, 43,
      44, 45, 46, 47, 55
    ],
    tutor: [
       38, 102, 138, 164,
      173, 203, 207, 214,
      129
    ]
  },
  {
    dexid: 194,
    baseStats: { hp: 55, atk: 45, def: 45, spa: 25, spd: 25, spe: 15 },
    types: [ 10, 4 ],
    catchRate: 255,
    baseExp: 52,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 2, 5 ],
    ability: [ 6, 11 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 17, 18,
      21, 23, 26, 27, 28, 32, 36, 37,
      42, 43, 44, 45, 53, 55, 56, 57,
      58
    ],
    tutor: [
       34,  38, 102, 164, 223,
      205, 173, 203, 189,   8,
      207, 214, 111
    ]
  },
  {
    dexid: 195,
    baseStats: { hp: 95, atk: 85, def: 85, spa: 65, spd: 65, spe: 35 },
    types: [ 10, 4 ],
    catchRate: 90,
    baseExp: 137,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 2, 5 ],
    ability: [ 6, 11 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       1,  3,  6,  7, 10, 13, 14, 15, 17,
      18, 21, 23, 26, 27, 28, 31, 32, 36,
      37, 39, 42, 43, 44, 45, 53, 54, 55,
      56, 57, 58
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 164, 223, 205, 173, 203,
      189,   8, 207, 214, 111
    ]
  },
  {
    dexid: 196,
    baseStats: { hp: 65, atk: 65, def: 60, spa: 130, spd: 95, spe: 110 },
    types: [ 13, 13 ],
    catchRate: 45,
    baseExp: 197,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 35,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 28, 28 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       4,  6, 10, 11, 15, 16, 17, 18,
      21, 23, 27, 28, 29, 30, 32, 33,
      42, 43, 44, 45, 48, 51, 55
    ],
    tutor: [
       34,  38, 102, 138,
      164, 244, 173, 203,
      189, 207, 214, 129
    ]
  },
  {
    dexid: 197,
    baseStats: { hp: 95, atk: 65, def: 110, spa: 60, spd: 130, spe: 65 },
    types: [ 16, 16 ],
    catchRate: 45,
    baseExp: 197,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 35,
    baseFriendship: 35,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 28, 28 ],
    escapeRate: 0,
    color: 4,
    noFlip: false,
    tmhm: [
       6, 10, 11, 12, 15, 17, 18,
      21, 23, 27, 28, 29, 30, 32,
      41, 42, 43, 44, 45, 49, 51,
      55
    ],
    tutor: [
       34,  38, 102, 138,
      164, 244, 173, 203,
      189, 207, 214, 129
    ]
  },
  {
    dexid: 198,
    baseStats: { hp: 60, atk: 85, def: 42, spa: 85, spd: 42, spe: 91 },
    types: [ 16, 2 ],
    catchRate: 30,
    baseExp: 107,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 35,
    growth: 3,
    eggGroups: [ 4, 4 ],
    ability: [ 15, 15 ],
    escapeRate: 0,
    color: 4,
    noFlip: false,
    tmhm: [
       4,  6, 10, 11, 12, 17, 18,
      21, 27, 30, 32, 40, 41, 42,
      43, 44, 45, 46, 47, 49, 52
    ],
    tutor: [
       38, 102, 138,  86,
      164, 244, 173, 196,
      203, 189, 207, 214,
      129
    ]
  },
  {
    dexid: 199,
    baseStats: { hp: 95, atk: 75, def: 80, spa: 100, spd: 110, spe: 30 },
    types: [ 10, 13 ],
    catchRate: 70,
    baseExp: 164,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 1, 2 ],
    ability: [ 12, 20 ],
    escapeRate: 0,
    color: 9,
    noFlip: false,
    tmhm: [
       1,  3,  4,  6,  7, 10, 11, 13, 14,
      15, 17, 18, 20, 21, 23, 26, 27, 28,
      29, 30, 31, 32, 35, 38, 42, 43, 44,
      45, 48, 53, 54, 55, 56, 58
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 138,  86, 164, 223, 244,
      173, 196, 203, 189,   8, 207,
      214, 129, 210
    ]
  },
  {
    dexid: 200,
    baseStats: { hp: 60, atk: 60, def: 60, spa: 85, spd: 85, spe: 85 },
    types: [ 7, 7 ],
    catchRate: 45,
    baseExp: 147,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 25,
    baseFriendship: 35,
    growth: 4,
    eggGroups: [ 11, 11 ],
    ability: [ 26, 26 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       4,  6, 10, 11, 12, 17, 18, 21,
      24, 25, 27, 29, 30, 32, 34, 40,
      41, 42, 43, 44, 45, 46, 48, 49,
      55
    ],
    tutor: [
       38, 102, 138,  86,
      164, 244, 173, 203,
      207, 214, 129, 111
    ]
  },
  {
    dexid: 201,
    baseStats: { hp: 48, atk: 72, def: 48, spa: 72, spd: 48, spe: 48 },
    types: [ 13, 13 ],
    catchRate: 225,
    baseExp: 61,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 40,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 15, 15 ],
    ability: [ 26, 26 ],
    escapeRate: 0,
    color: 4,
    noFlip: true,
    tmhm: [],
    tutor: []
  },
  {
    dexid: 202,
    baseStats: { hp: 190, atk: 33, def: 58, spa: 33, spd: 58, spe: 33 },
    types: [ 13, 13 ],
    catchRate: 45,
    baseExp: 177,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 11, 11 ],
    ability: [ 23, 23 ],
    escapeRate: 4,
    color: 1,
    noFlip: false,
    tmhm: [],
    tutor: []
  },
  {
    dexid: 203,
    baseStats: { hp: 70, atk: 80, def: 65, spa: 90, spd: 65, spe: 85 },
    types: [ 0, 13 ],
    catchRate: 60,
    baseExp: 149,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 39, 48 ],
    escapeRate: 4,
    color: 2,
    noFlip: false,
    tmhm: [
       4,  6, 10, 11, 16, 17, 18, 21,
      23, 24, 25, 26, 27, 29, 30, 32,
      33, 34, 42, 43, 44, 45, 46, 48,
      54, 55, 56
    ],
    tutor: [
       34,  38, 102, 138,  86,
      164, 244, 173, 203, 189,
      207, 214, 129
    ]
  },
  {
    dexid: 204,
    baseStats: { hp: 50, atk: 65, def: 90, spa: 35, spd: 35, spe: 15 },
    types: [ 6, 6 ],
    catchRate: 190,
    baseExp: 60,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 3, 3 ],
    ability: [ 5, 5 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       6, 10, 11, 16, 17, 19, 21,
      22, 26, 27, 28, 32, 33, 37,
      42, 43, 44, 45, 54, 56
    ],
    tutor: [
       34,  38,  68, 102, 153,
      157, 164, 205, 173, 203,
      207, 214, 111
    ]
  },
  {
    dexid: 205,
    baseStats: { hp: 75, atk: 90, def: 140, spa: 60, spd: 60, spe: 40 },
    types: [ 6, 8 ],
    catchRate: 75,
    baseExp: 118,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 3, 3 ],
    ability: [ 5, 5 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       6, 10, 11, 15, 16, 17, 19,
      21, 22, 26, 27, 28, 32, 33,
      37, 42, 43, 44, 45, 54, 56
    ],
    tutor: [
       34,  38,  68, 102, 153,
      157, 164, 205, 173, 203,
      207, 214, 111
    ]
  },
  {
    dexid: 206,
    baseStats: { hp: 100, atk: 70, def: 70, spa: 65, spd: 65, spe: 45 },
    types: [ 0, 0 ],
    catchRate: 190,
    baseExp: 75,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 32, 50 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       3,  4,  6, 10, 11, 13, 14, 17, 18,
      21, 22, 23, 24, 25, 26, 27, 28, 30,
      32, 34, 35, 38, 39, 42, 43, 44, 45,
      46, 54, 56
    ],
    tutor: [
       34,  38,  68, 102, 138,
       86, 157, 164, 205, 244,
      173, 203, 189, 207, 214,
      111
    ]
  },
  {
    dexid: 207,
    baseStats: { hp: 65, atk: 75, def: 105, spa: 35, spd: 65, spe: 85 },
    types: [ 4, 2 ],
    catchRate: 60,
    baseExp: 108,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 3, 3 ],
    ability: [ 52, 8 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       6, 10, 11, 17, 18, 21, 23, 26,
      27, 28, 32, 36, 37, 39, 40, 42,
      43, 44, 45, 46, 47, 51, 54, 56
    ],
    tutor: [
       14,  38,  68, 102, 138,
      157, 164, 173, 203, 207,
      214, 129, 210
    ]
  },
  {
    dexid: 208,
    baseStats: { hp: 75, atk: 85, def: 200, spa: 55, spd: 65, spe: 30 },
    types: [ 8, 4 ],
    catchRate: 25,
    baseExp: 196,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 25,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 10, 10 ],
    ability: [ 69, 5 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       5,  6, 10, 11, 12, 15, 17, 21,
      23, 26, 27, 28, 32, 37, 39, 41,
      42, 43, 44, 45, 51, 54, 56
    ],
    tutor: [
       34,  38, 102, 153,
      157, 164, 205, 173,
      203, 189, 207, 214,
      111
    ]
  },
  {
    dexid: 209,
    baseStats: { hp: 60, atk: 80, def: 50, spa: 40, spd: 40, spe: 30 },
    types: [ 0, 0 ],
    catchRate: 190,
    baseExp: 63,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 191,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 4,
    eggGroups: [ 5, 6 ],
    ability: [ 22, 50 ],
    escapeRate: 0,
    color: 9,
    noFlip: false,
    tmhm: [
       1,  3,  5,  6,  8, 10, 11, 12, 17,
      18, 21, 22, 24, 25, 26, 27, 28, 30,
      31, 32, 34, 35, 36, 38, 41, 42, 43,
      44, 45, 46, 50, 54, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      118,  86, 164, 223, 173, 203, 189,
        8, 207, 214, 111,   9,   7
    ]
  },
  {
    dexid: 210,
    baseStats: { hp: 90, atk: 120, def: 75, spa: 60, spd: 60, spe: 45 },
    types: [ 0, 0 ],
    catchRate: 75,
    baseExp: 178,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 191,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 4,
    eggGroups: [ 5, 6 ],
    ability: [ 22, 22 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       1,  3,  5,  6,  8, 10, 11, 12, 15,
      17, 18, 21, 22, 23, 24, 25, 26, 27,
      28, 30, 31, 32, 34, 35, 36, 38, 39,
      41, 42, 43, 44, 45, 46, 50, 54, 56
    ],
    tutor: [
        5, 25,  34,  38,  68,  69, 102,
      118, 86, 157, 164, 223, 173, 203,
      189,  8, 207, 214, 111,   9,   7
    ]
  },
  {
    dexid: 211,
    baseStats: { hp: 65, atk: 95, def: 75, spa: 55, spd: 55, spe: 85 },
    types: [ 10, 3 ],
    catchRate: 45,
    baseExp: 100,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 12, 12 ],
    ability: [ 38, 33 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 17,
      18, 21, 27, 30, 32, 34, 36,
      42, 43, 44, 45, 53, 57, 58
    ],
    tutor: [
       14,  38, 102,  86, 164,
      205, 173, 196, 203, 207,
      214, 129, 111
    ]
  },
  {
    dexid: 212,
    baseStats: { hp: 70, atk: 130, def: 100, spa: 55, spd: 80, spe: 65 },
    types: [ 6, 8 ],
    catchRate: 25,
    baseExp: 200,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 25,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 3, 3 ],
    ability: [ 68, 68 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       6, 10, 11, 15, 17, 18, 21,
      27, 32, 37, 40, 42, 43, 44,
      45, 46, 47, 51, 54, 56
    ],
    tutor: [
       14,  38,  68, 102,
      164, 173, 203, 207,
      214, 129, 210
    ]
  },
  {
    dexid: 213,
    baseStats: { hp: 20, atk: 10, def: 230, spa: 10, spd: 230, spe: 5 },
    types: [ 6, 5 ],
    catchRate: 190,
    baseExp: 80,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 3, 3 ],
    ability: [ 5, 5 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       6, 10, 11, 17, 20, 21, 26,
      27, 28, 32, 36, 37, 39, 42,
      43, 44, 45, 54, 55, 56
    ],
    tutor: [
       34,  38, 102, 157,
      164, 205, 173, 203,
      189, 207, 214, 111
    ]
  },
  {
    dexid: 214,
    baseStats: { hp: 80, atk: 125, def: 75, spa: 40, spd: 95, spe: 85 },
    types: [ 6, 1 ],
    catchRate: 45,
    baseExp: 200,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 25,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 3, 3 ],
    ability: [ 68, 62 ],
    escapeRate: 8,
    color: 1,
    noFlip: false,
    tmhm: [
       1,  6,  8, 10, 11, 15, 17, 18,
      21, 26, 27, 28, 31, 32, 39, 42,
      43, 44, 45, 46, 51, 54, 56
    ],
    tutor: [
       14,  34,  38,  68,  69,
      102, 157, 164, 173, 203,
      207, 214, 210
    ]
  },
  {
    dexid: 215,
    baseStats: { hp: 55, atk: 95, def: 55, spa: 35, spd: 75, spe: 115 },
    types: [ 16, 14 ],
    catchRate: 60,
    baseExp: 132,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 35,
    growth: 3,
    eggGroups: [ 5, 5 ],
    ability: [ 39, 51 ],
    escapeRate: 0,
    color: 4,
    noFlip: true,
    tmhm: [
       1,  4,  6,  7, 10, 11, 12, 13, 14,
      17, 18, 21, 23, 27, 28, 30, 31, 32,
      40, 41, 42, 43, 44, 45, 46, 49, 51,
      53, 54, 56
    ],
    tutor: [
       14,  38,  68, 102, 138, 164,
      223, 244, 173, 196, 203, 189,
        8, 207, 214, 129, 111, 210
    ]
  },
  {
    dexid: 216,
    baseStats: { hp: 60, atk: 80, def: 50, spa: 50, spd: 50, spe: 40 },
    types: [ 0, 0 ],
    catchRate: 120,
    baseExp: 124,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 53, 53 ],
    escapeRate: 0,
    color: 5,
    noFlip: true,
    tmhm: [
       1,  5,  6,  8, 10, 11, 12, 17,
      18, 21, 26, 27, 28, 31, 32, 40,
      41, 42, 43, 44, 45, 46, 51, 54,
      56
    ],
    tutor: [
        5,  14,  25,  34,  38,  68,  69,
      102, 118, 164, 223, 205, 173, 203,
      189,   8, 207, 214, 129, 111,   9,
        7, 210
    ]
  },
  {
    dexid: 217,
    baseStats: { hp: 90, atk: 130, def: 75, spa: 75, spd: 75, spe: 55 },
    types: [ 0, 0 ],
    catchRate: 60,
    baseExp: 189,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 62, 62 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       1,  5,  6,  8, 10, 11, 12, 15,
      17, 18, 21, 26, 27, 28, 31, 32,
      39, 40, 41, 42, 43, 44, 45, 46,
      51, 54, 56
    ],
    tutor: [
        5,  14,  25,  34,  38,  68,  69,
      102, 118, 157, 164, 223, 205, 173,
      203, 189,   8, 207, 214, 129, 111,
        9,   7, 210
    ]
  },
  {
    dexid: 218,
    baseStats: { hp: 40, atk: 40, def: 40, spa: 70, spd: 40, spe: 20 },
    types: [ 9, 9 ],
    catchRate: 190,
    baseExp: 78,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 11, 11 ],
    ability: [ 40, 49 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       6, 10, 11, 16, 17, 21, 27,
      32, 33, 35, 38, 42, 43, 44,
      45, 50, 56
    ],
    tutor: [
       34,  38, 102, 157,
      164, 205, 173, 203,
      189, 207, 214, 111
    ]
  },
  {
    dexid: 219,
    baseStats: { hp: 50, atk: 50, def: 120, spa: 80, spd: 80, spe: 30 },
    types: [ 9, 5 ],
    catchRate: 75,
    baseExp: 154,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 11, 11 ],
    ability: [ 40, 49 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       6, 10, 11, 15, 16, 17, 21,
      26, 27, 32, 33, 35, 37, 38,
      39, 42, 43, 44, 45, 50, 54,
      56
    ],
    tutor: [
       34,  38, 102, 157,
      164, 205, 173, 203,
      189, 207, 214, 111
    ]
  },
  {
    dexid: 220,
    baseStats: { hp: 50, atk: 50, def: 40, spa: 30, spd: 30, spe: 50 },
    types: [ 14, 4 ],
    catchRate: 225,
    baseExp: 78,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 5, 5 ],
    ability: [ 12, 12 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       5,  6,  7, 10, 13, 14, 16, 17,
      18, 21, 26, 27, 28, 32, 33, 37,
      39, 42, 43, 44, 45, 54, 56
    ],
    tutor: [
       34,  38, 102, 157,
      164, 173, 196, 203,
      189, 207, 214, 111
    ]
  },
  {
    dexid: 221,
    baseStats: { hp: 100, atk: 100, def: 80, spa: 60, spd: 60, spe: 50 },
    types: [ 14, 4 ],
    catchRate: 75,
    baseExp: 160,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 5, 5 ],
    ability: [ 12, 12 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       5,  6,  7, 10, 13, 14, 15, 16,
      17, 18, 21, 26, 27, 28, 32, 33,
      37, 39, 42, 43, 44, 45, 54, 56
    ],
    tutor: [
       34,  38, 102, 157,
      164, 173, 196, 203,
      189, 207, 214, 111
    ]
  },
  {
    dexid: 222,
    baseStats: { hp: 55, atk: 55, def: 85, spa: 65, spd: 85, spe: 35 },
    types: [ 10, 5 ],
    catchRate: 60,
    baseExp: 113,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 191,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 4,
    eggGroups: [ 2, 9 ],
    ability: [ 55, 30 ],
    escapeRate: 0,
    color: 9,
    noFlip: false,
    tmhm: [
       3,  4,  6,  7, 10, 11, 13, 14, 16,
      17, 18, 20, 21, 26, 27, 28, 29, 30,
      32, 33, 37, 39, 42, 43, 44, 45, 53,
      54, 56
    ],
    tutor: [
       34,  38, 102, 153,
      157, 164, 205, 173,
      203, 189, 207, 214,
      111
    ]
  },
  {
    dexid: 223,
    baseStats: { hp: 35, atk: 65, def: 35, spa: 65, spd: 35, spe: 65 },
    types: [ 10, 10 ],
    catchRate: 190,
    baseExp: 78,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 2, 12 ],
    ability: [ 55, 55 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       3,  6, 10, 11, 13, 14, 15, 17,
      18, 21, 27, 29, 32, 35, 38, 42,
      43, 44, 45, 46, 53, 57, 58
    ],
    tutor: [
       38, 102,  86, 164,
      173, 203, 189, 207,
      214, 129, 111
    ]
  },
  {
    dexid: 224,
    baseStats: { hp: 75, atk: 105, def: 75, spa: 105, spd: 75, spe: 45 },
    types: [ 10, 10 ],
    catchRate: 75,
    baseExp: 164,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 2, 12 ],
    ability: [ 21, 21 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       3,  6,  9, 10, 11, 13, 14, 15,
      17, 18, 21, 27, 29, 32, 35, 36,
      38, 42, 43, 44, 45, 46, 53, 57,
      58
    ],
    tutor: [
       38,  69, 102,  86,
      164, 173, 203, 189,
      207, 214, 129, 111
    ]
  },
  {
    dexid: 225,
    baseStats: { hp: 45, atk: 55, def: 45, spa: 65, spd: 45, spe: 75 },
    types: [ 14, 2 ],
    catchRate: 45,
    baseExp: 183,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 4,
    eggGroups: [ 2, 5 ],
    ability: [ 72, 55 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       1,  3,  6,  7, 10, 13, 14,
      17, 18, 21, 27, 32, 40, 42,
      43, 44, 45, 46, 52
    ],
    tutor: [
        5,  25,  34,  38,  68,
       69, 102, 164, 173, 196,
      203, 189, 207, 214, 129
    ]
  },
  {
    dexid: 226,
    baseStats: { hp: 65, atk: 40, def: 70, spa: 80, spd: 140, spe: 70 },
    types: [ 10, 2 ],
    catchRate: 25,
    baseExp: 168,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 25,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 2, 2 ],
    ability: [ 33, 11 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 17,
      18, 21, 26, 27, 32, 40, 42,
      43, 44, 45, 53, 57, 58
    ],
    tutor: [
       34,  38, 102, 164,
      173, 196, 203, 189,
      207, 214, 129
    ]
  },
  {
    dexid: 227,
    baseStats: { hp: 65, atk: 80, def: 140, spa: 40, spd: 70, spe: 70 },
    types: [ 8, 2 ],
    catchRate: 25,
    baseExp: 168,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 25,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 4, 4 ],
    ability: [ 51, 5 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       5,  6, 10, 11, 12, 17, 21,
      27, 32, 37, 40, 41, 42, 43,
      44, 45, 46, 47, 51, 52, 56
    ],
    tutor: [
       38,  68, 102, 157,
      164, 173, 203, 189,
      207, 214, 129
    ]
  },
  {
    dexid: 228,
    baseStats: { hp: 45, atk: 60, def: 30, spa: 80, spd: 50, spe: 65 },
    types: [ 16, 9 ],
    catchRate: 120,
    baseExp: 114,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 5, 5 ],
    ability: [ 48, 18 ],
    escapeRate: 0,
    color: 4,
    noFlip: false,
    tmhm: [
       5,  6, 10, 11, 12, 17, 21, 22,
      23, 27, 30, 32, 35, 36, 38, 41,
      42, 43, 44, 45, 46, 49, 50, 56
    ],
    tutor: [
       34,  38,  68, 102,
      138, 164, 173, 203,
      189, 207, 214, 129
    ]
  },
  {
    dexid: 229,
    baseStats: { hp: 75, atk: 90, def: 50, spa: 110, spd: 80, spe: 95 },
    types: [ 16, 9 ],
    catchRate: 45,
    baseExp: 204,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 5, 5 ],
    ability: [ 48, 18 ],
    escapeRate: 0,
    color: 4,
    noFlip: false,
    tmhm: [
       5,  6, 10, 11, 12, 15, 17, 21,
      22, 23, 27, 30, 32, 35, 36, 38,
      41, 42, 43, 44, 45, 46, 49, 50,
      54, 56
    ],
    tutor: [
       34,  38,  68, 102,
      138, 164, 173, 203,
      189, 207, 214, 129
    ]
  },
  {
    dexid: 230,
    baseStats: { hp: 75, atk: 95, def: 95, spa: 95, spd: 95, spe: 85 },
    types: [ 10, 15 ],
    catchRate: 45,
    baseExp: 207,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 2, 14 ],
    ability: [ 33, 33 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 15,
      17, 18, 21, 27, 32, 42, 43,
      44, 45, 53, 57, 58
    ],
    tutor: [
       34,  38, 102, 164,
      173, 196, 203, 207,
      214, 129
    ]
  },
  {
    dexid: 231,
    baseStats: { hp: 90, atk: 60, def: 60, spa: 40, spd: 40, spe: 40 },
    types: [ 4, 4 ],
    catchRate: 120,
    baseExp: 124,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 53, 53 ],
    escapeRate: 10,
    color: 1,
    noFlip: false,
    tmhm: [
       5,  6, 10, 11, 17, 21, 23,
      26, 27, 32, 37, 39, 42, 43,
      44, 45, 54, 56
    ],
    tutor: [
       34,  38,  68, 102,
      164, 205, 173, 203,
      189, 207, 214, 111
    ]
  },
  {
    dexid: 232,
    baseStats: { hp: 90, atk: 120, def: 120, spa: 60, spd: 60, spe: 50 },
    types: [ 4, 4 ],
    catchRate: 60,
    baseExp: 189,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 5, 5 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       5,  6, 10, 11, 15, 17, 21,
      23, 26, 27, 32, 37, 39, 42,
      43, 44, 45, 54, 56
    ],
    tutor: [
       34,  38,  68, 102, 157,
      164, 205, 173, 203, 189,
      207, 214, 111
    ]
  },
  {
    dexid: 233,
    baseStats: { hp: 85, atk: 80, def: 90, spa: 105, spd: 95, spe: 60 },
    types: [ 0, 0 ],
    catchRate: 45,
    baseExp: 180,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 10, 10 ],
    ability: [ 36, 36 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       6, 10, 11, 13, 14, 15, 17, 18,
      21, 22, 23, 24, 25, 27, 29, 30,
      32, 34, 40, 42, 43, 44, 46, 55
    ],
    tutor: [
       38, 102, 138,  86,
      164, 244, 173, 196,
      203, 207, 214, 129,
      111
    ]
  },
  {
    dexid: 234,
    baseStats: { hp: 73, atk: 95, def: 62, spa: 85, spd: 65, spe: 85 },
    types: [ 0, 0 ],
    catchRate: 45,
    baseExp: 165,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 5, 5 ],
    ability: [ 22, 22 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       4,  5,  6, 10, 11, 16, 17, 18,
      21, 22, 23, 24, 25, 26, 27, 29,
      30, 32, 33, 34, 42, 43, 44, 45,
      46, 48, 55
    ],
    tutor: [
       34,  38, 102, 138,  86,
      164, 244, 173, 203, 189,
      207, 214, 129
    ]
  },
  {
    dexid: 235,
    baseStats: { hp: 55, atk: 20, def: 35, spa: 20, spd: 45, spe: 75 },
    types: [ 0, 0 ],
    catchRate: 45,
    baseExp: 106,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 4,
    eggGroups: [ 5, 5 ],
    ability: [ 20, 20 ],
    escapeRate: 0,
    color: 8,
    noFlip: false,
    tmhm: [],
    tutor: []
  },
  {
    dexid: 236,
    baseStats: { hp: 35, atk: 35, def: 35, spa: 35, spd: 35, spe: 35 },
    types: [ 1, 1 ],
    catchRate: 75,
    baseExp: 91,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 0,
    hatchCycles: 25,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 15, 15 ],
    ability: [ 62, 62 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       6,  8, 10, 11, 17, 18, 21,
      26, 27, 31, 32, 42, 43, 44,
      45, 46, 54, 56
    ],
    tutor: [
       25,  34,  38,  68,  69,
      102, 157, 164, 173, 203,
      189, 207, 214, 129
    ]
  },
  {
    dexid: 237,
    baseStats: { hp: 50, atk: 95, def: 95, spa: 35, spd: 110, spe: 70 },
    types: [ 1, 1 ],
    catchRate: 45,
    baseExp: 138,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 0,
    hatchCycles: 25,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 8, 8 ],
    ability: [ 22, 22 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       6,  8, 10, 11, 17, 18, 21,
      26, 27, 28, 31, 32, 37, 42,
      43, 44, 45, 46, 54, 56
    ],
    tutor: [
       25,  34,  38,  68,  69,
      102, 157, 164, 173, 203,
      189, 207, 214, 129
    ]
  },
  {
    dexid: 238,
    baseStats: { hp: 45, atk: 30, def: 15, spa: 85, spd: 65, spe: 65 },
    types: [ 14, 13 ],
    catchRate: 45,
    baseExp: 87,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 254,
    hatchCycles: 25,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 15, 15 ],
    ability: [ 12, 12 ],
    escapeRate: 0,
    color: 9,
    noFlip: false,
    tmhm: [
       3,  4,  6,  7, 10, 13, 14, 16,
      17, 18, 21, 27, 29, 30, 32, 33,
      42, 43, 44, 45, 46, 48, 55
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 118, 138, 164, 223, 244,
      173, 196, 203, 189,   8, 207,
      214
    ]
  },
  {
    dexid: 239,
    baseStats: { hp: 45, atk: 63, def: 37, spa: 65, spd: 55, spe: 95 },
    types: [ 12, 12 ],
    catchRate: 45,
    baseExp: 106,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 63,
    hatchCycles: 25,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 15, 15 ],
    ability: [ 9, 9 ],
    escapeRate: 0,
    color: 2,
    noFlip: true,
    tmhm: [
       1,  6, 10, 16, 17, 18, 21,
      24, 25, 27, 29, 31, 32, 34,
      42, 43, 44, 45, 46, 55, 56
    ],
    tutor: [
        5, 25,  34,  38,  68,  69,
      102, 86, 164, 223, 173, 203,
      189,  8, 207, 214, 129,   9,
        7
    ]
  },
  {
    dexid: 240,
    baseStats: { hp: 45, atk: 75, def: 37, spa: 70, spd: 55, spe: 83 },
    types: [ 9, 9 ],
    catchRate: 45,
    baseExp: 117,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 63,
    hatchCycles: 25,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 15, 15 ],
    ability: [ 49, 49 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       1,  6, 10, 11, 17, 21, 23,
      27, 29, 31, 32, 35, 38, 42,
      43, 44, 45, 46, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 164, 223, 173, 203, 189,
      207, 214,   9,   7
    ]
  },
  {
    dexid: 241,
    baseStats: { hp: 95, atk: 80, def: 105, spa: 40, spd: 70, spe: 100 },
    types: [ 0, 0 ],
    catchRate: 45,
    baseExp: 200,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 254,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 5, 5 ],
    ability: [ 47, 47 ],
    escapeRate: 0,
    color: 9,
    noFlip: false,
    tmhm: [
       1,  3,  6, 10, 11, 13, 14, 15, 17,
      18, 21, 22, 23, 24, 25, 26, 27, 30,
      31, 32, 34, 37, 39, 42, 43, 44, 45,
      53, 54, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      118,  86, 157, 164, 223, 205, 244,
      173, 196, 203, 189,   8, 207, 214,
      111,   9,   7
    ]
  },
  {
    dexid: 242,
    baseStats: { hp: 255, atk: 10, def: 10, spa: 75, spd: 135, spe: 55 },
    types: [ 0, 0 ],
    catchRate: 30,
    baseExp: 255,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 254,
    hatchCycles: 40,
    baseFriendship: 140,
    growth: 4,
    eggGroups: [ 6, 6 ],
    ability: [ 30, 32 ],
    escapeRate: 0,
    color: 9,
    noFlip: false,
    tmhm: [
       1,  3,  4,  6,  7, 10, 11, 13, 14, 15,
      16, 17, 18, 20, 21, 22, 23, 24, 25, 26,
      27, 29, 30, 31, 32, 34, 35, 37, 38, 39,
      42, 43, 44, 45, 48, 49, 54, 55, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 118, 135, 138,  86, 164,
      223, 205, 173, 196, 203, 189,
      207, 214, 111
    ]
  },
  {
    dexid: 243,
    baseStats: { hp: 90, atk: 85, def: 75, spa: 115, spd: 100, spe: 115 },
    types: [ 12, 12 ],
    catchRate: 3,
    baseExp: 216,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 80,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 15, 15 ],
    ability: [ 46, 46 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       4,  5,  6, 10, 11, 15, 17, 18,
      21, 23, 24, 25, 27, 28, 32, 33,
      34, 37, 42, 43, 44, 51, 54, 55,
      56
    ],
    tutor: [
       34,  38, 102,  86,
      164, 244, 173, 203,
      189, 207, 214, 129
    ]
  },
  {
    dexid: 244,
    baseStats: { hp: 115, atk: 115, def: 85, spa: 90, spd: 75, spe: 100 },
    types: [ 9, 9 ],
    catchRate: 3,
    baseExp: 217,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 80,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 15, 15 ],
    ability: [ 46, 46 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       4,  5,  6, 10, 11, 15, 17, 18,
      21, 22, 23, 27, 28, 32, 33, 35,
      37, 38, 42, 43, 44, 51, 54, 55,
      56
    ],
    tutor: [
       34,  38, 102, 164,
      244, 173, 203, 189,
      207, 214, 129
    ]
  },
  {
    dexid: 245,
    baseStats: { hp: 100, atk: 75, def: 115, spa: 90, spd: 115, spe: 85 },
    types: [ 10, 10 ],
    catchRate: 3,
    baseExp: 215,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 80,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 15, 15 ],
    ability: [ 46, 46 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  4,  5,  6,  7, 10, 11, 13,
      14, 15, 17, 18, 21, 23, 27, 28,
      32, 33, 37, 42, 43, 44, 51, 53,
      56, 57, 58
    ],
    tutor: [
       34,  38, 102, 164,
      244, 173, 196, 203,
      189, 207, 214, 129
    ]
  },
  {
    dexid: 246,
    baseStats: { hp: 50, atk: 64, def: 50, spa: 45, spd: 50, spe: 41 },
    types: [ 5, 4 ],
    catchRate: 45,
    baseExp: 67,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 40,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 1, 1 ],
    ability: [ 62, 62 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       6, 10, 11, 12, 15, 17, 18,
      21, 26, 27, 28, 31, 32, 37,
      41, 42, 43, 44, 45, 56
    ],
    tutor: [
       34,  38, 102, 157,
      164, 173, 203, 189,
      207, 214
    ]
  },
  {
    dexid: 247,
    baseStats: { hp: 70, atk: 84, def: 70, spa: 65, spd: 70, spe: 51 },
    types: [ 5, 4 ],
    catchRate: 45,
    baseExp: 144,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 40,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 1, 1 ],
    ability: [ 61, 61 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       6, 10, 11, 12, 15, 17, 18,
      21, 26, 27, 28, 31, 32, 37,
      41, 42, 43, 44, 45, 56
    ],
    tutor: [
       34,  38, 102, 157,
      164, 173, 203, 189,
      207, 214
    ]
  },
  {
    dexid: 248,
    baseStats: { hp: 100, atk: 134, def: 110, spa: 95, spd: 100, spe: 61 },
    types: [ 5, 16 ],
    catchRate: 45,
    baseExp: 218,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 40,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 1, 1 ],
    ability: [ 45, 45 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       1,  2,  3,  5,  6, 10, 11, 12, 13, 14,
      15, 17, 18, 21, 23, 24, 25, 26, 27, 28,
      31, 32, 34, 35, 37, 38, 39, 40, 41, 42,
      43, 44, 45, 51, 53, 54, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102,  86, 157, 164, 223, 173,
      203, 189, 207, 214,   7, 210
    ]
  },
  {
    dexid: 249,
    baseStats: { hp: 106, atk: 90, def: 130, spa: 90, spd: 154, spe: 110 },
    types: [ 13, 2 ],
    catchRate: 3,
    baseExp: 220,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 120,
    baseFriendship: 0,
    growth: 5,
    eggGroups: [ 15, 15 ],
    ability: [ 46, 46 ],
    escapeRate: 0,
    color: 8,
    noFlip: false,
    tmhm: [
       3,  4,  5,  6,  7, 10, 11, 13, 14, 15,
      16, 17, 18, 19, 20, 21, 23, 24, 25, 26,
      27, 29, 30, 32, 33, 34, 37, 40, 42, 43,
      44, 47, 48, 52, 53, 54, 56, 57, 58
    ],
    tutor: [
       34,  38, 102, 138,  86,
      164, 244, 173, 196, 203,
      189, 207, 214, 129
    ]
  },
  {
    dexid: 250,
    baseStats: { hp: 106, atk: 130, def: 90, spa: 110, spd: 154, spe: 90 },
    types: [ 9, 2 ],
    catchRate: 3,
    baseExp: 220,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 120,
    baseFriendship: 0,
    growth: 5,
    eggGroups: [ 15, 15 ],
    ability: [ 46, 46 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       4,  5,  6, 10, 11, 15, 16, 17, 18,
      19, 20, 21, 22, 24, 25, 26, 27, 29,
      30, 32, 33, 34, 35, 37, 38, 40, 42,
      43, 44, 47, 50, 52, 54, 55, 56
    ],
    tutor: [
       38, 102, 138,  86,
      164, 244, 173, 203,
      189, 207, 214, 129
    ]
  },
  {
    dexid: 251,
    baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
    types: [ 13, 11 ],
    catchRate: 45,
    baseExp: 64,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 120,
    baseFriendship: 100,
    growth: 3,
    eggGroups: [ 15, 15 ],
    ability: [ 30, 30 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       3,  4,  6, 10, 11, 15, 16, 17,
      18, 19, 20, 21, 22, 27, 29, 30,
      32, 33, 34, 37, 40, 42, 43, 44,
      48, 51, 55
    ],
    tutor: [
       14,  38, 102, 118, 138,
      164, 244, 173, 203, 189,
      207, 214, 129, 111
    ]
  },
  {
    dexid: 252,
    baseStats: { hp: 40, atk: 45, def: 35, spa: 65, spd: 55, spe: 70 },
    types: [ 11, 11 ],
    catchRate: 45,
    baseExp: 65,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 14 ],
    ability: [ 65, 65 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       1,  6,  9, 10, 11, 17, 19, 20,
      21, 22, 23, 27, 28, 31, 32, 39,
      40, 42, 43, 44, 45, 51, 54, 55,
      56
    ],
    tutor: [
        5,  14,  25,  34,  38,  68,
       69, 102, 164, 223, 173, 203,
      189, 207, 214, 129,   9, 210
    ]
  },
  {
    dexid: 253,
    baseStats: { hp: 50, atk: 65, def: 45, spa: 85, spd: 65, spe: 95 },
    types: [ 11, 11 ],
    catchRate: 45,
    baseExp: 141,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 14 ],
    ability: [ 65, 65 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       1,  6,  9, 10, 11, 17, 19, 20,
      21, 22, 23, 27, 28, 31, 32, 39,
      40, 42, 43, 44, 45, 51, 54, 55,
      56
    ],
    tutor: [
        5,  14,  25,  34,  38,  68,
       69, 102, 164, 223, 173, 203,
      189, 207, 214, 129,   9, 210
    ]
  },
  {
    dexid: 254,
    baseStats: { hp: 70, atk: 85, def: 65, spa: 105, spd: 85, spe: 120 },
    types: [ 11, 11 ],
    catchRate: 45,
    baseExp: 208,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 14 ],
    ability: [ 65, 65 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       1,  2,  5,  6,  9, 10, 11, 15, 17,
      19, 20, 21, 22, 23, 26, 27, 28, 31,
      32, 39, 40, 42, 43, 44, 45, 51, 54,
      55, 56
    ],
    tutor: [
        5,  14,  25,  34,  38,  68,
       69, 102, 164, 223, 173, 203,
      189, 207, 214, 129,   9, 210
    ]
  },
  {
    dexid: 255,
    baseStats: { hp: 45, atk: 60, def: 40, spa: 70, spd: 50, spe: 45 },
    types: [ 9, 9 ],
    catchRate: 45,
    baseExp: 65,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 5, 5 ],
    ability: [ 66, 66 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       6, 10, 11, 17, 21, 27, 28,
      32, 35, 38, 39, 40, 42, 43,
      44, 45, 50, 51, 54, 56
    ],
    tutor: [
        5,  14,  25,  34,  38,  68,
       69, 102, 157, 164, 173, 203,
      189, 207, 214, 129
    ]
  },
  {
    dexid: 256,
    baseStats: { hp: 60, atk: 85, def: 60, spa: 85, spd: 60, spe: 55 },
    types: [ 9, 1 ],
    catchRate: 45,
    baseExp: 142,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 5, 5 ],
    ability: [ 66, 66 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       1,  6,  8, 10, 11, 17, 21, 27,
      28, 31, 32, 35, 38, 39, 40, 42,
      43, 44, 45, 50, 51, 54, 56
    ],
    tutor: [
        5,  14,  25,  34,  38,  68,
       69, 102, 157, 164, 223, 173,
      203, 189, 207, 214, 129,   9,
        7, 210
    ]
  },
  {
    dexid: 257,
    baseStats: { hp: 80, atk: 120, def: 70, spa: 110, spd: 70, spe: 80 },
    types: [ 9, 1 ],
    catchRate: 45,
    baseExp: 209,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 5, 5 ],
    ability: [ 66, 66 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       1,  5,  6,  8, 10, 11, 15, 17,
      21, 26, 27, 28, 31, 32, 35, 38,
      39, 40, 42, 43, 44, 45, 50, 51,
      54, 56
    ],
    tutor: [
        5,  14,  25,  34,  38,  68,
       69, 102, 157, 164, 223, 173,
      203, 189, 207, 214, 129,   9,
        7, 210
    ]
  },
  {
    dexid: 258,
    baseStats: { hp: 50, atk: 70, def: 50, spa: 50, spd: 50, spe: 40 },
    types: [ 10, 10 ],
    catchRate: 45,
    baseExp: 65,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 2 ],
    ability: [ 67, 67 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 17, 18,
      21, 23, 27, 28, 32, 39, 42, 43,
      44, 45, 53, 54, 56, 57, 58
    ],
    tutor: [
       34,  38, 102, 164,
      205, 173, 196, 203,
      189, 207, 214, 111
    ]
  },
  {
    dexid: 259,
    baseStats: { hp: 70, atk: 85, def: 70, spa: 60, spd: 70, spe: 50 },
    types: [ 10, 4 ],
    catchRate: 45,
    baseExp: 143,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 2 ],
    ability: [ 67, 67 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 17, 18,
      21, 23, 26, 27, 28, 32, 39, 42,
      43, 44, 45, 53, 54, 56, 57, 58
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 157, 164, 223, 205, 173,
      196, 203, 189,   8, 207, 214,
      111
    ]
  },
  {
    dexid: 260,
    baseStats: { hp: 100, atk: 110, def: 90, spa: 85, spd: 90, spe: 60 },
    types: [ 10, 4 ],
    catchRate: 45,
    baseExp: 210,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 2 ],
    ability: [ 67, 67 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       1,  3,  5,  6,  7, 10, 13, 14,
      15, 17, 18, 21, 23, 26, 27, 28,
      31, 32, 39, 42, 43, 44, 45, 53,
      54, 56, 57, 58
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 157, 164, 223, 205, 173,
      196, 203, 189,   8, 207, 214,
      111
    ]
  },
  {
    dexid: 261,
    baseStats: { hp: 35, atk: 55, def: 35, spa: 30, spd: 30, spe: 35 },
    types: [ 16, 16 ],
    catchRate: 255,
    baseExp: 55,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 50, 50 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       5,  6, 10, 11, 12, 17, 18,
      21, 23, 27, 28, 30, 32, 41,
      42, 43, 44, 45, 46, 49, 56
    ],
    tutor: [
       34,  38,  68, 102,
      164, 244, 173, 203,
      189, 207, 214
    ]
  },
  {
    dexid: 262,
    baseStats: { hp: 70, atk: 90, def: 70, spa: 60, spd: 60, spe: 70 },
    types: [ 16, 16 ],
    catchRate: 127,
    baseExp: 128,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 22, 22 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       5,  6, 10, 11, 12, 15, 17, 18,
      21, 23, 27, 28, 30, 32, 41, 42,
      43, 44, 45, 46, 49, 54, 56
    ],
    tutor: [
       34,  38,  68, 102,
      164, 244, 173, 203,
      189, 207, 214
    ]
  },
  {
    dexid: 263,
    baseStats: { hp: 38, atk: 30, def: 41, spa: 30, spd: 41, spe: 60 },
    types: [ 0, 0 ],
    catchRate: 255,
    baseExp: 60,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 53, 53 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       3,  6, 10, 11, 13, 14, 17, 18,
      21, 23, 24, 25, 27, 28, 30, 32,
      34, 42, 43, 44, 45, 46, 51, 53,
      56
    ],
    tutor: [
       34,  38, 102,  86, 164,
      205, 173, 196, 203, 189,
      207, 214, 129, 111, 210
    ]
  },
  {
    dexid: 264,
    baseStats: { hp: 78, atk: 70, def: 61, spa: 50, spd: 61, spe: 100 },
    types: [ 0, 0 ],
    catchRate: 90,
    baseExp: 128,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 53, 53 ],
    escapeRate: 0,
    color: 8,
    noFlip: false,
    tmhm: [
       3,  5,  6, 10, 11, 13, 14, 15,
      17, 18, 21, 23, 24, 25, 27, 28,
      30, 32, 34, 42, 43, 44, 45, 46,
      51, 53, 54, 56
    ],
    tutor: [
       34,  38, 102,  86, 164,
      205, 173, 196, 203, 189,
      207, 214, 129, 111, 210
    ]
  },
  {
    dexid: 265,
    baseStats: { hp: 45, atk: 45, def: 35, spa: 20, spd: 30, spe: 20 },
    types: [ 6, 6 ],
    catchRate: 255,
    baseExp: 54,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 3, 3 ],
    ability: [ 19, 19 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [],
    tutor: []
  },
  {
    dexid: 266,
    baseStats: { hp: 50, atk: 35, def: 55, spa: 25, spd: 25, spe: 15 },
    types: [ 6, 6 ],
    catchRate: 120,
    baseExp: 71,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 3, 3 ],
    ability: [ 61, 61 ],
    escapeRate: 0,
    color: 8,
    noFlip: false,
    tmhm: [],
    tutor: []
  },
  {
    dexid: 267,
    baseStats: { hp: 60, atk: 70, def: 50, spa: 90, spd: 50, spe: 65 },
    types: [ 6, 2 ],
    catchRate: 45,
    baseExp: 161,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 3, 3 ],
    ability: [ 68, 68 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       6, 10, 11, 15, 17, 19, 20,
      21, 22, 27, 29, 30, 32, 40,
      42, 43, 44, 45, 46, 55
    ],
    tutor: [
       38, 102, 164,
      173, 203, 207,
      214, 129
    ]
  },
  {
    dexid: 268,
    baseStats: { hp: 50, atk: 35, def: 55, spa: 25, spd: 25, spe: 15 },
    types: [ 6, 6 ],
    catchRate: 120,
    baseExp: 72,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 3, 3 ],
    ability: [ 61, 61 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [],
    tutor: []
  },
  {
    dexid: 269,
    baseStats: { hp: 60, atk: 50, def: 70, spa: 50, spd: 90, spe: 65 },
    types: [ 6, 3 ],
    catchRate: 45,
    baseExp: 160,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 3, 3 ],
    ability: [ 19, 19 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       6, 10, 11, 15, 16, 17, 19,
      21, 22, 27, 29, 30, 32, 36,
      40, 42, 43, 44, 45, 46, 55
    ],
    tutor: [
       38, 102, 164,
      173, 203, 207,
      214, 129
    ]
  },
  {
    dexid: 270,
    baseStats: { hp: 40, atk: 30, def: 30, spa: 40, spd: 50, spe: 30 },
    types: [ 10, 11 ],
    catchRate: 255,
    baseExp: 74,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 2, 7 ],
    ability: [ 33, 44 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       3,  6,  7,  9, 10, 11, 13,
      14, 17, 18, 19, 21, 22, 27,
      32, 42, 43, 44, 45, 46, 53,
      55
    ],
    tutor: [
       14,  34,  38, 102,
      164, 173, 196, 203,
      207, 214
    ]
  },
  {
    dexid: 271,
    baseStats: { hp: 60, atk: 50, def: 50, spa: 60, spd: 70, spe: 50 },
    types: [ 10, 11 ],
    catchRate: 120,
    baseExp: 141,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 2, 7 ],
    ability: [ 33, 44 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       3,  6,  7,  9, 10, 11, 13, 14,
      17, 18, 19, 21, 22, 27, 31, 32,
      42, 43, 44, 45, 46, 53, 54, 55,
      56, 57, 58
    ],
    tutor: [
       14,  34,  38, 102, 164, 223,
      173, 196, 203, 189,   8, 207,
      214,   9,   7
    ]
  },
  {
    dexid: 272,
    baseStats: { hp: 80, atk: 70, def: 70, spa: 90, spd: 100, spe: 70 },
    types: [ 10, 11 ],
    catchRate: 45,
    baseExp: 181,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 2, 7 ],
    ability: [ 33, 44 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       1,  3,  6,  7,  9, 10, 11, 13, 14,
      15, 17, 18, 19, 21, 22, 27, 31, 32,
      42, 43, 44, 45, 46, 53, 54, 55, 56,
      57, 58
    ],
    tutor: [
        5,  14,  25,  34,  38,  68,  69,
      102, 118, 164, 223, 173, 196, 203,
      189,   8, 207, 214,   9,   7
    ]
  },
  {
    dexid: 273,
    baseStats: { hp: 40, atk: 40, def: 50, spa: 30, spd: 30, spe: 30 },
    types: [ 11, 11 ],
    catchRate: 255,
    baseExp: 74,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 5, 7 ],
    ability: [ 34, 48 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       6,  9, 10, 11, 17, 19, 21,
      22, 27, 28, 30, 32, 42, 43,
      44, 45, 55, 56
    ],
    tutor: [
       14,  34,  38, 102,
      153, 164, 205, 173,
      203, 207, 214, 111
    ]
  },
  {
    dexid: 274,
    baseStats: { hp: 70, atk: 70, def: 40, spa: 60, spd: 40, spe: 60 },
    types: [ 11, 16 ],
    catchRate: 120,
    baseExp: 141,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 5, 7 ],
    ability: [ 34, 48 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       6,  9, 10, 11, 15, 17, 19, 21,
      22, 27, 28, 30, 31, 32, 39, 41,
      42, 43, 44, 45, 46, 51, 54, 55,
      56
    ],
    tutor: [
       14,  25,  34,  38, 102,
      153, 164, 205, 244, 173,
      203, 189, 207, 214, 129,
      111, 210
    ]
  },
  {
    dexid: 275,
    baseStats: { hp: 90, atk: 100, def: 60, spa: 90, spd: 60, spe: 80 },
    types: [ 11, 16 ],
    catchRate: 45,
    baseExp: 181,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 5, 7 ],
    ability: [ 34, 48 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       6,  9, 10, 11, 15, 17, 19, 21,
      22, 27, 28, 30, 31, 32, 39, 40,
      41, 42, 43, 44, 45, 46, 51, 54,
      55, 56
    ],
    tutor: [
       14,  25,  34,  38, 102,
      153, 164, 205, 244, 173,
      203, 189, 207, 214, 129,
      111, 210
    ]
  },
  {
    dexid: 276,
    baseStats: { hp: 40, atk: 55, def: 30, spa: 30, spd: 30, spe: 85 },
    types: [ 0, 2 ],
    catchRate: 200,
    baseExp: 59,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 4, 4 ],
    ability: [ 62, 62 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       6, 10, 11, 17, 18, 21,
      27, 32, 40, 42, 43, 44,
      45, 46, 47, 52
    ],
    tutor: [
       38,  68, 102, 164,
      173, 203, 189, 207,
      214, 129
    ]
  },
  {
    dexid: 277,
    baseStats: { hp: 60, atk: 85, def: 60, spa: 50, spd: 50, spe: 125 },
    types: [ 0, 2 ],
    catchRate: 45,
    baseExp: 162,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 4, 4 ],
    ability: [ 62, 62 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       6, 10, 11, 15, 17, 18, 21,
      27, 32, 40, 42, 43, 44, 45,
      46, 47, 52
    ],
    tutor: [
       38,  68, 102, 164,
      173, 203, 189, 207,
      214, 129
    ]
  },
  {
    dexid: 278,
    baseStats: { hp: 40, atk: 30, def: 30, spa: 55, spd: 30, spe: 85 },
    types: [ 10, 2 ],
    catchRate: 190,
    baseExp: 64,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 2, 4 ],
    ability: [ 51, 51 ],
    escapeRate: 0,
    color: 8,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 17,
      18, 21, 27, 32, 34, 40, 42,
      43, 44, 45, 46, 47, 52
    ],
    tutor: [
       38, 102, 164, 173,
      196, 203, 189, 207,
      214, 129
    ]
  },
  {
    dexid: 279,
    baseStats: { hp: 60, atk: 50, def: 100, spa: 85, spd: 70, spe: 65 },
    types: [ 10, 2 ],
    catchRate: 45,
    baseExp: 164,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 2, 4 ],
    ability: [ 51, 51 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 15,
      17, 18, 21, 27, 32, 34, 40,
      42, 43, 44, 45, 46, 47, 52,
      53
    ],
    tutor: [
       38, 102, 164, 173,
      196, 203, 189, 207,
      214, 129
    ]
  },
  {
    dexid: 280,
    baseStats: { hp: 28, atk: 25, def: 25, spa: 45, spd: 35, spe: 40 },
    types: [ 13, 13 ],
    catchRate: 235,
    baseExp: 70,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 11, 11 ],
    ability: [ 28, 36 ],
    escapeRate: 0,
    color: 8,
    noFlip: false,
    tmhm: [
       4,  6, 10, 11, 12, 16, 17, 18,
      20, 21, 24, 27, 29, 30, 32, 33,
      34, 41, 42, 43, 44, 45, 46, 48,
      49, 55
    ],
    tutor: [
       34,  38, 102, 138,  86, 164,
      244, 173, 196, 203, 189,   8,
      207, 214, 111,   9,   7
    ]
  },
  {
    dexid: 281,
    baseStats: { hp: 38, atk: 35, def: 35, spa: 65, spd: 55, spe: 50 },
    types: [ 13, 13 ],
    catchRate: 120,
    baseExp: 140,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 11, 11 ],
    ability: [ 28, 36 ],
    escapeRate: 0,
    color: 8,
    noFlip: false,
    tmhm: [
       4,  6, 10, 11, 12, 16, 17, 18,
      20, 21, 24, 27, 29, 30, 32, 33,
      34, 41, 42, 43, 44, 45, 46, 48,
      49, 55
    ],
    tutor: [
       34,  38, 102, 138,  86, 164,
      244, 173, 196, 203, 189,   8,
      207, 214, 111,   9,   7
    ]
  },
  {
    dexid: 282,
    baseStats: { hp: 68, atk: 65, def: 65, spa: 125, spd: 115, spe: 80 },
    types: [ 13, 13 ],
    catchRate: 45,
    baseExp: 208,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 11, 11 ],
    ability: [ 28, 36 ],
    escapeRate: 0,
    color: 8,
    noFlip: false,
    tmhm: [
       4,  6, 10, 11, 12, 15, 16, 17,
      18, 20, 21, 24, 27, 29, 30, 32,
      33, 34, 41, 42, 43, 44, 45, 46,
      48, 49, 55
    ],
    tutor: [
       34,  38, 102, 138,  86, 164,
      244, 173, 196, 203, 189,   8,
      207, 214, 111,   9,   7
    ]
  },
  {
    dexid: 283,
    baseStats: { hp: 40, atk: 30, def: 32, spa: 50, spd: 52, spe: 65 },
    types: [ 6, 10 ],
    catchRate: 200,
    baseExp: 63,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 2, 3 ],
    ability: [ 33, 33 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  6, 10, 11, 13, 14, 17,
      18, 19, 21, 22, 27, 30, 32,
      42, 43, 44, 45, 46, 55
    ],
    tutor: [
       38, 102, 164, 244,
      173, 196, 203, 207,
      214, 129
    ]
  },
  {
    dexid: 284,
    baseStats: { hp: 70, atk: 60, def: 62, spa: 80, spd: 82, spe: 60 },
    types: [ 6, 2 ],
    catchRate: 75,
    baseExp: 128,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 2, 3 ],
    ability: [ 22, 22 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  6, 10, 11, 13, 14, 15,
      17, 18, 19, 21, 22, 27, 30,
      32, 40, 42, 43, 44, 45, 46,
      55
    ],
    tutor: [
       38, 102, 164, 244,
      173, 196, 203, 207,
      214, 129
    ]
  },
  {
    dexid: 285,
    baseStats: { hp: 60, atk: 40, def: 60, spa: 40, spd: 60, spe: 35 },
    types: [ 11, 11 ],
    catchRate: 255,
    baseExp: 65,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 2,
    eggGroups: [ 6, 7 ],
    ability: [ 27, 27 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       6,  9, 10, 11, 17, 19, 20,
      21, 22, 27, 32, 36, 42, 43,
      44, 45, 49, 55
    ],
    tutor: [
       14,  34,  38, 102,
      164, 173, 203, 207,
      214
    ]
  },
  {
    dexid: 286,
    baseStats: { hp: 60, atk: 130, def: 80, spa: 60, spd: 60, spe: 70 },
    types: [ 11, 1 ],
    catchRate: 90,
    baseExp: 165,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 2,
    eggGroups: [ 6, 7 ],
    ability: [ 27, 27 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       1,  6,  8,  9, 10, 11, 15, 17,
      19, 20, 21, 22, 23, 27, 31, 32,
      36, 42, 43, 44, 45, 49, 51, 54,
      55, 56
    ],
    tutor: [
        5,  14,  25,  34,  38,  68,
       69, 102, 164, 223, 173, 203,
      189, 207, 214,   9, 210
    ]
  },
  {
    dexid: 287,
    baseStats: { hp: 60, atk: 60, def: 60, spa: 35, spd: 35, spe: 30 },
    types: [ 0, 0 ],
    catchRate: 255,
    baseExp: 83,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 5, 5 ],
    ability: [ 54, 54 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       1,  3,  6,  8, 10, 11, 13, 14, 17,
      18, 21, 22, 24, 25, 27, 30, 31, 32,
      34, 35, 38, 40, 42, 43, 44, 45, 51,
      54, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 157, 164, 223, 173, 196,
      203, 189,   8, 207, 214,   9,
        7, 210
    ]
  },
  {
    dexid: 288,
    baseStats: { hp: 80, atk: 80, def: 80, spa: 55, spd: 55, spe: 90 },
    types: [ 0, 0 ],
    catchRate: 120,
    baseExp: 126,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 5, 5 ],
    ability: [ 72, 72 ],
    escapeRate: 0,
    color: 8,
    noFlip: false,
    tmhm: [
       1,  3,  5,  6,  8, 10, 11, 12, 13,
      14, 17, 18, 21, 22, 24, 25, 26, 27,
      30, 31, 32, 34, 35, 38, 40, 42, 43,
      44, 45, 51, 54, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 157, 164, 223, 173, 196,
      203, 189,   8, 207, 214,   9,
        7, 210
    ]
  },
  {
    dexid: 289,
    baseStats: { hp: 150, atk: 160, def: 100, spa: 95, spd: 65, spe: 100 },
    types: [ 0, 0 ],
    catchRate: 45,
    baseExp: 210,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 5, 5 ],
    ability: [ 54, 54 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       1,  3,  5,  6,  8, 10, 11, 12, 13,
      14, 15, 17, 18, 21, 22, 24, 25, 26,
      27, 30, 31, 32, 34, 35, 38, 40, 42,
      43, 44, 45, 51, 54, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 157, 164, 223, 173, 196,
      203, 189,   8, 207, 214,   9,
        7, 210
    ]
  },
  {
    dexid: 290,
    baseStats: { hp: 31, atk: 45, def: 90, spa: 30, spd: 30, spe: 40 },
    types: [ 6, 4 ],
    catchRate: 255,
    baseExp: 65,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 1,
    eggGroups: [ 3, 3 ],
    ability: [ 14, 14 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       6, 10, 11, 17, 19, 21, 22,
      27, 28, 30, 32, 37, 40, 42,
      43, 44, 51, 55
    ],
    tutor: [
       38, 102, 164, 173,
      203, 189, 207, 214,
      210
    ]
  },
  {
    dexid: 291,
    baseStats: { hp: 61, atk: 90, def: 45, spa: 50, spd: 50, spe: 160 },
    types: [ 6, 2 ],
    catchRate: 120,
    baseExp: 155,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 1,
    eggGroups: [ 3, 3 ],
    ability: [ 3, 3 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       6, 10, 11, 15, 17, 19, 21,
      22, 27, 28, 30, 32, 37, 40,
      42, 43, 44, 45, 46, 51, 55
    ],
    tutor: [
       14,  38, 102, 164,
      173, 203, 189, 207,
      214, 129, 210
    ]
  },
  {
    dexid: 292,
    baseStats: { hp: 1, atk: 90, def: 45, spa: 30, spd: 30, spe: 40 },
    types: [ 6, 7 ],
    catchRate: 45,
    baseExp: 95,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 1,
    eggGroups: [ 10, 10 ],
    ability: [ 25, 25 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       6, 10, 11, 15, 17, 19, 21,
      22, 27, 28, 30, 32, 37, 40,
      42, 43, 44, 46, 51, 55
    ],
    tutor: [
       38, 102, 138, 164,
      173, 203, 189, 207,
      214, 210
    ]
  },
  {
    dexid: 293,
    baseStats: { hp: 64, atk: 51, def: 23, spa: 51, spd: 23, spe: 28 },
    types: [ 0, 0 ],
    catchRate: 190,
    baseExp: 68,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 5 ],
    ability: [ 43, 43 ],
    escapeRate: 0,
    color: 9,
    noFlip: false,
    tmhm: [
       3,  5,  6, 10, 11, 13, 14,
      17, 18, 21, 22, 27, 30, 32,
      34, 35, 38, 42, 43, 44, 45
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      164, 223, 205, 244, 173, 196, 203,
      189,   8, 207, 214, 111,   9,   7
    ]
  },
  {
    dexid: 294,
    baseStats: { hp: 84, atk: 71, def: 43, spa: 71, spd: 43, spe: 48 },
    types: [ 0, 0 ],
    catchRate: 120,
    baseExp: 126,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 5 ],
    ability: [ 43, 43 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  5,  6, 10, 11, 12, 13, 14,
      17, 18, 21, 22, 26, 27, 30, 31,
      32, 34, 35, 38, 41, 42, 43, 44,
      45, 50, 54, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      157, 164, 223, 205, 244, 173, 196,
      203, 189,   8, 207, 214, 111,   9,
        7
    ]
  },
  {
    dexid: 295,
    baseStats: { hp: 104, atk: 91, def: 63, spa: 91, spd: 63, spe: 68 },
    types: [ 0, 0 ],
    catchRate: 45,
    baseExp: 184,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 1, 5 ],
    ability: [ 43, 43 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  5,  6, 10, 11, 12, 13, 14, 15,
      17, 18, 21, 22, 26, 27, 30, 31, 32,
      34, 35, 38, 41, 42, 43, 44, 45, 50,
      54, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      157, 164, 223, 205, 244, 173, 196,
      203, 189,   8, 207, 214, 111,   9,
        7
    ]
  },
  {
    dexid: 296,
    baseStats: { hp: 72, atk: 60, def: 30, spa: 20, spd: 30, spe: 25 },
    types: [ 1, 1 ],
    catchRate: 180,
    baseExp: 87,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 63,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 2,
    eggGroups: [ 8, 8 ],
    ability: [ 47, 62 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       1,  6,  8, 10, 11, 17, 18,
      21, 26, 27, 28, 31, 32, 39,
      42, 43, 44, 45, 53, 54, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 118, 157, 164, 223, 173,
      203, 189,   8, 207, 214,   9,
        7
    ]
  },
  {
    dexid: 297,
    baseStats: { hp: 144, atk: 120, def: 60, spa: 40, spd: 60, spe: 50 },
    types: [ 1, 1 ],
    catchRate: 200,
    baseExp: 184,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 63,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 2,
    eggGroups: [ 8, 8 ],
    ability: [ 47, 62 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       1,  6,  8, 10, 11, 15, 17,
      18, 21, 26, 27, 28, 31, 32,
      39, 42, 43, 44, 45, 53, 54,
      56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 118, 157, 164, 223, 173,
      203, 189,   8, 207, 214,   9,
        7
    ]
  },
  {
    dexid: 298,
    baseStats: { hp: 50, atk: 20, def: 40, spa: 20, spd: 40, spe: 20 },
    types: [ 0, 0 ],
    catchRate: 150,
    baseExp: 33,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 191,
    hatchCycles: 10,
    baseFriendship: 70,
    growth: 4,
    eggGroups: [ 15, 15 ],
    ability: [ 47, 37 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 17,
      18, 21, 23, 27, 32, 42, 43,
      44, 45, 53, 57
    ],
    tutor: [
       34,  38, 102, 164,
      205, 173, 196, 203,
      189, 207, 214, 129,
      111
    ]
  },
  {
    dexid: 299,
    baseStats: { hp: 30, atk: 45, def: 135, spa: 45, spd: 90, spe: 30 },
    types: [ 5, 5 ],
    catchRate: 255,
    baseExp: 108,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 10, 10 ],
    ability: [ 5, 42 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       6, 10, 11, 12, 17, 21, 24,
      25, 26, 27, 32, 34, 37, 39,
      41, 42, 43, 44, 45, 54, 56
    ],
    tutor: [
       34,  38, 102,  86, 153, 157,
      164, 223, 205, 173, 203, 189,
        8, 207, 214, 111,   9,   7
    ]
  },
  {
    dexid: 300,
    baseStats: { hp: 50, atk: 45, def: 45, spa: 35, spd: 35, spe: 50 },
    types: [ 0, 0 ],
    catchRate: 255,
    baseExp: 65,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 191,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 4,
    eggGroups: [ 5, 6 ],
    ability: [ 56, 56 ],
    escapeRate: 0,
    color: 9,
    noFlip: false,
    tmhm: [
       3,  4,  6, 10, 11, 13, 14, 17,
      18, 20, 21, 22, 23, 24, 25, 27,
      28, 30, 32, 34, 42, 43, 44, 45,
      55
    ],
    tutor: [
       34,  38, 102, 138,  86,
      164, 205, 244, 173, 196,
      203, 189, 207, 214, 129,
      111
    ]
  },
  {
    dexid: 301,
    baseStats: { hp: 70, atk: 65, def: 65, spa: 55, spd: 55, spe: 70 },
    types: [ 0, 0 ],
    catchRate: 60,
    baseExp: 138,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 191,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 4,
    eggGroups: [ 5, 6 ],
    ability: [ 56, 56 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       3,  4,  6, 10, 11, 13, 14, 15,
      17, 18, 20, 21, 22, 23, 24, 25,
      27, 28, 30, 32, 34, 42, 43, 44,
      45, 54, 55, 56
    ],
    tutor: [
       34,  38, 102, 138,  86,
      164, 205, 244, 173, 196,
      203, 189, 207, 214, 129,
      111
    ]
  },
  {
    dexid: 302,
    baseStats: { hp: 50, atk: 75, def: 75, spa: 65, spd: 65, spe: 50 },
    types: [ 16, 7 ],
    catchRate: 45,
    baseExp: 98,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 25,
    baseFriendship: 35,
    growth: 3,
    eggGroups: [ 8, 8 ],
    ability: [ 51, 51 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       1,  3,  4,  6, 10, 11, 12, 17, 18,
      21, 27, 28, 29, 30, 31, 32, 34, 39,
      40, 41, 42, 43, 44, 45, 46, 49, 51,
      55, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      118, 138, 164, 223, 244, 173, 203,
      189,   8, 207, 214,   9,   7, 210
    ]
  },
  {
    dexid: 303,
    baseStats: { hp: 50, atk: 85, def: 85, spa: 55, spd: 55, spe: 50 },
    types: [ 8, 8 ],
    catchRate: 45,
    baseExp: 98,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 4,
    eggGroups: [ 5, 6 ],
    ability: [ 52, 22 ],
    escapeRate: 0,
    color: 4,
    noFlip: false,
    tmhm: [
       1,  6, 10, 11, 12, 13, 15, 17,
      18, 21, 22, 27, 31, 32, 35, 36,
      37, 38, 39, 41, 42, 43, 44, 45,
      54, 56
    ],
    tutor: [
        5,  14,  25,  34,  38,  68,
       69, 102, 157, 164, 223, 244,
      173, 196, 203, 189,   8, 207,
      214,   9
    ]
  },
  {
    dexid: 304,
    baseStats: { hp: 50, atk: 70, def: 100, spa: 40, spd: 40, spe: 30 },
    types: [ 8, 5 ],
    catchRate: 180,
    baseExp: 96,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 35,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 1, 1 ],
    ability: [ 5, 69 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       3,  5,  6, 10, 11, 17, 18, 21,
      23, 26, 27, 28, 32, 34, 37, 39,
      40, 42, 43, 44, 45, 51, 54, 56
    ],
    tutor: [
       34,  38, 102, 157,
      164, 205, 173, 203,
      189, 207, 214, 111,
      210
    ]
  },
  {
    dexid: 305,
    baseStats: { hp: 60, atk: 90, def: 140, spa: 50, spd: 50, spe: 40 },
    types: [ 8, 5 ],
    catchRate: 90,
    baseExp: 152,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 35,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 1, 1 ],
    ability: [ 5, 69 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       3,  5,  6, 10, 11, 17, 18, 21,
      23, 26, 27, 28, 32, 34, 37, 39,
      40, 42, 43, 44, 45, 51, 54, 56
    ],
    tutor: [
       34,  38, 102, 157,
      164, 205, 173, 203,
      189, 207, 214, 111,
      210
    ]
  },
  {
    dexid: 306,
    baseStats: { hp: 70, atk: 110, def: 180, spa: 60, spd: 60, spe: 50 },
    types: [ 8, 5 ],
    catchRate: 45,
    baseExp: 205,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 35,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 1, 1 ],
    ability: [ 5, 69 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       1,  2,  3,  5,  6, 10, 11, 12, 13, 14,
      15, 17, 18, 21, 22, 23, 24, 25, 26, 27,
      28, 31, 32, 34, 35, 37, 38, 39, 40, 42,
      43, 44, 45, 51, 53, 54, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
       86, 157, 164, 223, 205, 173, 196,
      203, 189,   8, 207, 214, 111,   9,
        7, 210
    ]
  },
  {
    dexid: 307,
    baseStats: { hp: 30, atk: 40, def: 55, spa: 40, spd: 55, spe: 60 },
    types: [ 1, 13 ],
    catchRate: 180,
    baseExp: 91,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 8, 8 ],
    ability: [ 74, 74 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       1,  4,  6,  8, 10, 11, 16, 17,
      18, 21, 27, 29, 30, 31, 32, 33,
      39, 42, 43, 44, 45, 54, 55, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      118, 138, 164, 223, 244, 173, 203,
      189,   8, 207, 214, 129,   9,   7
    ]
  },
  {
    dexid: 308,
    baseStats: { hp: 60, atk: 60, def: 75, spa: 60, spd: 75, spe: 80 },
    types: [ 1, 13 ],
    catchRate: 90,
    baseExp: 153,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 8, 8 ],
    ability: [ 74, 74 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       1,  4,  6,  8, 10, 11, 15, 16,
      17, 18, 21, 27, 29, 30, 31, 32,
      33, 39, 42, 43, 44, 45, 54, 55,
      56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      118, 138, 157, 164, 223, 244, 173,
      203, 189,   8, 207, 214, 129,   9,
        7
    ]
  },
  {
    dexid: 309,
    baseStats: { hp: 40, atk: 45, def: 40, spa: 65, spd: 40, spe: 65 },
    types: [ 12, 12 ],
    catchRate: 120,
    baseExp: 104,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 5, 5 ],
    ability: [ 9, 31 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       5,  6, 10, 17, 18, 21, 23,
      24, 25, 27, 32, 34, 42, 43,
      44, 45, 46, 54, 55
    ],
    tutor: [
       34,  38, 102,  86,
      164, 173, 203, 189,
      207, 214, 129
    ]
  },
  {
    dexid: 310,
    baseStats: { hp: 70, atk: 75, def: 60, spa: 105, spd: 60, spe: 105 },
    types: [ 12, 12 ],
    catchRate: 45,
    baseExp: 168,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 5, 5 ],
    ability: [ 9, 31 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       5,  6, 10, 15, 17, 18, 21,
      23, 24, 25, 27, 32, 34, 42,
      43, 44, 45, 46, 54, 55
    ],
    tutor: [
       34,  38, 102,  86,
      164, 173, 203, 189,
      207, 214, 129
    ]
  },
  {
    dexid: 311,
    baseStats: { hp: 60, atk: 50, def: 40, spa: 85, spd: 75, spe: 95 },
    types: [ 12, 12 ],
    catchRate: 200,
    baseExp: 120,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 6, 6 ],
    ability: [ 57, 57 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       6, 10, 16, 17, 18, 21, 23,
      24, 25, 27, 32, 34, 42, 43,
      44, 45, 55
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 118,  86, 164, 223, 205,
      173, 203, 189, 207, 214, 129,
      111,   9
    ]
  },
  {
    dexid: 312,
    baseStats: { hp: 60, atk: 40, def: 50, spa: 75, spd: 85, spe: 95 },
    types: [ 12, 12 ],
    catchRate: 200,
    baseExp: 120,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 6, 6 ],
    ability: [ 58, 58 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       6, 10, 16, 17, 18, 21, 23,
      24, 25, 27, 32, 34, 42, 43,
      44, 45, 55
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 118,  86, 164, 223, 205,
      173, 203, 189, 207, 214, 129,
      111,   9
    ]
  },
  {
    dexid: 313,
    baseStats: { hp: 65, atk: 73, def: 55, spa: 47, spd: 75, spe: 85 },
    types: [ 6, 6 ],
    catchRate: 150,
    baseExp: 146,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 0,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 1,
    eggGroups: [ 3, 8 ],
    ability: [ 35, 68 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       1,  3,  6, 10, 11, 16, 17, 18,
      19, 21, 22, 24, 25, 27, 30, 31,
      32, 34, 40, 42, 43, 44, 45, 46,
      55
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 118,  86, 164, 223, 244,
      173, 203, 189,   8, 207, 214,
      129,   9
    ]
  },
  {
    dexid: 314,
    baseStats: { hp: 65, atk: 47, def: 55, spa: 73, spd: 75, spe: 85 },
    types: [ 6, 6 ],
    catchRate: 150,
    baseExp: 146,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 254,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 2,
    eggGroups: [ 3, 8 ],
    ability: [ 12, 12 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       1,  3,  6, 10, 11, 16, 17, 18,
      19, 21, 22, 24, 25, 27, 30, 31,
      32, 34, 40, 42, 43, 44, 45, 46,
      55
    ],
    tutor: [
        5,  25,  34,  38,  68,  69,
      102, 118,  86, 164, 223, 244,
      173, 203, 189,   8, 207, 214,
      129,   9
    ]
  },
  {
    dexid: 315,
    baseStats: { hp: 50, atk: 60, def: 45, spa: 100, spd: 80, spe: 65 },
    types: [ 11, 3 ],
    catchRate: 150,
    baseExp: 152,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 6, 7 ],
    ability: [ 30, 38 ],
    escapeRate: 0,
    color: 3,
    noFlip: true,
    tmhm: [
       6,  9, 10, 11, 17, 19, 21,
      22, 27, 30, 32, 36, 42, 43,
      44, 45, 51, 55
    ],
    tutor: [
       14,  34,  38, 102, 164,
      244, 173, 203, 189, 207,
      214, 129, 210
    ]
  },
  {
    dexid: 316,
    baseStats: { hp: 70, atk: 43, def: 53, spa: 43, spd: 53, spe: 40 },
    types: [ 3, 3 ],
    catchRate: 225,
    baseExp: 75,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 2,
    eggGroups: [ 11, 11 ],
    ability: [ 64, 60 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       3,  6,  9, 10, 11, 13, 17, 18,
      19, 21, 22, 27, 30, 32, 34, 36,
      42, 43, 44, 45, 49, 54, 56
    ],
    tutor: [
       34,  38,  68, 102, 138, 153,
      164, 223, 205, 173, 203, 189,
        8, 207, 214, 111,   9,   7
    ]
  },
  {
    dexid: 317,
    baseStats: { hp: 100, atk: 73, def: 83, spa: 73, spd: 83, spe: 55 },
    types: [ 3, 3 ],
    catchRate: 75,
    baseExp: 168,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 2,
    eggGroups: [ 11, 11 ],
    ability: [ 64, 60 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       3,  6,  9, 10, 11, 13, 15, 17,
      18, 19, 21, 22, 27, 30, 32, 34,
      36, 42, 43, 44, 45, 49, 54, 56
    ],
    tutor: [
       34,  38,  68, 102, 138, 153,
      164, 223, 205, 173, 203, 189,
        8, 207, 214, 111,   9,   7
    ]
  },
  {
    dexid: 318,
    baseStats: { hp: 45, atk: 90, def: 20, spa: 65, spd: 20, spe: 65 },
    types: [ 10, 16 ],
    catchRate: 225,
    baseExp: 88,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 12, 12 ],
    ability: [ 24, 24 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 12, 13, 14,
      17, 18, 21, 27, 32, 41, 42,
      43, 44, 45, 46, 53, 57, 58
    ],
    tutor: [
       38, 102, 164, 173,
      196, 203, 189, 207,
      214, 129, 210
    ]
  },
  {
    dexid: 319,
    baseStats: { hp: 70, atk: 120, def: 40, spa: 95, spd: 40, spe: 95 },
    types: [ 10, 16 ],
    catchRate: 60,
    baseExp: 175,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 12, 12 ],
    ability: [ 24, 24 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  5,  6,  7, 10, 12, 13, 14,
      15, 17, 18, 21, 26, 27, 32, 39,
      41, 42, 43, 44, 45, 46, 53, 54,
      56, 57, 58
    ],
    tutor: [
       38, 102, 164, 173,
      196, 203, 189, 207,
      214, 129, 210
    ]
  },
  {
    dexid: 320,
    baseStats: { hp: 130, atk: 70, def: 35, spa: 70, spd: 35, spe: 60 },
    types: [ 10, 10 ],
    catchRate: 125,
    baseExp: 137,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 40,
    baseFriendship: 70,
    growth: 2,
    eggGroups: [ 5, 12 ],
    ability: [ 41, 12 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  5,  6,  7, 10, 13, 14, 17,
      18, 21, 26, 27, 32, 39, 42, 43,
      44, 45, 53, 54, 56, 57, 58
    ],
    tutor: [
       34,  38, 102, 164,
      205, 173, 196, 203,
      207, 214, 111
    ]
  },
  {
    dexid: 321,
    baseStats: { hp: 170, atk: 90, def: 45, spa: 90, spd: 45, spe: 60 },
    types: [ 10, 10 ],
    catchRate: 60,
    baseExp: 206,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 40,
    baseFriendship: 70,
    growth: 2,
    eggGroups: [ 5, 12 ],
    ability: [ 41, 12 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  5,  6,  7, 10, 13, 14, 15,
      17, 18, 21, 26, 27, 32, 39, 42,
      43, 44, 45, 53, 54, 56, 57, 58
    ],
    tutor: [
       34,  38, 102, 164,
      205, 173, 196, 203,
      207, 214, 111
    ]
  },
  {
    dexid: 322,
    baseStats: { hp: 60, atk: 60, def: 40, spa: 65, spd: 45, spe: 35 },
    types: [ 9, 4 ],
    catchRate: 255,
    baseExp: 88,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 12, 12 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       6, 10, 11, 17, 21, 26, 27,
      28, 32, 35, 37, 38, 39, 42,
      43, 44, 45, 50, 54, 56
    ],
    tutor: [
       34,  38, 102, 157,
      164, 205, 173, 203,
      189, 207, 214, 111
    ]
  },
  {
    dexid: 323,
    baseStats: { hp: 70, atk: 100, def: 70, spa: 105, spd: 75, spe: 40 },
    types: [ 9, 4 ],
    catchRate: 150,
    baseExp: 175,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 40, 40 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       5,  6, 10, 11, 15, 17, 21,
      26, 27, 28, 32, 35, 37, 38,
      39, 42, 43, 44, 45, 50, 54,
      56
    ],
    tutor: [
       34,  38, 102, 153,
      157, 164, 205, 173,
      203, 189, 207, 214,
      111
    ]
  },
  {
    dexid: 324,
    baseStats: { hp: 70, atk: 85, def: 140, spa: 85, spd: 70, spe: 20 },
    types: [ 9, 9 ],
    catchRate: 90,
    baseExp: 161,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 5, 5 ],
    ability: [ 73, 73 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       6, 10, 11, 17, 21, 23, 27,
      32, 35, 36, 38, 42, 43, 44,
      45, 50, 54, 56
    ],
    tutor: [
       34,  38, 102, 153,
      157, 164, 173, 203,
      189, 207, 214
    ]
  },
  {
    dexid: 325,
    baseStats: { hp: 60, atk: 25, def: 35, spa: 70, spd: 80, spe: 60 },
    types: [ 13, 13 ],
    catchRate: 255,
    baseExp: 89,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 4,
    eggGroups: [ 5, 5 ],
    ability: [ 47, 20 ],
    escapeRate: 0,
    color: 4,
    noFlip: false,
    tmhm: [
       4,  6, 10, 11, 12, 16, 17, 18,
      21, 23, 27, 29, 30, 32, 33, 34,
      41, 42, 43, 44, 45, 46, 48, 49,
      55
    ],
    tutor: [
       34,  38, 102, 138,
      164, 244, 173, 196,
      203, 207, 214, 129
    ]
  },
  {
    dexid: 326,
    baseStats: { hp: 80, atk: 45, def: 65, spa: 90, spd: 110, spe: 80 },
    types: [ 13, 13 ],
    catchRate: 60,
    baseExp: 164,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 4,
    eggGroups: [ 5, 5 ],
    ability: [ 47, 20 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       1,  4,  6, 10, 11, 12, 15, 16,
      17, 18, 21, 23, 27, 29, 30, 32,
      33, 34, 41, 42, 43, 44, 45, 46,
      48, 49, 55
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      138, 164, 223, 244, 173, 196, 203,
      189,   8, 207, 214, 129,   9,   7
    ]
  },
  {
    dexid: 327,
    baseStats: { hp: 60, atk: 60, def: 60, spa: 60, spd: 60, spe: 60 },
    types: [ 0, 0 ],
    catchRate: 255,
    baseExp: 85,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 4,
    eggGroups: [ 5, 8 ],
    ability: [ 20, 20 ],
    escapeRate: 0,
    color: 5,
    noFlip: true,
    tmhm: [
       1,  3,  4,  6, 10, 11, 17, 18,
      20, 21, 27, 28, 29, 30, 31, 32,
      34, 39, 42, 43, 44, 45, 46, 48,
      49, 54, 55, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      118, 138, 157, 164, 223, 205, 244,
      173, 196, 203, 189,   8, 207, 214,
      129, 111,   9,   7
    ]
  },
  {
    dexid: 328,
    baseStats: { hp: 45, atk: 100, def: 45, spa: 45, spd: 45, spe: 10 },
    types: [ 4, 4 ],
    catchRate: 255,
    baseExp: 73,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 3, 3 ],
    ability: [ 52, 71 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       6, 10, 11, 15, 17, 19, 21,
      22, 26, 27, 28, 32, 37, 39,
      42, 43, 44, 45, 54, 56
    ],
    tutor: [
       34,  38, 102, 157,
      164, 173, 203, 189,
      207, 214
    ]
  },
  {
    dexid: 329,
    baseStats: { hp: 50, atk: 70, def: 50, spa: 50, spd: 50, spe: 70 },
    types: [ 4, 15 ],
    catchRate: 120,
    baseExp: 126,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 3, 3 ],
    ability: [ 26, 26 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       6, 10, 11, 15, 17, 19, 21,
      22, 26, 27, 28, 32, 37, 39,
      42, 43, 44, 45, 47, 52, 54,
      56
    ],
    tutor: [
       34,  38, 102, 157,
      164, 173, 203, 189,
      207, 214, 129
    ]
  },
  {
    dexid: 330,
    baseStats: { hp: 80, atk: 100, def: 80, spa: 80, spd: 80, spe: 100 },
    types: [ 4, 15 ],
    catchRate: 45,
    baseExp: 197,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 3, 3 ],
    ability: [ 26, 26 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       2,  6, 10, 11, 15, 17, 19, 21,
      22, 23, 26, 27, 28, 32, 35, 37,
      38, 39, 42, 43, 44, 45, 47, 52,
      54, 56
    ],
    tutor: [
       34,  38, 102, 157, 164,
      173, 203, 189, 207, 214,
      129,   7, 210
    ]
  },
  {
    dexid: 331,
    baseStats: { hp: 50, atk: 85, def: 40, spa: 85, spd: 40, spe: 35 },
    types: [ 11, 11 ],
    catchRate: 190,
    baseExp: 97,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 35,
    growth: 3,
    eggGroups: [ 7, 8 ],
    ability: [ 8, 8 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       1,  6,  9, 10, 11, 17, 19,
      21, 22, 27, 32, 37, 42, 43,
      44, 45, 51, 55
    ],
    tutor: [
        5,  14,  34,  38,  68,  69,
      102, 164, 223, 173, 203, 189,
      207, 214,   9, 210
    ]
  },
  {
    dexid: 332,
    baseStats: { hp: 70, atk: 115, def: 60, spa: 115, spd: 60, spe: 55 },
    types: [ 11, 16 ],
    catchRate: 60,
    baseExp: 177,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 35,
    growth: 3,
    eggGroups: [ 7, 8 ],
    ability: [ 8, 8 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       1,  6,  9, 10, 11, 15, 17,
      19, 21, 22, 27, 32, 37, 42,
      43, 44, 45, 51, 54, 55
    ],
    tutor: [
        5,  14,  25,  34,  38,  68,
       69, 102, 164, 223, 173, 203,
      189, 207, 214,   9, 210
    ]
  },
  {
    dexid: 333,
    baseStats: { hp: 45, atk: 40, def: 60, spa: 40, spd: 75, spe: 50 },
    types: [ 0, 2 ],
    catchRate: 255,
    baseExp: 74,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 1,
    eggGroups: [ 4, 14 ],
    ability: [ 30, 30 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       6, 10, 11, 13, 17, 18, 20,
      21, 22, 27, 32, 40, 42, 43,
      44, 45, 46, 47, 52
    ],
    tutor: [
       34,  38, 102, 138,
      164, 244, 173, 203,
      189, 207, 214, 129
    ]
  },
  {
    dexid: 334,
    baseStats: { hp: 75, atk: 70, def: 90, spa: 70, spd: 105, spe: 80 },
    types: [ 15, 2 ],
    catchRate: 45,
    baseExp: 188,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 1,
    eggGroups: [ 4, 14 ],
    ability: [ 30, 30 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       2,  5,  6, 10, 11, 13, 15, 17,
      18, 20, 21, 22, 23, 26, 27, 32,
      35, 38, 40, 42, 43, 44, 45, 46,
      47, 52, 56
    ],
    tutor: [
       34,  38, 102, 138,
      164, 244, 173, 203,
      189, 207, 214, 129
    ]
  },
  {
    dexid: 335,
    baseStats: { hp: 73, atk: 115, def: 60, spa: 60, spd: 60, spe: 90 },
    types: [ 0, 0 ],
    catchRate: 90,
    baseExp: 165,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 1,
    eggGroups: [ 5, 5 ],
    ability: [ 17, 17 ],
    escapeRate: 0,
    color: 8,
    noFlip: true,
    tmhm: [
       1,  3,  5,  6, 10, 11, 12, 13, 14,
      17, 18, 19, 21, 22, 23, 24, 25, 27,
      28, 30, 31, 32, 34, 35, 38, 40, 42,
      43, 44, 45, 46, 54, 56
    ],
    tutor: [
        5,  14,  25,  34,  38,  68,  69,
      102,  86, 157, 164, 223, 205, 173,
      196, 203, 189,   8, 207, 214, 129,
      111,   9,   7, 210
    ]
  },
  {
    dexid: 336,
    baseStats: { hp: 73, atk: 100, def: 60, spa: 100, spd: 60, spe: 65 },
    types: [ 3, 3 ],
    catchRate: 90,
    baseExp: 165,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 2,
    eggGroups: [ 5, 14 ],
    ability: [ 61, 61 ],
    escapeRate: 0,
    color: 4,
    noFlip: true,
    tmhm: [
       6, 10, 11, 12, 17, 18, 19, 21,
      23, 26, 27, 28, 32, 35, 36, 42,
      43, 44, 45, 46, 49, 54, 56
    ],
    tutor: [
       34,  38, 102, 164,
      173, 203, 189, 207,
      214, 129, 210
    ]
  },
  {
    dexid: 337,
    baseStats: { hp: 70, atk: 55, def: 65, spa: 95, spd: 85, spe: 70 },
    types: [ 5, 13 ],
    catchRate: 45,
    baseExp: 150,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 25,
    baseFriendship: 70,
    growth: 4,
    eggGroups: [ 10, 10 ],
    ability: [ 26, 26 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       4,  6, 10, 13, 15, 16, 17, 18,
      20, 21, 26, 27, 29, 30, 32, 33,
      37, 39, 42, 43, 44, 48, 55
    ],
    tutor: [
       34,  38, 102, 138, 153,
      157, 164, 205, 244, 173,
      203, 207, 214, 129, 111
    ]
  },
  {
    dexid: 338,
    baseStats: { hp: 70, atk: 95, def: 85, spa: 55, spd: 65, spe: 70 },
    types: [ 5, 13 ],
    catchRate: 45,
    baseExp: 150,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 25,
    baseFriendship: 70,
    growth: 4,
    eggGroups: [ 10, 10 ],
    ability: [ 26, 26 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       4,  6, 10, 11, 15, 16, 17, 20,
      21, 22, 26, 27, 29, 30, 32, 33,
      35, 37, 38, 39, 42, 43, 44, 48,
      50, 55
    ],
    tutor: [
       34,  38, 102, 138, 153,
      157, 164, 205, 244, 173,
      203, 207, 214, 129, 111
    ]
  },
  {
    dexid: 339,
    baseStats: { hp: 50, atk: 48, def: 43, spa: 46, spd: 41, spe: 60 },
    types: [ 10, 4 ],
    catchRate: 190,
    baseExp: 92,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 12, 12 ],
    ability: [ 12, 12 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 17,
      18, 21, 26, 27, 32, 37, 39,
      42, 43, 44, 45, 53, 57, 58
    ],
    tutor: [
       38, 102, 164, 173,
      196, 203, 189, 207,
      214
    ]
  },
  {
    dexid: 340,
    baseStats: { hp: 110, atk: 78, def: 73, spa: 76, spd: 71, spe: 60 },
    types: [ 10, 4 ],
    catchRate: 75,
    baseExp: 158,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 12, 12 ],
    ability: [ 12, 12 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 15, 17,
      18, 21, 26, 27, 32, 37, 39, 42,
      43, 44, 45, 53, 54, 56, 57, 58
    ],
    tutor: [
       38, 102, 157, 164,
      173, 196, 203, 189,
      207, 214
    ]
  },
  {
    dexid: 341,
    baseStats: { hp: 43, atk: 80, def: 65, spa: 50, spd: 35, spe: 35 },
    types: [ 10, 10 ],
    catchRate: 205,
    baseExp: 111,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 2,
    eggGroups: [ 2, 9 ],
    ability: [ 52, 75 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 12, 13, 14, 17,
      18, 21, 27, 28, 31, 32, 36, 39,
      40, 42, 43, 44, 45, 51, 53, 54,
      56, 57
    ],
    tutor: [
       14,  34,  38,  68, 102,
      164, 173, 196, 203, 189,
      207, 214, 210
    ]
  },
  {
    dexid: 342,
    baseStats: { hp: 63, atk: 120, def: 85, spa: 90, spd: 55, spe: 55 },
    types: [ 10, 16 ],
    catchRate: 155,
    baseExp: 161,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 15,
    baseFriendship: 70,
    growth: 2,
    eggGroups: [ 2, 9 ],
    ability: [ 52, 75 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 12, 13, 14, 15,
      17, 18, 21, 27, 28, 31, 32, 36,
      39, 40, 42, 43, 44, 45, 51, 53,
      54, 56, 57, 58
    ],
    tutor: [
       14,  34,  38,  68, 102,
      164, 173, 196, 203, 189,
      207, 214, 129, 210
    ]
  },
  {
    dexid: 343,
    baseStats: { hp: 40, atk: 40, def: 55, spa: 40, spd: 70, spe: 55 },
    types: [ 4, 13 ],
    catchRate: 255,
    baseExp: 58,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 10, 10 ],
    ability: [ 26, 26 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       6, 10, 11, 13, 16, 17, 18, 21,
      22, 26, 27, 28, 29, 30, 32, 33,
      37, 39, 42, 43, 44, 48, 55
    ],
    tutor: [
       38, 102, 138, 153,
      157, 164, 244, 173,
      203, 189, 207, 214
    ]
  },
  {
    dexid: 344,
    baseStats: { hp: 60, atk: 70, def: 105, spa: 70, spd: 120, spe: 75 },
    types: [ 4, 13 ],
    catchRate: 90,
    baseExp: 189,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 10, 10 ],
    ability: [ 26, 26 ],
    escapeRate: 0,
    color: 4,
    noFlip: false,
    tmhm: [
       6, 10, 11, 13, 15, 16, 17, 18,
      21, 22, 26, 27, 28, 29, 30, 32,
      33, 37, 39, 42, 43, 44, 48, 54,
      55, 56
    ],
    tutor: [
       38, 102, 138, 153,
      157, 164, 244, 173,
      203, 189, 207, 214
    ]
  },
  {
    dexid: 345,
    baseStats: { hp: 66, atk: 41, def: 77, spa: 61, spd: 87, spe: 23 },
    types: [ 5, 11 ],
    catchRate: 45,
    baseExp: 121,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 30,
    baseFriendship: 70,
    growth: 1,
    eggGroups: [ 9, 9 ],
    ability: [ 21, 21 ],
    escapeRate: 0,
    color: 6,
    noFlip: false,
    tmhm: [
       6,  9, 10, 11, 17, 19,
      21, 22, 27, 32, 36, 37,
      42, 43, 44, 45
    ],
    tutor: [
       34,  38, 102, 157,
      164, 244, 173, 203,
      189, 207, 214
    ]
  },
  {
    dexid: 346,
    baseStats: { hp: 86, atk: 81, def: 97, spa: 81, spd: 107, spe: 43 },
    types: [ 5, 11 ],
    catchRate: 45,
    baseExp: 201,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 30,
    baseFriendship: 70,
    growth: 1,
    eggGroups: [ 9, 9 ],
    ability: [ 21, 21 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       6,  9, 10, 11, 15, 17, 19,
      21, 22, 26, 27, 32, 36, 37,
      39, 42, 43, 44, 45, 54, 56
    ],
    tutor: [
       34,  38, 102, 157,
      164, 244, 173, 203,
      189, 207, 214
    ]
  },
  {
    dexid: 347,
    baseStats: { hp: 45, atk: 95, def: 50, spa: 40, spd: 50, spe: 75 },
    types: [ 5, 6 ],
    catchRate: 45,
    baseExp: 119,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 30,
    baseFriendship: 70,
    growth: 1,
    eggGroups: [ 9, 9 ],
    ability: [ 4, 4 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       3,  6, 10, 11, 17, 21, 27,
      28, 31, 32, 37, 39, 40, 42,
      43, 44, 45, 51, 56
    ],
    tutor: [
       14,  34,  38, 102,
      157, 164, 173, 203,
      189, 207, 214, 210
    ]
  },
  {
    dexid: 348,
    baseStats: { hp: 75, atk: 125, def: 100, spa: 70, spd: 80, spe: 45 },
    types: [ 5, 6 ],
    catchRate: 45,
    baseExp: 200,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 30,
    baseFriendship: 70,
    growth: 1,
    eggGroups: [ 9, 9 ],
    ability: [ 4, 4 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       3,  6, 10, 11, 15, 17, 21, 23,
      26, 27, 28, 31, 32, 37, 39, 40,
      42, 43, 44, 45, 51, 54, 56
    ],
    tutor: [
       14,  34,  38,  69, 102,
      157, 164, 173, 203, 189,
      207, 214, 210
    ]
  },
  {
    dexid: 349,
    baseStats: { hp: 20, atk: 15, def: 20, spa: 10, spd: 55, spe: 80 },
    types: [ 10, 10 ],
    catchRate: 255,
    baseExp: 61,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 1,
    eggGroups: [ 2, 14 ],
    ability: [ 33, 33 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 17,
      18, 21, 27, 32, 42, 43, 44,
      45, 53, 57, 58
    ],
    tutor: [
       38, 102, 164, 173,
      196, 203, 207, 214,
      129
    ]
  },
  {
    dexid: 350,
    baseStats: { hp: 95, atk: 60, def: 79, spa: 100, spd: 125, spe: 81 },
    types: [ 10, 10 ],
    catchRate: 60,
    baseExp: 213,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 1,
    eggGroups: [ 2, 14 ],
    ability: [ 63, 63 ],
    escapeRate: 0,
    color: 9,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 15,
      17, 18, 20, 21, 23, 27, 32,
      42, 43, 44, 45, 53, 57, 58
    ],
    tutor: [
       34,  38, 102, 164,
      244, 173, 196, 203,
      189, 207, 214, 129
    ]
  },
  {
    dexid: 351,
    baseStats: { hp: 70, atk: 70, def: 70, spa: 70, spd: 70, spe: 70 },
    types: [ 0, 0 ],
    catchRate: 45,
    baseExp: 145,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 25,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 6, 11 ],
    ability: [ 59, 59 ],
    escapeRate: 0,
    color: 8,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 11, 13, 14, 17,
      18, 21, 22, 24, 25, 27, 30, 32,
      34, 35, 37, 38, 42, 43, 44, 45,
      46, 55
    ],
    tutor: [
       34,  38, 102,  86, 164,
      244, 173, 196, 203, 207,
      214, 129, 111
    ]
  },
  {
    dexid: 352,
    baseStats: { hp: 60, atk: 90, def: 70, spa: 60, spd: 120, spe: 40 },
    types: [ 0, 0 ],
    catchRate: 200,
    baseExp: 132,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 5, 5 ],
    ability: [ 16, 16 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       1,  3,  6, 10, 11, 13, 14, 17, 18,
      21, 22, 23, 24, 25, 27, 28, 30, 31,
      32, 34, 35, 38, 39, 40, 42, 43, 44,
      45, 46, 48, 49, 51, 54, 55, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      118,  86, 157, 164, 223, 205, 244,
      173, 196, 203, 189,   8, 207, 214,
      129, 111,   9,   7, 210
    ]
  },
  {
    dexid: 353,
    baseStats: { hp: 44, atk: 75, def: 35, spa: 63, spd: 33, spe: 45 },
    types: [ 7, 7 ],
    catchRate: 225,
    baseExp: 97,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 25,
    baseFriendship: 35,
    growth: 4,
    eggGroups: [ 11, 11 ],
    ability: [ 15, 15 ],
    escapeRate: 0,
    color: 4,
    noFlip: false,
    tmhm: [
       4,  6, 10, 11, 12, 17, 18, 21,
      24, 25, 27, 29, 30, 32, 34, 41,
      42, 43, 44, 45, 46, 48, 49, 55
    ],
    tutor: [
       34,  38, 102, 138,
       86, 164, 244, 173,
      196, 203, 207, 214
    ]
  },
  {
    dexid: 354,
    baseStats: { hp: 64, atk: 115, def: 65, spa: 83, spd: 63, spe: 65 },
    types: [ 7, 7 ],
    catchRate: 45,
    baseExp: 179,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 25,
    baseFriendship: 35,
    growth: 4,
    eggGroups: [ 11, 11 ],
    ability: [ 15, 15 ],
    escapeRate: 0,
    color: 4,
    noFlip: false,
    tmhm: [
       4,  6, 10, 11, 12, 15, 17, 18,
      21, 24, 25, 27, 29, 30, 32, 34,
      41, 42, 43, 44, 45, 46, 48, 49,
      55
    ],
    tutor: [
       34,  38, 102, 118, 138,
       86, 164, 244, 173, 196,
      203, 189, 207, 214
    ]
  },
  {
    dexid: 355,
    baseStats: { hp: 20, atk: 40, def: 90, spa: 30, spd: 90, spe: 25 },
    types: [ 7, 7 ],
    catchRate: 190,
    baseExp: 97,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 25,
    baseFriendship: 35,
    growth: 4,
    eggGroups: [ 11, 11 ],
    ability: [ 26, 26 ],
    escapeRate: 0,
    color: 4,
    noFlip: false,
    tmhm: [
       4,  6, 10, 11, 12, 13, 14, 17,
      18, 21, 27, 29, 30, 32, 41, 42,
      43, 44, 45, 46, 48, 49, 55
    ],
    tutor: [
       34,  38, 102, 138,
      164, 244, 173, 196,
      203, 207, 214
    ]
  },
  {
    dexid: 356,
    baseStats: { hp: 40, atk: 70, def: 130, spa: 60, spd: 130, spe: 25 },
    types: [ 7, 7 ],
    catchRate: 90,
    baseExp: 179,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 25,
    baseFriendship: 35,
    growth: 4,
    eggGroups: [ 11, 11 ],
    ability: [ 46, 46 ],
    escapeRate: 0,
    color: 4,
    noFlip: false,
    tmhm: [
       1,  4,  6, 10, 11, 12, 13, 14, 15,
      17, 18, 21, 26, 27, 29, 30, 32, 39,
      41, 42, 43, 44, 45, 46, 48, 49, 54,
      55, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
      118, 138, 157, 164, 223, 244, 173,
      196, 203, 189,   8, 207, 214,   9,
        7
    ]
  },
  {
    dexid: 357,
    baseStats: { hp: 99, atk: 68, def: 83, spa: 72, spd: 87, spe: 51 },
    types: [ 11, 2 ],
    catchRate: 200,
    baseExp: 169,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 25,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 1, 7 ],
    ability: [ 34, 34 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       5,  6,  9, 10, 11, 15, 17, 19,
      20, 21, 22, 26, 27, 32, 40, 42,
      43, 44, 45, 47, 51, 52, 54, 55,
      56
    ],
    tutor: [
       14,  34,  38, 102,
      164, 173, 203, 189,
      207, 214, 210
    ]
  },
  {
    dexid: 358,
    baseStats: { hp: 65, atk: 50, def: 70, spa: 95, spd: 80, spe: 65 },
    types: [ 13, 13 ],
    catchRate: 45,
    baseExp: 147,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 25,
    baseFriendship: 70,
    growth: 4,
    eggGroups: [ 11, 11 ],
    ability: [ 26, 26 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       4,  6, 10, 11, 12, 16, 17, 18,
      20, 21, 27, 29, 30, 32, 33, 34,
      41, 42, 43, 44, 45, 48, 49, 55
    ],
    tutor: [
       38, 102, 138, 164,
      205, 244, 173, 196,
      203, 207, 214, 111
    ]
  },
  {
    dexid: 359,
    baseStats: { hp: 65, atk: 130, def: 60, spa: 75, spd: 60, spe: 75 },
    types: [ 16, 16 ],
    catchRate: 30,
    baseExp: 174,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 25,
    baseFriendship: 35,
    growth: 3,
    eggGroups: [ 5, 5 ],
    ability: [ 46, 46 ],
    escapeRate: 0,
    color: 8,
    noFlip: true,
    tmhm: [
       3,  4,  6,  7, 10, 11, 12, 13, 14,
      15, 17, 18, 21, 23, 24, 25, 27, 30,
      32, 34, 35, 37, 38, 40, 41, 42, 43,
      44, 45, 46, 49, 51, 54, 55, 56
    ],
    tutor: [
       14,  34,  38,  68, 102, 138,
       86, 157, 164, 244, 173, 196,
      203, 189, 207, 214, 129, 210
    ]
  },
  {
    dexid: 360,
    baseStats: { hp: 95, atk: 23, def: 48, spa: 23, spd: 48, spe: 23 },
    types: [ 13, 13 ],
    catchRate: 125,
    baseExp: 44,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 15, 15 ],
    ability: [ 23, 23 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [],
    tutor: []
  },
  {
    dexid: 361,
    baseStats: { hp: 50, atk: 50, def: 50, spa: 50, spd: 50, spe: 50 },
    types: [ 14, 14 ],
    catchRate: 190,
    baseExp: 74,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 6, 10 ],
    ability: [ 39, 39 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 16,
      17, 18, 20, 21, 27, 30, 32,
      42, 43, 44, 45, 55
    ],
    tutor: [
       34,  38, 102, 164,
      173, 196, 203, 207,
      214
    ]
  },
  {
    dexid: 362,
    baseStats: { hp: 80, atk: 80, def: 80, spa: 80, spd: 80, spe: 80 },
    types: [ 14, 14 ],
    catchRate: 75,
    baseExp: 187,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 0,
    eggGroups: [ 6, 10 ],
    ability: [ 39, 39 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 12, 13, 14, 15,
      16, 17, 18, 20, 21, 26, 27, 30,
      32, 41, 42, 43, 44, 45, 55
    ],
    tutor: [
       34,  38, 102, 153,
      164, 205, 173, 196,
      203, 207, 214, 111
    ]
  },
  {
    dexid: 363,
    baseStats: { hp: 70, atk: 40, def: 50, spa: 55, spd: 50, spe: 25 },
    types: [ 14, 10 ],
    catchRate: 255,
    baseExp: 75,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 2, 5 ],
    ability: [ 47, 47 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 17, 18,
      21, 23, 26, 27, 32, 39, 42, 43,
      44, 45, 53, 54, 56, 57, 58
    ],
    tutor: [
       34,  38, 102, 157,
      164, 205, 173, 196,
      203, 189, 207, 214,
      111
    ]
  },
  {
    dexid: 364,
    baseStats: { hp: 90, atk: 60, def: 70, spa: 75, spd: 70, spe: 45 },
    types: [ 14, 10 ],
    catchRate: 120,
    baseExp: 128,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 2, 5 ],
    ability: [ 47, 47 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  5,  6,  7, 10, 13, 14, 17,
      18, 21, 23, 26, 27, 32, 39, 42,
      43, 44, 45, 53, 54, 56, 57, 58
    ],
    tutor: [
       34,  38, 102, 157,
      164, 205, 173, 196,
      203, 189, 207, 214,
      111
    ]
  },
  {
    dexid: 365,
    baseStats: { hp: 110, atk: 80, def: 90, spa: 95, spd: 90, spe: 65 },
    types: [ 14, 10 ],
    catchRate: 45,
    baseExp: 192,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 3,
    eggGroups: [ 2, 5 ],
    ability: [ 47, 47 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  5,  6,  7, 10, 13, 14, 15,
      17, 18, 21, 23, 26, 27, 32, 39,
      42, 43, 44, 45, 53, 54, 56, 57,
      58
    ],
    tutor: [
       34,  38, 102, 157,
      164, 205, 173, 196,
      203, 189, 207, 214,
      111
    ]
  },
  {
    dexid: 366,
    baseStats: { hp: 35, atk: 64, def: 85, spa: 74, spd: 55, spe: 32 },
    types: [ 10, 10 ],
    catchRate: 255,
    baseExp: 142,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 1,
    eggGroups: [ 2, 2 ],
    ability: [ 75, 75 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 17,
      18, 21, 27, 32, 42, 43, 44,
      45, 53, 57, 58
    ],
    tutor: [
       34,  38, 102, 164,
      173, 196, 203, 207,
      214
    ]
  },
  {
    dexid: 367,
    baseStats: { hp: 55, atk: 104, def: 105, spa: 94, spd: 75, spe: 52 },
    types: [ 10, 10 ],
    catchRate: 60,
    baseExp: 178,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 1,
    eggGroups: [ 2, 2 ],
    ability: [ 33, 33 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 15,
      17, 18, 21, 27, 32, 39, 42,
      43, 44, 45, 49, 53, 57, 58
    ],
    tutor: [
       34,  38, 102, 164,
      173, 196, 203, 189,
      207, 214, 129
    ]
  },
  {
    dexid: 368,
    baseStats: { hp: 55, atk: 84, def: 105, spa: 114, spd: 75, spe: 52 },
    types: [ 10, 10 ],
    catchRate: 60,
    baseExp: 178,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 1,
    eggGroups: [ 2, 2 ],
    ability: [ 33, 33 ],
    escapeRate: 0,
    color: 9,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 15,
      17, 18, 20, 21, 27, 29, 30,
      32, 42, 43, 44, 45, 53, 57,
      58
    ],
    tutor: [
       34,  38, 102, 164,
      173, 196, 203, 189,
      207, 214, 129
    ]
  },
  {
    dexid: 369,
    baseStats: { hp: 100, atk: 90, def: 130, spa: 45, spd: 65, spe: 55 },
    types: [ 10, 5 ],
    catchRate: 25,
    baseExp: 198,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 31,
    hatchCycles: 40,
    baseFriendship: 70,
    growth: 5,
    eggGroups: [ 2, 12 ],
    ability: [ 33, 69 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       3,  4,  6,  7, 10, 13, 14, 15,
      17, 18, 20, 21, 26, 27, 32, 37,
      39, 42, 43, 44, 45, 53, 56, 57,
      58
    ],
    tutor: [
       34,  38, 102, 157,
      164, 244, 173, 196,
      203, 189, 207, 214
    ]
  },
  {
    dexid: 370,
    baseStats: { hp: 43, atk: 30, def: 55, spa: 40, spd: 65, spe: 97 },
    types: [ 10, 10 ],
    catchRate: 225,
    baseExp: 110,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 191,
    hatchCycles: 20,
    baseFriendship: 70,
    growth: 4,
    eggGroups: [ 12, 12 ],
    ability: [ 33, 33 ],
    escapeRate: 0,
    color: 9,
    noFlip: false,
    tmhm: [
       3,  6,  7, 10, 13, 14, 17,
      18, 20, 21, 27, 32, 42, 43,
      44, 45, 53, 57, 58
    ],
    tutor: [
       38, 102, 164, 244,
      173, 196, 203, 207,
      214, 129
    ]
  },
  {
    dexid: 371,
    baseStats: { hp: 45, atk: 75, def: 60, spa: 40, spd: 30, spe: 50 },
    types: [ 15, 15 ],
    catchRate: 45,
    baseExp: 89,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 40,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 14, 14 ],
    ability: [ 69, 69 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       2,  5,  6, 10, 11, 17, 18,
      21, 27, 31, 32, 35, 38, 39,
      40, 42, 43, 44, 45, 51, 54,
      56
    ],
    tutor: [
       34,  38, 102, 157,
      164, 173, 203, 189,
      207, 214, 210
    ]
  },
  {
    dexid: 372,
    baseStats: { hp: 65, atk: 95, def: 100, spa: 60, spd: 50, spe: 50 },
    types: [ 15, 15 ],
    catchRate: 45,
    baseExp: 144,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 40,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 14, 14 ],
    ability: [ 69, 69 ],
    escapeRate: 0,
    color: 8,
    noFlip: false,
    tmhm: [
       2,  5,  6, 10, 11, 17, 18,
      21, 27, 31, 32, 35, 38, 39,
      40, 42, 43, 44, 45, 51, 54,
      56
    ],
    tutor: [
       34,  38, 102, 157,
      164, 205, 173, 203,
      189, 207, 214, 111,
      210
    ]
  },
  {
    dexid: 373,
    baseStats: { hp: 95, atk: 135, def: 80, spa: 110, spd: 80, spe: 100 },
    types: [ 15, 2 ],
    catchRate: 45,
    baseExp: 218,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 127,
    hatchCycles: 40,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 14, 14 ],
    ability: [ 22, 22 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       2,  5,  6, 10, 11, 15, 17, 18,
      21, 23, 26, 27, 31, 32, 35, 38,
      39, 40, 42, 43, 44, 45, 47, 51,
      52, 54, 56
    ],
    tutor: [
       34,  38, 102, 157, 164,
      205, 173, 203, 189, 207,
      214, 129, 111, 210
    ]
  },
  {
    dexid: 374,
    baseStats: { hp: 40, atk: 55, def: 80, spa: 35, spd: 60, spe: 30 },
    types: [ 8, 13 ],
    catchRate: 3,
    baseExp: 103,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 40,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 10, 10 ],
    ability: [ 29, 29 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [],
    tutor: []
  },
  {
    dexid: 375,
    baseStats: { hp: 60, atk: 75, def: 100, spa: 55, spd: 80, spe: 50 },
    types: [ 8, 13 ],
    catchRate: 3,
    baseExp: 153,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 40,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 10, 10 ],
    ability: [ 29, 29 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       6, 10, 11, 15, 16, 17, 18, 21,
      26, 27, 29, 30, 31, 32, 33, 36,
      37, 39, 40, 42, 43, 44, 51, 54,
      55, 56
    ],
    tutor: [
       34,  38, 102, 153, 157, 164,
      223, 205, 244, 173, 196, 203,
      189,   8, 207, 214, 129, 111,
        9, 210
    ]
  },
  {
    dexid: 376,
    baseStats: { hp: 80, atk: 135, def: 130, spa: 95, spd: 90, spe: 70 },
    types: [ 8, 13 ],
    catchRate: 3,
    baseExp: 210,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 40,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 10, 10 ],
    ability: [ 29, 29 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       6, 10, 11, 15, 16, 17, 18, 21,
      26, 27, 29, 30, 31, 32, 33, 36,
      37, 39, 40, 42, 43, 44, 51, 54,
      55, 56
    ],
    tutor: [
       34,  38, 102, 153, 157, 164,
      223, 205, 244, 173, 196, 203,
      189,   8, 207, 214, 129, 111,
        9, 210
    ]
  },
  {
    dexid: 377,
    baseStats: { hp: 80, atk: 100, def: 200, spa: 50, spd: 100, spe: 50 },
    types: [ 5, 5 ],
    catchRate: 3,
    baseExp: 217,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 80,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 15, 15 ],
    ability: [ 29, 29 ],
    escapeRate: 0,
    color: 5,
    noFlip: false,
    tmhm: [
       1,  6, 10, 11, 15, 17, 20, 21,
      24, 25, 26, 27, 28, 31, 32, 34,
      37, 39, 42, 43, 44, 54, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
       86, 153, 157, 164, 223, 205, 244,
      173, 203, 189,   8, 207, 214, 111,
        9,   7
    ]
  },
  {
    dexid: 378,
    baseStats: { hp: 80, atk: 50, def: 100, spa: 100, spd: 200, spe: 50 },
    types: [ 14, 14 ],
    catchRate: 3,
    baseExp: 216,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 80,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 15, 15 ],
    ability: [ 29, 29 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       1,  6,  7, 10, 13, 14, 15, 17,
      18, 20, 21, 24, 25, 26, 27, 31,
      32, 34, 42, 43, 44, 54, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
       86, 153, 157, 164, 223, 205, 244,
      173, 196, 203, 189,   8, 207, 214,
      111,   9
    ]
  },
  {
    dexid: 379,
    baseStats: { hp: 80, atk: 75, def: 150, spa: 75, spd: 150, spe: 50 },
    types: [ 8, 8 ],
    catchRate: 3,
    baseExp: 215,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 80,
    baseFriendship: 35,
    growth: 5,
    eggGroups: [ 15, 15 ],
    ability: [ 29, 29 ],
    escapeRate: 0,
    color: 7,
    noFlip: false,
    tmhm: [
       1,  6, 10, 11, 15, 17, 18, 20,
      21, 24, 25, 26, 27, 31, 32, 34,
      37, 39, 40, 42, 43, 44, 54, 56
    ],
    tutor: [
        5,  25,  34,  38,  68,  69, 102,
       86, 153, 157, 164, 223, 205, 244,
      173, 203, 189,   8, 207, 214, 111,
        9
    ]
  },
  {
    dexid: 380,
    baseStats: { hp: 80, atk: 80, def: 90, spa: 110, spd: 130, spe: 110 },
    types: [ 15, 13 ],
    catchRate: 3,
    baseExp: 211,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 254,
    hatchCycles: 120,
    baseFriendship: 90,
    growth: 5,
    eggGroups: [ 15, 15 ],
    ability: [ 26, 26 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       2,  3,  4,  5,  6, 10, 11, 13, 15, 16,
      17, 18, 20, 21, 22, 24, 25, 26, 27, 29,
      30, 32, 33, 34, 37, 40, 42, 43, 44, 45,
      47, 51, 52, 53, 55, 57, 58
    ],
    tutor: [
       34,  38, 102, 138,  86,
      164, 244, 173, 196, 203,
      189, 207, 214, 129, 210
    ]
  },
  {
    dexid: 381,
    baseStats: { hp: 80, atk: 90, def: 80, spa: 130, spd: 110, spe: 110 },
    types: [ 15, 13 ],
    catchRate: 3,
    baseExp: 211,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 0,
    hatchCycles: 120,
    baseFriendship: 90,
    growth: 5,
    eggGroups: [ 15, 15 ],
    ability: [ 26, 26 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       2,  3,  4,  5,  6, 10, 11, 13, 15, 16,
      17, 18, 20, 21, 22, 24, 25, 26, 27, 29,
      30, 32, 33, 34, 37, 40, 42, 43, 44, 45,
      47, 51, 52, 53, 55, 57, 58
    ],
    tutor: [
       34,  38, 102, 138,  86,
      164, 244, 173, 196, 203,
      189, 207, 214, 129, 210
    ]
  },
  {
    dexid: 382,
    baseStats: { hp: 100, atk: 100, def: 90, spa: 150, spd: 140, spe: 90 },
    types: [ 10, 10 ],
    catchRate: 5,
    baseExp: 218,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 120,
    baseFriendship: 0,
    growth: 5,
    eggGroups: [ 15, 15 ],
    ability: [ 2, 2 ],
    escapeRate: 0,
    color: 1,
    noFlip: false,
    tmhm: [
       3,  4,  5,  6,  7, 10, 13, 14, 15,
      17, 18, 20, 21, 24, 25, 26, 27, 31,
      32, 34, 39, 42, 43, 44, 53, 54, 56,
      57, 58
    ],
    tutor: [
       34,  38, 102,  86, 157,
      164, 244, 173, 196, 203,
      189, 207, 214, 129, 111
    ]
  },
  {
    dexid: 383,
    baseStats: { hp: 100, atk: 150, def: 140, spa: 100, spd: 90, spe: 90 },
    types: [ 4, 4 ],
    catchRate: 5,
    baseExp: 218,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 120,
    baseFriendship: 0,
    growth: 5,
    eggGroups: [ 15, 15 ],
    ability: [ 70, 70 ],
    escapeRate: 0,
    color: 0,
    noFlip: false,
    tmhm: [
       2,  5,  6,  8, 10, 11, 15, 17, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 31,
      32, 34, 35, 37, 38, 39, 40, 42, 43,
      44, 50, 51, 54, 56
    ],
    tutor: [
        5,  14,  25,  34,  38,  68,  69,
      102,  86, 157, 164, 223, 205, 244,
      173, 203, 189, 207, 214, 129, 111,
        9,   7, 210
    ]
  },
  {
    dexid: 384,
    baseStats: { hp: 105, atk: 150, def: 90, spa: 150, spd: 90, spe: 95 },
    types: [ 15, 2 ],
    catchRate: 3,
    baseExp: 220,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 120,
    baseFriendship: 0,
    growth: 5,
    eggGroups: [ 15, 15 ],
    ability: [ 76, 76 ],
    escapeRate: 0,
    color: 3,
    noFlip: false,
    tmhm: [
       2,  3,  5,  6,  8, 10, 11, 13, 14,
      15, 17, 18, 21, 22, 23, 24, 25, 26,
      27, 31, 32, 34, 35, 37, 38, 40, 42,
      43, 44, 50, 52, 53, 54, 56, 57, 58
    ],
    tutor: [
       34,  38, 102,  86, 157,
      164, 244, 173, 196, 203,
      189, 207, 214, 129, 210
    ]
  },
  {
    dexid: 385,
    baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
    types: [ 8, 13 ],
    catchRate: 3,
    baseExp: 215,
    ev: { hp: 0, atk: 0, def: 0, spe: 0, spa: 0, spd: 0 },
    items: [ 0, 0 ],
    gender: 255,
    hatchCycles: 120,
    baseFriendship: 100,
    growth: 5,
    eggGroups: [ 15, 15 ],
    ability: [ 32, 32 ],
    escapeRate: 0,
    color: 2,
    noFlip: false,
    tmhm: [
       3,  4,  6, 10, 11, 15, 16, 17,
      18, 20, 21, 24, 25, 27, 29, 30,
      32, 33, 34, 37, 40, 42, 43, 44,
      48, 55
    ],
    tutor: [
       34,  38, 102, 118, 138,  86,
      164, 223, 244, 173, 196, 203,
      189,   8, 207, 214, 129, 111,
        9,   7
    ]
  },
];

export const PI_RS = [...Dex3, Deoxys.RS, { ...Egg }] as const;
export const PI_FR = [...Dex3, Deoxys.FR, { ...Egg }] as const;
export const PI_LG = [...Dex3, Deoxys.LG, { ...Egg }] as const;
export const PI_E = [...Dex3, Deoxys.E, { ...Egg }] as const;
