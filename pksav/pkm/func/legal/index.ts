import { isPK1, isPK2, isPK3, PKM, PKMFunc } from 'pksav/pkm';
import { isLegal1 } from './gen1';
import { isLegal2 } from './gen2';
import { isLegal3 } from './gen3';
import { Problem } from './illegal';

export const Problems = (p: PKM): Problem[] => {
  let problems: Problem[] = [];

  if (!PKMFunc.IsDummy(p)) {
    if (isPK1(p)) problems = isLegal1(p, problems);
    if (isPK2(p)) problems = isLegal2(p, problems);
    if (isPK3(p)) problems = isLegal3(p, problems);
  }

  return problems;
};
