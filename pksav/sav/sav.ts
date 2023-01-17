import { Box } from './box';
import { Game, Gender } from '../data';
import { Pouch } from './pouch';
import { PlayTime } from './types';
import { Party } from './party';

export type SAV =
  & {
    game: Game;
    events: Event[];
  }
  & Player
  & PokeData;

type Player = {
  name: number[];
  tid: number;
  playtime: PlayTime;
  money: number;
  bag: { [key: string]: Pouch };
  gender: Gender;
};

type PokeData = {
  party: Party;
  boxes: Box[];
};

export type EventVal = boolean | number | string;
export type Event = {
  id: string;
  val: EventVal | { [key: string]: EventVal };
};
