import { LvlMoveRB, LvlMoveYW } from './gen1';
import { LvlMoveC, LvlMoveGS } from './gen2';
import { LvlMoveE, LvlMoveFR, LvlMoveLG, LvlMoveRS } from './gen3';
import { LvlMove as LvlMoveType } from './types';

export * from './types';

const NullMove: LvlMoveType[] = [];
const NullLvlMove: LvlMoveType[][] = [NullMove];

export const LvlMove = {
  Invalid: NullLvlMove,
  RB: LvlMoveRB,
  YW: LvlMoveYW,
  GS: LvlMoveGS,
  C: LvlMoveC,
  RS: LvlMoveRS,
  FR: LvlMoveFR,
  LG: LvlMoveLG,
  E: LvlMoveE,
  DP: NullLvlMove,
  Pt: NullLvlMove,
  HGSS: NullLvlMove,
} as const;
