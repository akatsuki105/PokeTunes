import en from './text_rsefrlg_00000_en.txt?raw';
import ja from './text_rsefrlg_00000_ja.txt?raw';

export const LocationsGen3 = {
  en: en.split('\n'),
  ja: ja.split('\n'),
} as const;
