const Money = {
  RS: 0x490,
  E: 0x490,
  FR: 0x290,
  LG: 0x290,
} as const;

const Coin = {
  RS: 0x494,
  E: 0x494,
  FR: 0x294,
  LG: 0x294,
} as const;

const Party = {
  RS: 0x0234,
  E: 0x0234,
  FR: 0x0034,
  LG: 0x0034,
} as const;

const PouchFRLG = {
  items: 0x0310,
  keyItems: 0x03B8,
  balls: 0x0430,
  tmhm: 0x0464,
} as const;

const Pouch = {
  RS: {
    items: 0x0560,
    keyItems: 0x05B0,
    balls: 0x0600,
    tmhm: 0x0640,
  },
  E: {
    items: 0x0560,
    keyItems: 0x05D8,
    balls: 0x0650,
    tmhm: 0x0690,
  },
  FR: PouchFRLG,
  LG: PouchFRLG,
} as const;

export const Offset3 = {
  Money,
  Coin,
  Party,
  Pouch,
} as const;
