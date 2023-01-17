import _en from './text_Abilities_en.txt?raw';
import _ja from './text_Abilities_ja.txt?raw';

const en = _en.split('\n');
const ja = _ja.split('\n');

const Name = {
  en,
  ja,
} as const;

export const Ability = {
  Name,
} as const;
