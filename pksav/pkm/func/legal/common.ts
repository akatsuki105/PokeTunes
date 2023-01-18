import { PKM, PKMFunc } from 'pksav/pkm';
import { hasDuplicated } from 'utils';
import { Problem } from './illegal';

export const isLegalMoves = (p: PKM, old: Problem[]): Problem[] => {
  const ids = p.moves.map((m) => m.id).filter((id) => id !== 0);

  // All null
  if (ids.length === 0) {
    old.push({
      severity: 'warn',
      id: 'pklegal-no-move',
      msg: {
        en: `Pokemon doesn't have any moves`,
        ja: `技を1つも覚えていません`,
      },
    });
    return old;
  }

  // Duplicated moves
  if (hasDuplicated(ids)) {
    old.push({
      severity: 'warn',
      id: 'pklegal-duplicated-move',
      msg: {
        en: `Pokemon has duplicated moves`,
        ja: `同じ技を2つ以上覚えています`,
      },
    });
  }

  // ドーブル
  if (PKMFunc.DexNo(p) === 235) return old;

  const learnsets = PKMFunc.Learnset(p);
  for (let i = 0; i < 4; i++) {
    const moveID = p.moves[i].id;
    if (moveID > 0) {
      if (!learnsets.includes(moveID)) {
        old.push({
          severity: 'warn',
          id: 'pklegal-invalid-move',
          msg: {
            en: `Move ${i + 1} is invalid move`,
            ja: `わざ${i + 1}はこのポケモンが覚えない技です`,
          },
        });
      }
    }
  }

  return old;
};

export const isTotalEV510 = (p: PKM, old: Problem[]): Problem[] => {
  const total = Object.values(p.evs).reduce((prev, cur) => prev + cur, 0);
  if (total > 510) {
    old.push({
      severity: 'fatal',
      id: 'pklegal-ev510',
      msg: {
        en: `The total EV is more than 510`,
        ja: `努力値の合計が510を超えています`,
      },
    });
  }

  return old;
};

export const isLegalMetLevel = (p: PKM & { met: { lv: number } }, old: Problem[]): Problem[] => {
  if (p.met.lv > p.lv) {
    old.push({
      severity: 'warn',
      id: 'pklegal-metlevel-gt-curlv',
      msg: {
        en: 'Met Lv is greater than current Lv',
        ja: '出会った時のレベルが現在のレベルより大きいです',
      },
    });
  }
  return old;
};
