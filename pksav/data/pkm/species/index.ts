import en from './text_Species_en.txt?raw';
import ja from './text_Species_ja.txt?raw';

const SpeciesEn = en.split('\n');
const SpeciesJa = ja.split('\n');

const NullSpecies = {
  en: ['---'],
  ja: ['---'],
};

const Specie1 = {
  en: [...SpeciesEn.slice(0, 152), '---'],
  ja: [...SpeciesJa.slice(0, 152), '---'],
} as const;

const Specie2 = {
  en: [...SpeciesEn.slice(0, 252), '---'],
  ja: [...SpeciesJa.slice(0, 252), '---'],
} as const;

const Specie3 = {
  en: [...SpeciesEn.slice(0, 387), '---'],
  ja: [...SpeciesJa.slice(0, 387), '---'],
} as const;

export const Specie = {
  Invalid: NullSpecies,
  RB: Specie1,
  YW: Specie1,
  GS: Specie2,
  C: Specie2,
  RS: Specie3,
  FR: Specie3,
  LG: Specie3,
  E: Specie3,
  DP: NullSpecies,
  Pt: NullSpecies,
  HGSS: NullSpecies,
} as const;
