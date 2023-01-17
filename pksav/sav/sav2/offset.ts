import { Capacity2, MON_SIZE2, NameSize2 } from './helper';

const PlayerPalette = {
  en: {
    GS: 0x206B,
    C: 0x206A,
  },
  ja: {
    GS: 0x204C,
    C: 0x204C,
  },
} as const;

const Money = {
  en: {
    GS: 0x23DB,
    C: 0x23DC,
  },
  ja: {
    GS: 0x23BC,
    C: 0x23BE,
  },
} as const;

const Gender = {
  en: 0x3E3D,
  ja: 0x8000,
} as const;

const PouchTMHM = {
  en: {
    GS: 0x23E6,
    C: 0x23E7,
  },
  ja: {
    GS: 0x23C7,
    C: 0x23C9,
  },
} as const;

const PouchItem = {
  en: {
    GS: 0x241F,
    C: 0x2420,
  },
  ja: {
    GS: 0x2400,
    C: 0x2402,
  },
} as const;

const PouchKey = {
  en: {
    GS: 0x2449,
    C: 0x244A,
  },
  ja: {
    GS: 0x242A,
    C: 0x242C,
  },
} as const;

const PouchBall = {
  en: {
    GS: 0x2464,
    C: 0x2465,
  },
  ja: {
    GS: 0x2445,
    C: 0x2447,
  },
} as const;

const PouchPC = {
  en: {
    GS: 0x247E,
    C: 0x247F,
  },
  ja: {
    GS: 0x245F,
    C: 0x2461,
  },
} as const;

const Pouch = {
  Item: PouchItem,
  Key: PouchKey,
  TMHM: PouchTMHM,
  Ball: PouchBall,
  PC: PouchPC,
} as const;

const Badge = {
  en: {
    GS: 0x23E4,
    C: 0x23E5,
  },
  ja: {
    GS: 0x23C5,
    C: 0x23C7,
  },
} as const;

const sBox = {
  en: [
    /* Box01 */ 0x4000,
    /* Box02 */ 0x4000 + (1104 * 1),
    /* Box03 */ 0x4000 + (1104 * 2),
    /* Box04 */ 0x4000 + (1104 * 3),
    /* Box05 */ 0x4000 + (1104 * 4),
    /* Box06 */ 0x4000 + (1104 * 5),
    /* Box07 */ 0x4000 + (1104 * 6),
    /* Box08 */ 0x6000,
    /* Box09 */ 0x6000 + (1104 * 1),
    /* Box10 */ 0x6000 + (1104 * 2),
    /* Box11 */ 0x6000 + (1104 * 3),
    /* Box12 */ 0x6000 + (1104 * 4),
    /* Box13 */ 0x6000 + (1104 * 5),
    /* Box14 */ 0x6000 + (1104 * 6),
  ],
  ja: [
    /* Box01 */ 0x4000,
    /* Box02 */ 0x4000 + (1354 * 1),
    /* Box03 */ 0x4000 + (1354 * 2),
    /* Box04 */ 0x4000 + (1354 * 3),
    /* Box05 */ 0x4000 + (1354 * 4),
    /* Box06 */ 0x4000 + (1354 * 5),
    /* Box07 */ 0x6000,
    /* Box08 */ 0x6000 + (1354 * 1),
    /* Box09 */ 0x6000 + (1354 * 2),
    /* Box10 */ 0x6000 + (1354 * 3),
  ],
} as const;

const sBoxMonOT2 = {
  en: sBox['en'].map((ofs) => ofs + (2 + Capacity2['en']) + (MON_SIZE2 * Capacity2['en'])),
  ja: sBox['ja'].map((ofs) => ofs + (2 + Capacity2['ja']) + (MON_SIZE2 * Capacity2['ja'])),
} as const;

const sBoxMonNicks2 = {
  en: sBoxMonOT2['en'].map((ofs) => ofs + (11 * Capacity2['en'])),
  ja: sBoxMonOT2['ja'].map((ofs) => ofs + (6 * Capacity2['ja'])),
} as const;

const Party = {
  en: {
    GS: 0x288A,
    C: 0x2865,
  },
  ja: {
    GS: 0x283E,
    C: 0x281A,
  },
} as const;

const PartyOT = {
  en: {
    GS: [...Array(6)].map((_, i) => 0x29b2 + (NameSize2.en * i)), // 0x29b2 + 11n
    C: [...Array(6)].map((_, i) => 0x298d + (NameSize2.en * i)), // 0x298d + 11n
  },
  ja: {
    GS: [...Array(6)].map((_, i) => 0x2966 + (NameSize2.ja * i)), // 0x2966 + 6n
    C: [...Array(6)].map((_, i) => 0x2942 + (NameSize2.ja * i)), // 0x2942 + 6n
  },
} as const;

const PartyNick = {
  en: {
    GS: [...Array(6)].map((_, i) => 0x29f4 + (NameSize2.en * i)),
    C: [...Array(6)].map((_, i) => 0x29cf + (NameSize2.en * i)),
  },
  ja: {
    GS: [...Array(6)].map((_, i) => 0x298a + (NameSize2.ja * i)),
    C: [...Array(6)].map((_, i) => 0x2966 + (NameSize2.ja * i)),
  },
};

const PlayTime = {
  en: {
    GS: 0x2053,
    C: 0x2052,
  },
  ja: {
    GS: 0x2034,
    C: 0x2034,
  },
} as const;

const Coin = {
  en: {
    GS: 0x23E2,
    C: 0x23E3,
  },
  ja: {
    GS: 0x23C3,
    C: 0x23C5,
  },
} as const;

// 256 bytes = 2048 flags
const EventFlag = {
  en: {
    GS: 0x261F,
    C: 0x2600,
  },
  ja: {
    GS: 0x2600,
    C: 0x25E2,
  },
} as const;

export const Offset2 = {
  PlayerName: 0x200B,
  TID: 0x2009,
  PlayerPalette,
  Box: sBox,
  BoxOT: sBoxMonOT2,
  BoxNick: sBoxMonNicks2,
  Party,
  PartyOT,
  PartyNick,
  PlayTime,
  Money,
  Badge,
  Pouch,
  Gender,
  Coin,
  EventFlag,
} as const;
