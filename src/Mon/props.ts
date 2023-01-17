import { Game, PKM } from 'pksav';

export type Props = {
  game: Game;
  mon: PKM;
  setMon: (mon: PKM) => void;
};
