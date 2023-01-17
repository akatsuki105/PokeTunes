import { GameVersion, Gen, Lang, MoveData } from './data';
import { hmMoveIDs, tmMoveIDs } from './data/items/tmhm/move';

const TMName = (lang: Lang, tmNo: number): string => {
  const moveID = tmMoveIDs[tmNo];
  if (moveID === 0) return '';

  const name = MoveData.Name[lang][moveID];
  return name;
};

const HMName = (lang: Lang, ver: GameVersion, hmNo: number): string => {
  const moveID = hmMoveIDs[Gen[ver]][hmNo];
  if (moveID === 0) return '';

  const name = MoveData.Name[lang][moveID];
  return name;
};

const TMType = (tmhmNo: number): string => {
  switch (true) {
    case [1, 8, 31].includes(tmhmNo):
      return 'fighting';

    case [2].includes(tmhmNo):
      return 'dragon';

    case [3, 18].includes(tmhmNo):
      return 'water';

    case [4, 16, 29, 33, 44, 48].includes(tmhmNo):
      return 'psychic';

    case [6, 36].includes(tmhmNo):
      return 'poison';

    case [7, 13, 14].includes(tmhmNo):
      return 'ice';

    case [9, 19, 22].includes(tmhmNo):
      return 'grass';

    case [11, 35, 38, 50].includes(tmhmNo):
      return 'fire';

    case [12, 41, 46, 49].includes(tmhmNo):
      return 'dark';

    case [24, 25, 34].includes(tmhmNo):
      return 'electric';

    case [26, 28].includes(tmhmNo):
      return 'ground';

    case [30].includes(tmhmNo):
      return 'ghost';

    case [37, 39].includes(tmhmNo):
      return 'rock';

    case [40].includes(tmhmNo):
      return 'flying';

    case [23, 47].includes(tmhmNo):
      return 'steel';
  }

  return 'normal';
};

const HMType = (tmhmNo: number): string => {
  const list = [
    'normal',
    'normal',
    'flying',
    'water',
    'normal',
    'normal',
    'rock',
    'water',
    'water',
  ];
  return list[tmhmNo] ?? 'normal';
};

export const TMHMFunc = {
  TMName,
  TMType,
  HMName,
  HMType,
};
