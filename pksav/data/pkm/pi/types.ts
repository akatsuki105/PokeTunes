type Status = {
  hp: number;
  atk: number;
  def: number;
  spa: number;
  spd: number;
  spe: number;
};

type PersonalInfo = {
  readonly dexid: number;
  readonly baseStats: Status;
  readonly catchRate: number;
  readonly baseExp: number;
  readonly gender: number;
  readonly growth: number;
  readonly types: [number, number];
  readonly tmhm: number[];
};

export type PersonalInfo1 = PersonalInfo & {
  readonly moves: [number, number, number, number]; // Lv1 learnset
};

export type PersonalInfo2 = PersonalInfo & {
  readonly items: [number, number];
  readonly hatchCycles: number;
  readonly eggGroups: [number, number];
};

export type PersonalInfo3 = PersonalInfo2 & {
  readonly ev: Status;
  readonly baseFriendship: number;
  readonly ability: [number, number];
  readonly escapeRate: number;
  readonly color: number;
  readonly noFlip: boolean;
  readonly tutor: number[];
};
