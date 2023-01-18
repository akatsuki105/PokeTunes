import en from './text_NatureBoosts_en.txt?raw';
import ja from './text_NatureBoosts_ja.txt?raw';

export const BoostName = {
  en: en.split('\n'),
  ja: ja.split('\n'),
} as const;

// 性格補正
export const Boost = [
  { hp: 1.0, atk: 1.0, def: 1.0, spa: 1.0, spd: 1.0, spe: 1.0 }, // がんばりや
  { hp: 1.0, atk: 1.1, def: 0.9, spa: 1.0, spd: 1.0, spe: 1.0 }, // さみしがり
  { hp: 1.0, atk: 1.1, def: 1.0, spa: 1.0, spd: 1.0, spe: 0.9 }, // ゆうかん
  { hp: 1.0, atk: 1.1, def: 1.0, spa: 0.9, spd: 1.0, spe: 1.0 }, // いじっぱり
  { hp: 1.0, atk: 1.1, def: 1.0, spa: 1.0, spd: 0.9, spe: 1.0 }, // やんちゃ
  { hp: 1.0, atk: 0.9, def: 1.1, spa: 1.0, spd: 1.0, spe: 1.0 }, // ずぶとい
  { hp: 1.0, atk: 1.0, def: 1.0, spa: 1.0, spd: 1.0, spe: 1.0 }, // すなお
  { hp: 1.0, atk: 0.9, def: 1.1, spa: 1.0, spd: 1.0, spe: 1.0 }, // のんき
  { hp: 1.0, atk: 1.0, def: 1.1, spa: 0.9, spd: 1.0, spe: 1.0 }, // わんぱく
  { hp: 1.0, atk: 1.0, def: 1.1, spa: 1.0, spd: 0.9, spe: 1.0 }, // のうてんき
  { hp: 1.0, atk: 0.9, def: 1.0, spa: 1.0, spd: 1.0, spe: 1.1 }, // おくびょう
  { hp: 1.0, atk: 1.0, def: 0.9, spa: 1.0, spd: 1.0, spe: 1.1 }, // せっかち
  { hp: 1.0, atk: 1.0, def: 1.0, spa: 1.0, spd: 1.0, spe: 1.0 }, // まじめ
  { hp: 1.0, atk: 1.0, def: 1.0, spa: 0.9, spd: 1.0, spe: 1.1 }, // ようき
  { hp: 1.0, atk: 1.0, def: 1.0, spa: 1.0, spd: 0.9, spe: 1.1 }, // むじゃき
  { hp: 1.0, atk: 0.9, def: 1.0, spa: 1.1, spd: 1.0, spe: 1.0 }, // ひかえめ
  { hp: 1.0, atk: 1.0, def: 0.9, spa: 1.1, spd: 1.0, spe: 1.0 }, // おっとり
  { hp: 1.0, atk: 1.0, def: 1.0, spa: 1.1, spd: 1.0, spe: 0.9 }, // れいせい
  { hp: 1.0, atk: 1.0, def: 1.0, spa: 1.0, spd: 1.0, spe: 1.0 }, // てれや
  { hp: 1.0, atk: 1.0, def: 1.0, spa: 1.1, spd: 0.9, spe: 1.0 }, // うっかりや
  { hp: 1.0, atk: 0.9, def: 1.0, spa: 1.0, spd: 1.1, spe: 1.0 }, // おだやか
  { hp: 1.0, atk: 1.0, def: 0.9, spa: 1.0, spd: 1.1, spe: 1.0 }, // おとなしい
  { hp: 1.0, atk: 1.0, def: 1.0, spa: 1.0, spd: 1.1, spe: 0.9 }, // なまいき
  { hp: 1.0, atk: 1.0, def: 1.0, spa: 0.9, spd: 1.1, spe: 1.0 }, // しんちょう
  { hp: 1.0, atk: 1.0, def: 1.0, spa: 1.0, spd: 1.0, spe: 1.0 }, // きまぐれ
] as const;
