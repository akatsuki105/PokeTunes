import { Box, Button, Flex, HStack, Spacer, Text } from '@chakra-ui/react';
import { SAV, SAV3 } from 'pksav';
import { PlayTime } from 'pksav/sav/types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { savReplaced } from 'src/stores/sav';
import { deepEqual } from 'utils';
import { Coin, GamePlayTime, Money, PlayerName, TrainerID } from './GameInfo';

export const Sav3: React.FC<{ sav: SAV3 }> = ({ sav }) => {
  const { t } = useTranslation();
  const [name, setName] = useState(sav.name);
  const [tid, setTID] = useState(sav.tid);
  const [sid, setSID] = useState(sav.sid);
  const [money, setMoney] = useState(sav.money);
  const [coin, setCoin] = useState(sav.coin);
  const [playtime, setPlaytime] = useState<PlayTime>(sav.playtime);
  const dispatch = useDispatch();

  const onSave = () => {
    const newName = name[0] !== 0xFF ? name : sav.name;
    dispatch(savReplaced({ ...sav, name: newName, tid, sid, money, coin, playtime } as SAV));
    setName(newName);
  };

  const onCancel = () => {
    setName(sav.name);
    setTID(sav.tid);
    setSID(sav.sid);
    setMoney(sav.money);
    setCoin(sav.coin);
    setPlaytime(sav.playtime);
  };

  const changed = !deepEqual(name, sav.name) || tid !== sav.tid || sid !== sav.sid || money !== sav.money || coin !== sav.coin ||
    !deepEqual(playtime, sav.playtime);

  return (
    <Box p={4} borderWidth='1px' borderRadius='lg'>
      <Text fontSize='lg' fontWeight='bold'>{`${t('gameinfo')}`}</Text>
      <Spacer h={4} />

      <PlayerName game={sav.game} name={name} setName={setName} />

      <Spacer h={4} />

      <HStack w={'100%'}>
        <Box w={'50%'}>
          <TrainerID tid={tid} setTID={setTID} />
        </Box>

        <Box w={'50%'}>
          <TrainerID tid={sid} setTID={setSID} title='SID' />
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
