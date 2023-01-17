import { PKMData } from 'pksav/data';
import { PK1, PKMFunc } from 'pksav/pkm';
import { isLegalMoves } from './common';
import { Problem } from './illegal';

type LegalChecker1 = (p: PK1, old: Problem[]) => Problem[];

const isLegalItem1: LegalChecker1 = (p: PK1, old: Problem[]): Problem[] => {
  const IllegalItemIDs = [25, 45, 50, 90, 100, 120, 127, 190, 255];
  if (IllegalItemIDs.includes(p.item)) {
    const catchRate = PKMData.PI[p.ver][PKMFunc.DexNo(p)].catchRate;
    if (p.item !== catchRate) {
      old.push({
        severity: 'warn',
        id: 'pklegal-gen1-catchrate',
        msg: {
          en: 'Invalid Catch Rate',
          ja: '捕捉率が不正な値です',
        },
      });
    }
  }

  return old;
};

const checkers: LegalChecker1[] = [
  isLegalItem1,
  isLegalMoves,
];

export const isLegal1 = (p: PK1, old: Problem[]): Problem[] => {
  for (const check of checkers) {
    old = check(p, old);
  }
  return old;
};
