import { SAV } from '../sav';

export * from './flash';
export * from './parse';

export type SAV3 = SAV & {
  section0: number; // active slot's section0 Offset
  sid: number; // Section0.0x000A
  xor: number; // Section0.0x00AC (on E)
  coin: number;
  shouldGameSelect: boolean;
};

export const isSAV3 = (sav: SAV): sav is SAV3 => {
  return ['RS', 'FR', 'LG', 'E'].includes(sav.game[0]);
};
