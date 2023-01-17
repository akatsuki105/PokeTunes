import en from './text_gsc_00000_en.txt?raw';
import ja from './text_gsc_00000_ja.txt?raw';

export const LocationsGen2 = {
  en: en.split('\n'),
  ja: ja.split('\n'),
} as const;
