import { GameVersion4 } from 'pksav/data';
import { dummyPKMA } from './common';
import { PKMA } from './pkm';
import { Met } from './types';

export type PK4 = Omit<PKMA, 'ver'> & {
  ver: GameVersion4;
  met: Met;
  ballHGSS: number;
};

export const dummyPK4: PK4 = {
  ...dummyPKMA,
  ver: 'DP',
  met: {
    location: 0,
    ball: 4,
    game: 1,
    lv: 0,
  },
  ballHGSS: 4,
};
