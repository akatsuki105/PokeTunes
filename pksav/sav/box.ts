import { Game, isGB, isGBA } from '../data';
import { newDummyMon, PKM } from '../pkm';

// Pokemon PC Box
export type Box = {
  name: string;
  mons: PKM[];
  readonly capacity: number;
};

const PokeBox = (name: string, game: Game, capacity: number): Box => {
  const mons = [...Array(capacity)];
  for (let i = 0; i < capacity; i++) {
    mons[i] = newDummyMon(game);
  }

  return {
    name: name,
    mons,
    capacity,
  };
};

export const newPokeBoxes = (game: Game): Box[] => {
  const getBoxCount = (game: Game): number => {
    const [ver, loc] = game;

    switch (true) {
      case ['RB', 'YW'].includes(ver):
        return loc === 'ja' ? 8 : 12;
      case ['GS', 'C'].includes(ver):
        return loc === 'ja' ? 9 : 14;
      case isGBA(ver):
        return 14;
      case ver === 'Invalid':
        return 1;
      default:
        return 0;
    }
  };

  const getCapacity = (game: Game): number => {
    const [ver, loc] = game;

    switch (true) {
      case isGB(ver):
        return loc === 'ja' ? 30 : 20;
      case isGBA(ver):
        return 30;
      default:
        return 0;
    }
  };

  const boxes = [];
  const boxCount = getBoxCount(game);
  const capacity = getCapacity(game);
  for (let i = 0; i < boxCount; i++) {
    const box = PokeBox(`Box ${i + 1}`, game, capacity);
    boxes.push(box);
  }
  return boxes;
};
