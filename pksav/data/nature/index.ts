import en from './text_Natures_en.txt?raw';
import ja from './text_Natures_ja.txt?raw';
import { Boost, BoostName } from './boost';

const NatureEn = en.split('\n');
const NatureJa = ja.split('\n');

const Name = {
  en: NatureEn,
  ja: NatureJa,
} as const;

export const Nature = {
  Name,
  Boost,
  BoostName,
} as const;
