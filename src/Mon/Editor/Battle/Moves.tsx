import { Box, SimpleGrid, Spacer } from '@chakra-ui/react';
import { GameVersion, MoveData, PKMFunc } from 'pksav';
import { useLang } from '../../../hooks';
import { Move, PPBonus } from 'pksav/pkm/types';
import { useDispatch, useSelector } from 'react-redux';
import { moveChanged } from 'src/stores/pkm';
import { RootState } from 'src/main';
import { NumberSelect, Select } from 'src/components';

// calc new PP if MoveID or PPUp is changed
const calcPP = (ver: GameVersion, id: number, up: number): number => {
  const basePP = MoveData.PP[ver][id];
  const pp = basePP + Math.floor(basePP / 5) * up;
  return pp;
};

export const MoveList: React.FC = () => <Box>{[...Array(4)].map((_, i) => <MoveRow key={i} idx={i} />)}</Box>;

const MoveRow: React.FC<{ idx: number }> = ({ idx }) => {
  const lang = useLang();
  const dispatch = useDispatch();
  const ver = useSelector((state: RootState) => state.sav.game[0]);
  const p = useSelector((state: RootState) => state.pkm);
  const move = p.moves[idx];

  const { id } = move;
  const basePP = MoveData.PP[ver][id];
  const bonus = Math.floor(basePP / 5);

  const updateMove = (m: Move) => {
    const { id, up } = m;
    const pp = calcPP(ver, id, up);
    const newMove = { id, pp, up };
    dispatch(moveChanged([idx, newMove]));
  };

  const MoveSelect = () => {
    const ls = PKMFunc.Learnset(p);

    let moveNames = MoveData.Name[lang].slice(0, MoveData.MaxID[ver] + 1);
    const invalidMoveIDs = [...Array(moveNames.length)].map((_, i) => i).filter((i) => !ls.includes(i));

    const moveIDs = [...new Set([...ls, ...invalidMoveIDs])];
    moveNames = moveIDs.map((id) => moveNames[id]);

    return (
      <NumberSelect onChange={(id) => updateMove({ ...move, id })}>
        {moveIDs.map((id, i) => <option selected={id === move.id} value={id} key={`${moveNames[i]}_${i}`}>{moveNames[i]}</option>)}
      </NumberSelect>
    );
  };

  return (
    <>
      <SimpleGrid columns={2} spacing={4}>
        <MoveSelect />

        <NumberSelect onChange={(n) => updateMove({ ...move, up: n as PPBonus })}>
          <option selected={move.up === 0} value={0}>{basePP} &nbsp;</option>
          <option selected={move.up === 1} value={1}>{basePP + bonus} &nbsp;↑</option>
          <option selected={move.up === 2} value={2}>{basePP + bonus * 2} &nbsp;↑↑</option>
          <option selected={move.up === 3} value={3}>{basePP + bonus * 3} &nbsp;↑↑↑</option>
        </NumberSelect>
      </SimpleGrid>
      <Spacer h={2} />
    </>
  );
};
