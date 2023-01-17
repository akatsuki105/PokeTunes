import en from './text_Moves_en.txt?raw';
import ja from './text_Moves_ja.txt?raw';
import { PPs2, TMHM2 } from './gen2';
import { TMHM1 } from './gen1';
import { PPs3, TMHM3 } from './gen3';

// MoveID -> Name
const Name = {
  unk: [],
  ja: ja.split('\n'),
  en: en.split('\n'),
} as const;

const MaxID = {
  Invalid: 0,
  RB: 165,
  YW: 165,
  GS: 251,
  C: 251,
  RS: 355,
  FR: 355,
  LG: 355,
  E: 355,
  DP: 468,
  Pt: 468,
  HGSS: 468,
} as const;

// MoveID -> PP
const PP = {
  Invalid: [],
  RB: PPs2,
  YW: PPs2,
  GS: PPs2,
  C: PPs2,
  RS: PPs3,
  FR: PPs3,
  LG: PPs3,
  E: PPs3,
  DP: [],
  Pt: [],
  HGSS: [],
} as const;

// TMHM No. -> MoveID
const TMHM = {
  Invalid: [],
  RB: TMHM1,
  YW: TMHM1,
  GS: TMHM2,
  C: TMHM2,
  RS: TMHM3,
  FR: TMHM3,
  LG: TMHM3,
  E: TMHM3,
  DP: [],
  Pt: [],
  HGSS: [],
} as const;

export const MoveData = {
  Name,
  MaxID,
  PP,
  TMHM,
} as const;
