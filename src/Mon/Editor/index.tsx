import {
  Box,
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spacer,
  Tab,
  TabList,
  Tabs,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { isG1, PKM, PKMFunc } from 'pksav';
import { MoveList, Stats } from './Battle';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/main';
import { replaced } from 'src/stores/pkm';
import { Personality } from './Main/Personality';
import { OT } from './OT';
import { Contest, Marking, Misc, Ribbons } from './Misc';
import { Met } from './Met';
import { Main } from './Main';
import { useState } from 'react';
import { PKMIcon } from '../Icon';
import { Detail } from './Modal';

const tabs = ['Main', 'Battle', 'Met/OT', 'Misc'] as const;
type Tab = typeof tabs[number];

const Divide: React.FC = () => {
  return (
    <>
      <Spacer h={6} />
      <Divider />
      <Spacer h={6} />
    </>
  );
};

export const PKMEditor: React.FC = () => {
  const { t } = useTranslation();
  const p = useSelector((state: RootState) => state.pkm);
  const game = useSelector((state: RootState) => state.sav.game);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tab, setTab] = useState<Tab>('Main');
  const dispatch = useDispatch();
  const setMon = (p: PKM) => dispatch(replaced({ ...p }));

  const props = {
    mon: p,
    game,
    setMon,
  };

  return (
    <>
      <Box>
        <Flex>
          <Box
            position='relative'
            bottom='1.3rem'
            mr={2}
            cursor='pointer'
            onClick={onOpen}
          >
            <PKMIcon p={p} />
          </Box>

          <Tabs
            isFitted
            variant='soft-rounded'
            onChange={(i) => setTab(tabs[i])}
            w='calc(100% - 68px)'
            overflowX={'scroll'}
          >
            <TabList>
              {tabs.map((t, i) => <Tab _selected={{ color: 'white', bg: 'brand.200' }} key={`${t}_${i}`}>{t}</Tab>)}
            </TabList>
          </Tabs>
        </Flex>

        <Spacer h={2} />

        {tab === 'Main' && (
          <Box>
            <Main />
            <Divide />
            {PKMFunc.IsPKMA(p) && <Personality p={p} />}
          </Box>
        )}

        {tab === 'Battle' && (
          <Box>
            <Text fontSize='lg' fontWeight='bold'>{t('status')}</Text>
            <Spacer h={4} />
            <Stats {...props} />
            <Divide />

            <Text fontSize='lg' fontWeight='bold'>{t('moves')}</Text>
            <Spacer h={4} />
            <MoveList />
          </Box>
        )}

        {tab === 'Met/OT' && (
          <Box>
            {!isG1(game[0]) && (
              <>
                <Text fontSize='lg' fontWeight='bold'>{t('met.tab')}</Text>
                <Spacer h={4} />
                <Met mon={p} />
                <Divide />
              </>
            )}

            <Text fontSize='lg' fontWeight='bold'>{t('OT')}</Text>
            <Spacer h={4} />
            <OT game={game} ot={p.ot} />
          </Box>
        )}

        {tab === 'Misc' && (
          <Box>
            <Text fontSize='lg' fontWeight='bold'>{t('misc')}</Text>
            <Spacer h={4} />
            <Misc p={p} />
            <Divide />

            {PKMFunc.IsPKMA(p) && (
              <>
                <Text fontSize='lg' fontWeight='bold'>{t('contest.tab')}</Text>
                <Spacer h={4} />
                <Contest p={p} />

                <Divide />

                <Text fontSize='lg' fontWeight='bold'>{t('marking')}</Text>
                <Spacer h={4} />
                <Marking p={p} />

                <Divide />

                <Text fontSize='lg' fontWeight='bold'>{t('ribbon.ribbon')}</Text>
                <Spacer h={4} />
                <Ribbons p={p} />
              </>
            )}
          </Box>
        )}
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Detail p={p} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
