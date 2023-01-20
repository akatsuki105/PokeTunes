import { Box, Button, Flex, HStack, InputGroup, NumberInputField, SimpleGrid, Spacer } from '@chakra-ui/react';
import { isG1, isGB, Nature, PKM, PKMA, PKMData, PKMFunc, Status } from 'pksav';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Input, NumberInput } from 'src/components';
import { useLang } from 'src/hooks';
import { evChanged, ivChanged } from 'src/stores/pkm';
import { Props } from '../../props';

const useIV = (p: PKM, stat: keyof Status): [number, (_: string, iv: number) => void] => {
  const dispatch = useDispatch();
  const iv = PKMFunc.IVs(p)[stat];

  const setIV = (_: string, iv: number) => {
    if (!Number.isNaN(iv)) {
      const ivs = { ...p.ivs };
      ivs[stat] = iv;
      if (isGB(p.ver)) syncSpaSpd(ivs, stat);
      dispatch(ivChanged(ivs));
    }
  };

  const syncSpaSpd = (s: Status, stat: keyof Status) => {
    switch (stat) {
      case 'spa':
        s.spd = s.spa;
        break;
      case 'spd':
        s.spa = s.spd;
        break;
    }
  };

  return [iv, setIV];
};

const useEV = (p: PKM, stat: keyof Status): [number, (_: string, ev: number) => void] => {
  const dispatch = useDispatch();
  const ev = p.evs[stat];

  const setEV = (_: string, ev: number) => {
    if (!Number.isNaN(ev)) {
      const evs = { ...p.evs };
      evs[stat] = ev;
      if (isGB(p.ver)) syncSpaSpd(evs, stat);
      dispatch(evChanged(evs));
    }
  };

  const syncSpaSpd = (s: Status, stat: keyof Status) => {
    switch (stat) {
      case 'spa':
        s.spd = s.spa;
        break;
      case 'spd':
        s.spa = s.spd;
        break;
    }
  };

  return [ev, setEV];
};

export const Stats: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { game, mon: p } = props;
  const disabled = PKMFunc.IsDummy(p);
  const Stat = isGB(game[0]) ? StatGB : StatGBA;

  return (
    <Box>
      <SimpleGrid spacing={2}>
        <Flex>
          <Box w={width['en']}></Box>
          <SimpleGrid columns={4} spacing={2} w='100%'>
            <Box pl={1}>Base</Box>
            <Box pl={1}>IVs</Box>
            <Box pl={1}>EVs</Box>
            <Box pl={1}>Stat</Box>
          </SimpleGrid>
        </Flex>

        <Stat p={p} name='hp' />
        <Stat p={p} name='atk' />
        <Stat p={p} name='def' />
        <Stat p={p} name='spa' />
        <Stat p={p} name='spd' />
        <Stat p={p} name='spe' />
      </SimpleGrid>

      <Spacer h={2} />

      <HStack>
        <Button width={'50%'} onClick={() => dispatch(ivChanged(PKMFunc.RandomIVs(p)))} disabled={disabled}>Randomize IVs</Button>
        <Spacer />
        <Button width={'50%'} onClick={() => dispatch(evChanged(PKMFunc.RandomEVs(p)))} disabled={disabled}>Randomize EVs</Button>
      </HStack>
    </Box>
  );
};

const width = {
  en: '4.2rem',
  ja: '4.4rem',
} as const;

const StatGBA: React.FC<{ p: PKM; name: keyof Status }> = ({ p, name }) => {
  const { t } = useTranslation();
  const lang = useLang();
  const [iv, handleIVChange] = useIV(p, name);
  const [ev, handleEVChange] = useEV(p, name);

  const stats = PKMFunc.Stats(p);
  const boost = Nature.Boost[(p as PKMA).pid % 25];
  const stat = Math.floor(stats[name] * boost[name]);
  const base = PKMData.PI[p.ver][PKMFunc.DexNo(p)].baseStats[name];

  let statName = `${t(`stat.${name}`)}`;
  let c: 'blue.600' | 'red.600' | undefined = undefined;
  if (boost[name] > 1.0) {
    statName += ' ↑';
    c = 'red.600';
  }
  if (boost[name] < 1.0) {
    statName += ' ↓';
    c = 'blue.600';
  }

  return (
    <Flex>
      <Box w={width[lang]} mt={2} color={c}>
        {statName}
      </Box>

      <SimpleGrid columns={4} spacing={2} w='100%'>
        <InputGroup>
          <Input type='number' value={base} isDisabled />
        </InputGroup>

        <NumberInput value={iv} min={0} max={31} onChange={handleIVChange}>
          <NumberInputField />
        </NumberInput>

        <NumberInput value={ev} min={0} max={255} onChange={handleEVChange}>
          <NumberInputField />
        </NumberInput>

        <InputGroup>
          <Input type='number' value={stat} isReadOnly isDisabled />
        </InputGroup>
      </SimpleGrid>
    </Flex>
  );
};

const StatGB: React.FC<{ p: PKM; name: keyof Status }> = ({ p, name }) => {
  const { t } = useTranslation();
  const lang = useLang();
  const [iv, handleIVChange] = useIV(p, name);
  const [ev, handleEVChange] = useEV(p, name);
  const base = PKMData.PI[p.ver][PKMFunc.DexNo(p)].baseStats[name];

  if (isG1(p.ver) && name === 'spd') return <></>;

  return (
    <Flex>
      <Box w={width[lang]} mt={2}>
        {t(`stat.${name}`)}
      </Box>

      <SimpleGrid columns={4} spacing={2} w='100%'>
        <InputGroup>
          <Input type='number' value={base} isDisabled />
        </InputGroup>

        <NumberInput value={iv} min={0} max={15} onChange={handleIVChange} isDisabled={name === 'hp'}>
          <NumberInputField />
        </NumberInput>

        <NumberInput value={ev} min={0} max={65535} onChange={handleEVChange}>
          <NumberInputField />
        </NumberInput>

        <InputGroup>
          <Input type='number' value={PKMFunc.Stats(p)[name]} isDisabled />
        </InputGroup>
      </SimpleGrid>
    </Flex>
  );
};
