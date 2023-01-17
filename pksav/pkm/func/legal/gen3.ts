import { PK3 } from 'pksav/pkm';
import { isLegalMetLevel, isLegalMoves, isTotalEV510 } from './common';
import { Problem } from './illegal';

type LegalChecker3 = (mon: PK3, old: Problem[]) => Problem[];

const checkers: LegalChecker3[] = [
  isTotalEV510,
  isLegalMetLevel,
  isLegalMoves,
];

export const isLegal3 = (mon: PK3, old: Problem[]): Problem[] => {
  for (const check of checkers) {
    old = check(mon, old);
  }
  return old;
};
