import { Pouch } from '../pouch';
import { SAV } from '../sav';
import { Event2 } from './event';

export * from './flash';
export * from './helper';
export * from './offset';
export * from './parse';

export type SAV2 = SAV & {
  playerColor: number;
  coin: number;
  badges: boolean[];
  bag: {
    items: Pouch;
    keyItems: Pouch;
    balls: Pouch;
    tmhm: Pouch;
  };
  events: Event2[];
};

export const isSAV2 = (sav: SAV): sav is SAV2 => {
  return sav.game[0] === 'GS' || sav.game[0] === 'C';
};
