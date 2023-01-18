import {
  Box,
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
  Spacer,
  Switch,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { isPK1, PK1, PKM, PKMFunc } from 'pksav';
import { uint8 } from 'utils';
import { useDispatch } from 'react-redux';
import { itemChanged, replaced } from 'src/stores/pkm';
import { NumberInput, NumberSelect } from 'src/components';

export const Misc: React.FC<{ p: PKM }> = ({ p }) => {
  return (
    <Box>
      <Friendship p={p} />
      <Spacer h={4} />
      {isPK1(p) ? <CatchRate1 p={p} /> : (
        <>
          <Pokerus p={p} />
          <Spacer h={6} />
          <IsEgg p={p} />
        </>
      )}
    </Box>
  );
};

const Friendship: React.FC<{ p: PKM }> = ({ p }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const onChange = (_: string, friendship: number) => dispatch(replaced({ ...p, friendship }));

  return (
    <FormControl>
      <FormLabel fontSize='sm'>{t('friendship')}</FormLabel>
      <NumberInput value={p.friendship} min={0} max={255} onChange={onChange}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
};

const Pokerus: React.FC<{ p: PKM }> = ({ p }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const strain = (p.pokerus >> 4) & 0b1111;
  const days = p.pokerus & 0b1111;

  const onChange = (pokerus: number) => dispatch(replaced({ ...p, pokerus }));

  return (
    <FormControl>
      <FormLabel fontSize='sm'>{t('pokerus.name')}</FormLabel>
      <NumberSelect onChange={onChange}>
        <option selected={p.pokerus === 0} value={0}>{t('pokerus.none')}</option>
        <option selected={strain > 0 && days > 0} value={52}>{t('pokerus.infected')}</option>
        <option selected={strain > 0 && days === 0} value={48}>{t('pokerus.cured')}</option>
      </NumberSelect>
    </FormControl>
  );
};

const IsEgg: React.FC<{ p: PKM }> = ({ p }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const toggleIsEgg = () => {
    dispatch(replaced(PKMFunc.ToggleEgg(p)));
  };

  return (
    <FormControl display='flex'>
      <FormLabel fontSize='sm' htmlFor='isEgg'>{t('is_egg')}</FormLabel>
      <Switch id='isEgg' colorScheme='brand' isChecked={p.isEgg} onChange={toggleIsEgg} size='md' />
    </FormControl>
  );
};

const CatchRate1: React.FC<{ p: PK1 }> = ({ p }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const onChange = (_: string, n: number) => dispatch(itemChanged(uint8(n)));

  return (
    <FormControl>
      <FormLabel fontSize='sm'>{t('catchrate')}</FormLabel>
      <NumberInput value={p.item} min={0} max={255} onChange={onChange}>
        <NumberInputField />
      </NumberInput>
    </FormControl>
  );
};
