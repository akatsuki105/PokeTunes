import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  InputGroup,
  InputRightAddon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { decodeNames, encodeNames, Game, Gender } from 'pksav';
import { PlayTime } from 'pksav/sav/types';
import { Input, NumberInput, StringInput, StringSelect } from 'src/components';

/*
  - Name
  - TID
  - Money
  - Gender
  - Game Play Time(seconds)
*/

export const PlayerName: React.FC<{ game: Game; name: number[]; setName?: (name: number[]) => void }> = ({ game, name, setName }) => {
  const { t } = useTranslation();
  const [decode, encode] = [decodeNames[game[0]], encodeNames[game[0]]];
  const str = decode(game[1], new Uint8Array(name));

  return (
    <FormControl>
      <FormLabel fontSize='sm'>{t('name')}</FormLabel>
      <StringInput type='text' value={str} onChange={(s) => setName?.([...encode(game[1], s)])} />
    </FormControl>
  );
};

export const TrainerID: React.FC<{ tid: number; setTID: (tid: number) => void; title?: string }> = ({ tid, setTID, title = 'TID' }) => {
  return (
    <FormControl>
      <FormLabel fontSize='sm'>{title}</FormLabel>
      <NumberInput value={tid} min={0} max={65535} onChange={(_, n) => setTID(n)}>
        <NumberInputField />
      </NumberInput>
    </FormControl>
  );
};

export const Money: React.FC<{ money: number; setMoney: (m: number) => void }> = ({ money, setMoney }) => {
  const { t } = useTranslation();

  return (
    <FormControl>
      <FormLabel fontSize='sm'>{t('money')}</FormLabel>
      <NumberInput value={money} min={0} max={999999} onChange={(_, n) => setMoney(n)}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
};

export const Coin: React.FC<{ coin: number; setCoin: (m: number) => void }> = ({ coin, setCoin }) => {
  const { t } = useTranslation();

  return (
    <FormControl>
      <FormLabel fontSize='sm'>{t('coin')}</FormLabel>
      <NumberInput value={coin} min={0} max={9999} onChange={(_, n) => setCoin(n)}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
};

export const Genders: React.FC<{ gender: Gender; setGender: (g: Gender) => void }> = ({ gender, setGender }) => {
  return (
    <StringSelect<Gender> size='sm' onChange={setGender}>
      <option value={'male'} selected={gender === 'male'}>♂</option>
      <option value={'female'} selected={gender === 'female'}>♀</option>
    </StringSelect>
  );
};

export const GamePlayTime: React.FC<{ time: PlayTime; setTime: (t: PlayTime) => void }> = ({ time, setTime }) => {
  const { t } = useTranslation();
  const [hour, min, sec, frame] = time;

  return (
    <Box>
      <Text fontSize='sm'>{`${t('time.playtime')}`}</Text>
      <Spacer h={2} />

      <HStack>
        <InputGroup>
          <Input
            type='number'
            value={hour}
            onChange={(e) => setTime([Number(e.target.value), min, sec, frame])}
            borderTopRightRadius='0'
            borderBottomRightRadius='0'
          />
          <InputRightAddon children={t('time.hour')} />
        </InputGroup>

        <InputGroup>
          <Input
            type='number'
            value={min}
            onChange={(e) => setTime([hour, Number(e.target.value), sec, frame])}
            borderTopRightRadius='0'
            borderBottomRightRadius='0'
          />
          <InputRightAddon children={t('time.min')} />
        </InputGroup>

        <InputGroup>
          <Input
            type='number'
            value={sec}
            onChange={(e) => setTime([hour, min, Number(e.target.value), frame])}
            borderTopRightRadius='0'
            borderBottomRightRadius='0'
          />
          <InputRightAddon children={t('time.sec')} />
        </InputGroup>
      </HStack>
    </Box>
  );
};
