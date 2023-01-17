export type Event1 = {
  id: 'Zapdos' | 'Moltres' | 'Articuno' | 'Mewtwo';
  val: boolean;
};

/**
 * Event with sprite has two flags. EventFlag and ObjectSpawnFlag.
 */

const Aerodactyl = {
  flag: 0x069,
  spawn: {
    RB: 0x34,
    YW: 0x33,
  },
} as const;

const Zapdos = {
  flag: 0x469,
  spawn: 0x55,
} as const;

const Moltres = {
  flag: 0x53E,
  spawn: 0x5B,
} as const;

const Articuno = {
  flag: 0x9DA,
  spawn: {
    RB: 0xE3,
    YW: 0xEB,
  },
} as const;

const Mewtwo = {
  flag: 0x8C1,
  spawn: {
    RB: 0xD1,
    YW: 0xD7,
  },
} as const;

export const Event1 = {
  Zapdos,
  Moltres,
  Articuno,
  Mewtwo,
} as const;
