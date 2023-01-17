import { Box, Button, Checkbox, Flex, Spacer, Stack, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { SAV1 } from 'pksav';
import { GamePlayTime, Money, PlayerName, TrainerID } from './GameInfo';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { eventReplaced, savReplaced } from 'src/stores/sav';
import { PlayTime } from 'pksav/sav/types';
import { Event1 } from 'pksav/sav/sav1/event';
import { deepEqual } from 'utils';

export const Sav1: React.FC<{ sav: SAV1 }> = ({ sav }) => {
  return (
    <Box>
      <GameInfo1 sav={sav} />
      <Spacer h={8} />
      <EventFlags1 sav={sav} />
    </Box>
  );
};

const GameInfo1: React.FC<{ sav: SAV1 }> = ({ sav }) => {
  const { t } = useTranslation();

  const [name, setName] = useState(sav.name);
  const [tid, setTID] = useState(sav.tid);
  const [money, setMoney] = useState(sav.money);
  const [playtime, setPlaytime] = useState<PlayTime>(sav.playtime);
  const dispatch = useDispatch();

  const onSave = () => {
    let newPt: PlayTime = [...playtime];
    if (newPt[0] >= 255) {
      newPt = [255, 0, 0, 0];
      setPlaytime(newPt);
    }

    const newName = name[0] !== 0xFF ? name : sav.name;
    dispatch(savReplaced({ ...sav, name: newName, tid, money, playtime: newPt }));
    setName(newName);
  };

  const onCancel = () => {
    setName(sav.name);
    setTID(sav.tid);
    setMoney(sav.money);
    setPlaytime(sav.playtime);
  };

  const isChanged = tid !== sav.tid || money !== sav.money || !deepEqual(playtime, sav.playtime);

  return (
    <Box p={4} borderWidth='1px' borderRadius='lg'>
      <Text fontSize='lg' fontWeight='bold'>{`${t('gameinfo')}`}</Text>
      <Spacer h={4} />

      <PlayerName game={sav.game} name={name} setName={setName} />
      <Spacer h={4} />

      <TrainerID tid={tid} setTID={setTID} />
      <Spacer h={4} />

      <Money money={money} setMoney={setMoney} />
      <Spacer h={4} />

      <GamePlayTime time={playtime} setTime={setPlaytime} />

      <Spacer h={4} />

      {/* Footer */}
      {isChanged &&
        (
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

const EventFlags1: React.FC<{ sav: SAV1 }> = ({ sav }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const EventFlag: React.FC<{ e: Event1 }> = ({ e }) => {
    const id = e.id;
    return (
      <Checkbox
        colorScheme='brand'
        iconColor='white'
        defaultChecked={e.val}
        onChange={(e) => dispatch(eventReplaced({ id, val: e.target.checked }))}
      >
        {t(`event.gen1.${id}`)}
      </Checkbox>
    );
  };

  return (
    <Box p={4} borderWidth='1px' borderRadius='lg'>
      <Text fontSize='lg' fontWeight='bold'>{t(`event.title`)}</Text>
      <Spacer h={4} />

      <Stack pl={2}>
        {sav.events.map((e) => <EventFlag key={e.id} e={e as Event1} />)}
      </Stack>
      <Spacer h={4} />
    </Box>
  );
};
