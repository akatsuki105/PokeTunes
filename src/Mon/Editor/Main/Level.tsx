import {
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';
import { PKM, PKMData, PKMFunc } from 'pksav';
import { getLevel, getLv100Exp, getMinExp } from 'pksav/exp';
import { useDispatch } from 'react-redux';
import { NumberInput } from 'src/components';
import { lvChanged } from 'src/stores/pkm';

export const Level: React.FC<{ p: PKM }> = ({ p }) => {
  const dispatch = useDispatch();
  const growth = PKMData.PI[p.ver][PKMFunc.DexNo(p)].growth;

  const handleLvChange = (_: string, lv: number) => {
    if (lv !== p.lv) {
      const exp = getMinExp(lv, growth);
      dispatch(lvChanged([lv, exp]));
    }
  };

  return (
    <FormControl>
      <FormLabel fontSize='sm'>Lv</FormLabel>
      <NumberInput value={p.lv} min={1} max={100} onChange={handleLvChange}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
};

export const Exp: React.FC<{ p: PKM }> = ({ p }) => {
  const dispatch = useDispatch();
  const growth = PKMData.PI[p.ver][PKMFunc.DexNo(p)].growth;
  const max = getLv100Exp(growth);

  const handleExpChange = (_: string, exp: number) => {
    if (exp <= 0) exp = 0;
    if (exp >= getLv100Exp(growth)) exp = getLv100Exp(growth);

    let lv = p.lv;
    if (exp !== p.exp) {
      lv = getLevel(exp, growth);
    }
    dispatch(lvChanged([lv, exp]));
  };

  return (
    <FormControl>
      <FormLabel fontSize='sm'>Exp</FormLabel>
      <NumberInput value={p.exp} min={1} max={max} onChange={handleExpChange}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
};
