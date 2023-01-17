export type Status = {
  hp: number;
  atk: number;
  def: number;
  spa: number;
  spd: number;
  spe: number;
};

export type Condition = {
  cool: number;
  beauty: number;
  cute: number;
  smart: number;
  tough: number;
  sheen: number;
};

export type Lang = 'ja' | 'en'; // UI Language
export type Gender = 'male' | 'female' | 'unknown';
