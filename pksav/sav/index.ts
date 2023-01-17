import { Game1, Game2, Game3 } from '../data';
import { newPokeBoxes } from './box';
import { getSAVType } from './detector';
import { Party } from './party';
import { SAV } from './sav';
import { flash1, isSAV1, parse1 } from './sav1';
import { flash2, isSAV2, parse2 } from './sav2';
import { flash3, isSAV3, parse3 } from './sav3';

export * from './sav';
export * from './detector';
export * from './pouch';
export * from './party';
export * from './sav1';
export * from './sav2';
export * from './sav3';

export const DefaultSAV: SAV = {
  game: ['Invalid', 'en'],
  events: [],
  name: [],
  tid: 0,
  playtime: [0, 0, 0, 0],
  money: 0,
  bag: {},
  party: Party(['Invalid', 'en']),
  boxes: newPokeBoxes(['Invalid', 'en']),
  gender: 'male',
};

export const parseSAV = (buf: Uint8Array): SAV => {
  const game = getSAVType(buf);
  switch (game[0]) {
    case 'RB':
    case 'YW': {
      return parse1(game as Game1, buf);
    }

    case 'GS':
    case 'C': {
      return parse2(game as Game2, buf);
    }

    case 'RS':
    case 'FR':
    case 'LG':
    case 'E': {
      return parse3(game as Game3, buf);
    }
  }

  return DefaultSAV;
};

export const flashSAV = (s: SAV, old: Uint8Array): Uint8Array => {
  if (isSAV1(s)) return flash1(s, old);
  if (isSAV2(s)) return flash2(s, old);
  if (isSAV3(s)) return flash3(s, old);
  return old;
};
