import { Game } from 'pksav/data';
import { dummyPKM } from './common';
import { dummyPK1 } from './pk1';
import { dummyPK2 } from './pk2';
import { dummyPK3 } from './pk3';
import { PKM } from './pkm';

export * from './common';
export * from './pkm';
export * from './pk1';
export * from './pk2';
export * from './pk3';
export * from './func';

export const newDummyMon = (game: Game): PKM => {
  switch (game[0]) {
    case 'RB':
    case 'YW': {
      return dummyPK1;
    }

    case 'GS':
    case 'C': {
      return dummyPK2;
    }

    case 'RS':
    case 'FR':
    case 'LG':
    case 'E':
      return dummyPK3;
  }

  return dummyPKM;
};
