import { Game } from 'pksav/data';
import { newDummyMon, PKM } from 'pksav/pkm';

export type Party = [PKM, PKM, PKM, PKM, PKM, PKM];

export const Party = (game: Game): Party => {
  const party = [newDummyMon(game), newDummyMon(game), newDummyMon(game), newDummyMon(game), newDummyMon(game), newDummyMon(game)];
  return party as [PKM, PKM, PKM, PKM, PKM, PKM];
};
