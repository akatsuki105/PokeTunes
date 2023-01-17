export type Ot = {
  name: number[];
  id: number;
  gender: number;
};

export type PPBonus = 0 | 1 | 2 | 3;
export type Move = {
  id: number;
  pp: number;
  up: PPBonus;
};
export type MoveSet = [Move, Move, Move, Move];

export type Met = {
  location: number;
  ball: number;
  game: number;
  lv: number;
};
