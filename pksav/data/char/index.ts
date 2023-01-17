import { Char2, decodeName2, encodeName2 } from './gen2';
import { Char3, decodeName3, encodeName3 } from './gen3';

export * from './gen2';
export * from './gen3';

const Invalid = {
  en: [],
  ja: [],
};

export const Charset = {
  Invalid,
  RB: Char2,
  YW: Char2,
  GS: Char2,
  C: Char2,
  RS: Char3,
  FR: Char3,
  LG: Char3,
  E: Char3,
  DP: Invalid,
  Pt: Invalid,
  HGSS: Invalid,
} as const;

export const decodeNames = {
  Invalid: decodeName2,
  RB: decodeName2,
  YW: decodeName2,
  GS: decodeName2,
  C: decodeName2,
  RS: decodeName3,
  FR: decodeName3,
  LG: decodeName3,
  E: decodeName3,
  DP: decodeName3,
  Pt: decodeName3,
  HGSS: decodeName3,
} as const;

export const encodeNames = {
  Invalid: encodeName2,
  RB: encodeName2,
  YW: encodeName2,
  GS: encodeName2,
  C: encodeName2,
  RS: encodeName3,
  FR: encodeName3,
  LG: encodeName3,
  E: encodeName3,
  DP: encodeName3,
  Pt: encodeName3,
  HGSS: encodeName3,
} as const;
