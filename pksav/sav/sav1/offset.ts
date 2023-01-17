import { Capacity1, MON_SIZE1, NameSize1, PARTYMON_SIZE1 } from './helper';

const PartyLen = 6;

const TID = {
  en: 0x2605,
  ja: 0x25FB,
} as const;

const Money = {
  en: 0x25F3,
  ja: 0x25EE,
} as const;

const PlayTime = {
  en: 0x2CED,
  ja: 0x2CA0,
} as const;

const Pouch = {
  Item: {
    en: 0x25C9,
    ja: 0x25C4,
  },
  PC: {
    en: 0x27E6,
    ja: 0x27DC,
  },
} as const;

const Box = {
  en: [
    /* Box01 */ 0x4000,
    /* Box02 */ 0x4000 + (1122 * 1),
    /* Box03 */ 0x4000 + (1122 * 2),
    /* Box04 */ 0x4000 + (1122 * 3),
    /* Box05 */ 0x4000 + (1122 * 4),
    /* Box06 */ 0x4000 + (1122 * 5),
    /* Box07 */ 0x6000,
    /* Box08 */ 0x6000 + (1122 * 1),
    /* Box09 */ 0x6000 + (1122 * 2),
    /* Box10 */ 0x6000 + (1122 * 3),
    /* Box11 */ 0x6000 + (1122 * 4),
    /* Box12 */ 0x6000 + (1122 * 5),
  ],
  ja: [
    /* Box01 */ 0x4000,
    /* Box02 */ 0x4000 + (1382 * 1),
    /* Box03 */ 0x4000 + (1382 * 2),
    /* Box04 */ 0x4000 + (1382 * 3),
    /* Box05 */ 0x6000,
    /* Box06 */ 0x6000 + (1382 * 1),
    /* Box07 */ 0x6000 + (1382 * 2),
    /* Box08 */ 0x6000 + (1382 * 3),
  ],
} as const;

const Checksum = {
  dst: {
    en: 0x3523,
    ja: 0x3594,
  },
  start: 0x2598,
} as const;

const BoxOT = {
  en: Box['en'].map((ofs) => ofs + (2 + Capacity1['en']) + (MON_SIZE1 * Capacity1['en'])),
  ja: Box['ja'].map((ofs) => ofs + (2 + Capacity1['ja']) + (MON_SIZE1 * Capacity1['ja'])),
} as const;

const BoxNick = {
  en: BoxOT['en'].map((ofs) => ofs + (NameSize1.en * Capacity1['en'])),
  ja: BoxOT['ja'].map((ofs) => ofs + (NameSize1.ja * Capacity1['ja'])),
} as const;

const Party = {
  en: 0x2F2C,
  ja: 0x2ED5,
} as const;

const PartyHdr = 8; // [1, [ID, ID, ID, ID, ID, ID], 0xFF]

const PartyOT = {
  en: [...Array(6)].map((_, i) => Party['en'] + (PartyHdr + (PARTYMON_SIZE1 * 6)) + (NameSize1.en * i)), // 0x303c + 11n
  ja: [...Array(6)].map((_, i) => Party['ja'] + (PartyHdr + (PARTYMON_SIZE1 * 6)) + (NameSize1.ja * i)),
} as const;

const PartyNick = {
  en: [...Array(PartyLen)].map((_, i) => PartyOT['en'][i] + (NameSize1.en * PartyLen)), // 0x307e + 11n
  ja: [...Array(PartyLen)].map((_, i) => PartyOT['ja'][i] + (NameSize1.ja * PartyLen)),
} as const;

// 32 bytes = 256 flags
const ObjectSpawnFlags = {
  en: 0x2852,
  ja: 0x2848,
} as const;

// 320 bytes = 2560 flags
const EventFlag = {
  en: 0x29F3,
  ja: 0x29E9,
} as const;

const CurrentBoxNo = {
  en: 0x284C,
  ja: 0x2842,
} as const;

const CurrentBox = {
  en: 0x30C0,
  ja: 0x302D,
} as const;

const CurrentBoxOT = {
  en: 0x336A,
  ja: 0x342B,
} as const;

const CurrentBoxNick = {
  en: 0x3446,
  ja: 0x34DF,
} as const;

export const Offset1 = {
  PlayerName: 0x2598,
  PlayTime,
  TID,
  Money,
  Pouch,
  Box,
  BoxOT,
  BoxNick,
  Party,
  PartyOT,
  PartyNick,
  Checksum,
  EventFlag,
  ObjectSpawnFlags,
  CurrentBoxNo,
  CurrentBox,
  CurrentBoxOT,
  CurrentBoxNick,
} as const;
