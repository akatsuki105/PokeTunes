export const SIZE_SECTOR = 4096;
export const SIZE_SECTOR_USED = 3968;
export const SIZE_MAIN = 14 * SIZE_SECTOR; // セーブブロックA, B

export const Capacity3 = 30; // Box capacity

const PouchCapacityFRLG = {
  items: 42,
  keyItems: 30,
  balls: 13,
  tmhm: 58,
  berries: 43,
};

export const PouchCapacity3 = {
  RS: {
    items: 20,
    keyItems: 20,
    balls: 16,
    tmhm: 64,
    berries: 46,
  },
  E: {
    items: 30,
    keyItems: 30,
    balls: 16,
    tmhm: 64,
    berries: 46,
  },
  FR: PouchCapacityFRLG,
  LG: PouchCapacityFRLG,
};
