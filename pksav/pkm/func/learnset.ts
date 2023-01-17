import { GameVersion, isGBA, MoveData, PKMData } from 'pksav/data';
import { PrevEvolution } from 'pksav/data/pkm/evolve';

const Cache: { [key: string]: number[] } = {};

export const Learnset = (ver: GameVersion, dexno: number, curLv = 100): number[] => {
  const key = `${ver}${dexno.toString(10)}Lv${curLv}`;
  if (key in Cache) return Cache[key];

  if (dexno >= PKMData.LvlMove[ver].length) return [];

  const pi = PKMData.PI[ver][dexno];
  const lv1MoveIDs: number[] = ('moves' in pi) ? pi.moves as number[] : [];
  const lvlMoveIDs = PKMData.LvlMove[ver][dexno].filter(({ lv }) => curLv >= lv).map(({ move }) => move);
  const tmhmMoveIDs = pi.tmhm.map((tmhmNo) => MoveData.TMHM[ver][tmhmNo - 1]);
  const tutorMoveIDs: number[] = ('tutor' in pi) ? pi.tutor as number[] : [];
  const specialMoveIDs = getSpecialMoveIDs(ver, dexno, curLv);

  const learnsetMoveIDs = [...lvlMoveIDs, ...tmhmMoveIDs, ...tutorMoveIDs, ...lv1MoveIDs, ...specialMoveIDs];
  const prev = PrevEvolution[dexno];
  if (prev !== 0) {
    learnsetMoveIDs.push(...Learnset(ver, prev, curLv));
  }

  const result = [...new Set(learnsetMoveIDs)];
  Cache[key] = result;
  return result;
};

const getSpecialMoveIDs = (ver: GameVersion, dexno: number, curLv = 100): number[] => {
  const moveIDs: number[] = [];

  if (isGBA(ver)) {
    switch (dexno) {
      case 3:
        moveIDs.push(338); // ハードプラント
        break;
      case 6:
        moveIDs.push(307); // ブラストバーン
        break;
      case 9:
        moveIDs.push(308); // ハイドロカノン
        break;
    }
  }

  return moveIDs;
};
