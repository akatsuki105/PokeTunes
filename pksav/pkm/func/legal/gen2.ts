import { PK2 } from 'pksav/pkm';
import { isLegalMetLevel, isLegalMoves } from './common';
import { Problem } from './illegal';

type LegalChecker2 = (p: PK2, old: Problem[]) => Problem[];

const isLegalLugiaMeet = (p: PK2, old: Problem[]): Problem[] => {
  if (p.id === 249) {
    // クリスタル以外では記録されないのでクリスタルのレベルだけ確認
    if (![0, 60].includes(p.met.lv)) {
      old.push({
        severity: 'warn',
        id: 'pklegal-gen2-lugia-meet',
        msg: {
          en: 'Invalid Lugia met level',
          ja: 'ルギア を捕まえた時のレベルが不正です',
        },
      });
    }

    if (![0, 31].includes(p.met.location)) {
      old.push({
        severity: 'warn',
        id: 'pklegal-gen2-lugia-meet',
        msg: {
          en: 'Invalid Lugia met location',
          ja: 'ルギア は うずまきじま 以外で捕獲できません',
        },
      });
    }
  }

  return old;
};

const checkers: LegalChecker2[] = [
  isLegalMoves,
  isLegalMetLevel,
  isLegalLugiaMeet,
];

export const isLegal2 = (mon: PK2, old: Problem[]): Problem[] => {
  for (const check of checkers) {
    old = check(mon, old);
  }
  return old;
};
