import { Box, Button, Checkbox, Flex, HStack, Image, Spacer, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Gender, SAV, SAV2 } from 'pksav';
import { Coin, GamePlayTime, Genders, Money, PlayerName, TrainerID } from './GameInfo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/main';
import { eventReplaced, savReplaced } from 'src/stores/sav';
import { PlayTime } from 'pksav/sav/types';
import { Event2 } from 'pksav/sav/sav2/event';
import { NumberSelect, Select } from 'src/components';
import { deepEqual } from 'utils';

export const Sav2: React.FC<{ sav: SAV2 }> = ({ sav }) => {
  return (
    <Box>
      <GameInfo2 />
      <Spacer h={8} />
      <PlayerAppearance sav={sav} />
      <Spacer h={8} />
      <EventFlags2 sav={sav} />
    </Box>
  );
};

const GameInfo2: React.FC = () => {
  const { t } = useTranslation();
  const sav = useSelector((state: RootState) => state.sav as SAV2);
  const dispatch = useDispatch();

  const [name, setName] = useState(sav.name);
  const [tid, setTID] = useState(sav.tid);
  const [money, setMoney] = useState(sav.money);
  const [coin, setCoin] = useState(sav.coin);
  const [playtime, setPlaytime] = useState<PlayTime>(sav.playtime);

  const onSave = () => {
    const newName = name[0] !== 0xFF ? name : sav.name;
    dispatch(savReplaced({ ...sav, name: newName, tid, money, coin, playtime } as SAV));
    setName(newName);
  };

  const onCancel = () => {
    setName(sav.name);
    setTID(sav.tid);
    setMoney(sav.money);
    setCoin(sav.coin);
    setPlaytime(sav.playtime);
  };

  const changed = !deepEqual(name, sav.name) || tid !== sav.tid || money !== sav.money || coin !== sav.coin ||
    !deepEqual(playtime, sav.playtime);

  return (
    <Box p={4} borderWidth='1px' borderRadius='lg'>
      <Text fontSize='lg' fontWeight='bold'>{`${t('gameinfo')}`}</Text>
      <Spacer h={4} />

      <Box>
        <HStack w={'100%'}>
          <Box w={'50%'}>
            <PlayerName game={sav.game} name={name} setName={setName} />
          </Box>

          <Box w={'50%'}>
            <TrainerID tid={tid} setTID={setTID} />
          </Box>
        </HStack>

        <Spacer h={4} />

        <HStack w={'100%'}>
          <Box w={'50%'}>
            <Money money={money} setMoney={setMoney} />
          </Box>
          <Box w={'50%'}>
            <Coin coin={coin} setCoin={setCoin} />
          </Box>
        </HStack>

        <Spacer h={4} />
        <GamePlayTime time={playtime} setTime={setPlaytime} />
        <Spacer h={4} />
        <Badge2 sav={sav} />
      </Box>
      <Spacer h={4} />

      {/* Footer */}
      {changed && (
        <Flex>
          <Spacer />
          <Button color='white' colorScheme='brand' onClick={onSave}>Save</Button>
          <Box w={2} />
          <Button onClick={onCancel}>Cancel</Button>
        </Flex>
      )}
    </Box>
  );
};

const PlayerAppearance: React.FC<{ sav: SAV2 }> = React.memo(({ sav }) => {
  const { t } = useTranslation();
  const [color, setColor] = useState(sav.playerColor);
  const [gender, setGender] = useState<Gender>(sav.gender);
  const dispatch = useDispatch();

  const colors = ['red', 'blue', 'green', 'brown', 'orange', 'gray', 'lime', 'sepia'];
  const iconURL = `/images/gen2player/${gender}/${colors[color]}.webp`;

  const onSave = () => {
    dispatch(savReplaced({ ...sav, gender, playerColor: color } as SAV));
  };

  const onCancel = () => {
    setGender(sav.gender);
    setColor(sav.playerColor);
  };

  const isChanged = color !== sav.playerColor || gender !== sav.gender;

  return (
    <Box p={4} borderWidth='1px' borderRadius='lg'>
      <Text fontSize='lg' fontWeight='bold'>{`${t('appearance')}`}</Text>
      <Spacer h={4} />

      <HStack pl={4}>
        <Box w={sav.game[0] === 'C' ? '2.5rem' : '2rem'} h='2rem' __css={{ imageRendering: 'pixelated' }}>
          <Image w={'100%'} h={'100%'} src={iconURL} />
        </Box>

        <Spacer w={2} />

        {sav.game[0] === 'C' && (
          <Box w='5rem'>
            <Genders gender={gender} setGender={setGender} />
          </Box>
        )}

        <NumberSelect size='sm' onChange={setColor}>
          {colors.map((c, i) => (
            <option key={i} selected={color === i} value={i}>
              {t(`color.${c}`)}
            </option>
          ))}
        </NumberSelect>
      </HStack>
      <Spacer h={4} />

      {/* Footer */}
      {isChanged && (
        <Flex>
          <Spacer />
          <Button color='white' colorScheme='brand' onClick={onSave}>Save</Button>
          <Box w={2} />
          <Button onClick={onCancel}>Cancel</Button>
        </Flex>
      )}
    </Box>
  );
});

const Badge2: React.FC<{ sav: SAV2 }> = ({ sav }) => {
  const { t } = useTranslation();

  return (
    <HStack>
      <Text fontSize='sm'>{t('badge')}</Text>

      <Spacer />

      <HStack>
        {sav.badges.map((elm, i) => {
          return <Checkbox key={i} isDisabled defaultChecked={elm} />;
        })}
      </HStack>
    </HStack>
  );
};

const EventFlags2: React.FC<{ sav: SAV2 }> = ({ sav }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const EventFlag: React.FC<{ e: Event2 }> = ({ e }) => {
    const id = e.id;
    return (
      <Checkbox
        colorScheme='brand'
        iconColor='white'
        defaultChecked={e.val}
        onChange={(e) => dispatch(eventReplaced({ id, val: e.target.checked }))}
      >
        {t(`event.gen2.${id}`)}
      </Checkbox>
    );
  };

  return (
    <Box p={4} borderWidth='1px' borderRadius='lg'>
      <Text fontSize='lg' fontWeight='bold'>{t(`event.title`)}</Text>
      <Spacer h={4} />

      <Stack pl={2}>
        {sav.events.map((e) => <EventFlag key={e.id} e={e as Event2} />)}
      </Stack>
      <Spacer h={4} />
    </Box>
  );
};
