import {
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
  SimpleGrid,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Condition, PKM, PKMA } from 'pksav';
import { uint8 } from 'utils';
import { useDispatch } from 'react-redux';
import { replaced } from 'src/stores/pkm';
import { useLang } from 'src/hooks';
import { NumberInput } from 'src/components';

type Name = keyof Condition;

export const Contest: React.FC<{ p: PKMA }> = ({ p }) => {
  return (
    <SimpleGrid columns={3} spacing={4}>
      <Param p={p} name='cool' />
      <Param p={p} name='beauty' />
      <Param p={p} name='cute' />
      <Param p={p} name='smart' />
      <Param p={p} name='tough' />
      <Param p={p} name='sheen' />
    </SimpleGrid>
  );
};

const Param: React.FC<{ p: PKMA; name: Name }> = ({ p, name }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const lang = useLang();

  const onChange = (_: string, val: number) => {
    const cnt = { ...p.cnt };
    cnt[name] = uint8(val);
    dispatch(replaced({ ...p, cnt } as PKM));
  };

  return (
    <FormControl>
      <FormLabel fontSize='sm'>{t(`contest.${name}`)}</FormLabel>
      <NumberInput value={p.cnt[name]} min={0} max={255} onChange={onChange}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
};
