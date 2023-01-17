import { Pouch } from '../pouch';
import { SAV } from '../sav';
import { Event1 } from './event';

export * from './flash';
export * from './helper';
export * from './offset';
export * from './parse';

export type SAV1 = SAV & {
  coin: number;
  badges: boolean[];
  bag: {
    items: Pouch;
  };
  events: Event1[];
};

export const isSAV1 = (sav: SAV): sav is SAV1 => {
  return sav.game[0] === 'RB' || sav.game[0] === 'YW';
};
