import {
  Box,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Tab,
  TabList,
  Tabs,
  Text,
  useDisclosure,
  VisuallyHiddenInput,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { flashSAV, Gen, isSAV3, newDummyMon, parseSAV, PKM, PKMFunc } from 'pksav';
import { Mon } from './Mon';
import { download } from 'utils';
import { Sav } from './Sav';
import { LangSwitch, Upload } from 'src/components';
import { Item } from './Item';
import { DownloadIcon, HamburgerIcon, SettingsIcon, ViewIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { replaced } from './stores/pkm';
import { RootState } from './main';
import { savReplaced } from './stores/sav';
import { useSmallerScreen } from 'src/hooks';
import { useTranslation } from 'react-i18next';
import { FRLGModal } from './components/FRLGModal';
import { loadFRLGAutoDetect } from './storage';

type Tab = 'Pokemon' | 'Sav' | 'Item';
type Modal = 'Pokemon' | 'Setting';

const App: React.FC = () => {
  const sav = useSelector((state: RootState) => state.sav);
  const dispatch = useDispatch();
  const [bin, setBin] = useState<Uint8Array>(new Uint8Array(0));
  const [tab, setTab] = useState<Tab>('Pokemon');
  const { onClose } = useDisclosure();

  const onLoad = (title: string, buf: Uint8Array) => {
    const sav = parseSAV(buf);
    if (isSAV3(sav) && ['FR', 'LG'].includes(sav.game[0])) {
      const ver = loadFRLGAutoDetect(sav.sid);
      if (ver !== '') {
        sav.game[0] = ver;
        sav.shouldGameSelect = false;
      }
    }

    dispatch(savReplaced(sav));
    setBin(buf);
    setMon(newDummyMon(sav.game));
  };

  // 現在のスロットに反映
  const setMon = (mon: PKM) => {
    dispatch(replaced(mon));
  };

  return (
    <Box className='App' minH='100vh'>
      <Header bin={bin} setTab={setTab} />

      {sav.game[0] === 'Invalid' && (
        <Box p={6} h='calc(100vh - 5rem)'>
          <Upload id='sav-upload' load={onLoad} />
        </Box>
      )}
      {sav.game[0] !== 'Invalid' && (
        <Box w='100%'>
          {(tab === 'Pokemon') && <Mon />}
          {(tab === 'Item') && <Item sav={sav} />}
          {(tab === 'Sav') && <Sav />}
        </Box>
      )}

      {isSAV3(sav) && <FRLGModal isOpen={sav.shouldGameSelect} onClose={onClose} />}
    </Box>
  );
};

const Header: React.FC<{ bin: Uint8Array; setTab: (t: Tab) => void }> = ({ bin, setTab }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const sav = useSelector((state: RootState) => state.sav);
  const isMobile = useSmallerScreen('md');
  const ref = useRef<HTMLInputElement>(null);
  const r = new FileReader();
  const h = isMobile ? '4rem' : '5rem';
  const tabWidth = !isMobile ? '8rem' : '2rem';

  const exportSav = () => {
    const buf = flashSAV(sav, bin);
    const blob = new Blob([buf], { 'type': 'application/octet-stream' });
    download('exports.sav', blob);
  };

  r.onloadend = () => {
    const bytes = new Uint8Array(r.result as ArrayBuffer);
    const pkm = PKMFunc.Parse(sav.game, bytes);
    dispatch(replaced(pkm));
  };

  const Title = () => {
    if (isMobile) {
      return <Box p='2' w='32px'>P</Box>;
    }

    return (
      <Box p='2'>
        <Heading size='md'>PokeTunes</Heading>
      </Box>
    );
  };

  return (
    <>
      <Flex minWidth='max-content' h={h} alignItems='center' borderBottom='1px' gap='2' p={2}>
        <Title />

        <Spacer />

        <Box>
          <Tabs variant='soft-rounded'>
            <TabList>
              <Tab w={tabWidth} _selected={{ color: 'white', bg: 'brand.200' }} onClick={() => setTab('Pokemon')}>
                {!isMobile ? 'Pokemon' : 'P'}
              </Tab>
              <Tab w={tabWidth} _selected={{ color: 'white', bg: 'brand.200' }} onClick={() => setTab('Item')}>
                {!isMobile ? 'Item' : 'I'}
              </Tab>
              <Tab w={tabWidth} _selected={{ color: 'white', bg: 'brand.200' }} onClick={() => setTab('Sav')}>
                {!isMobile ? 'Sav' : 'S'}
              </Tab>
            </TabList>
          </Tabs>
        </Box>

        <Spacer />

        <Box>
          <HStack>
            <ButtonGroup gap='2'>
              <IconButton onClick={exportSav} aria-label='Export save' icon={<DownloadIcon />} />
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label='Options'
                  icon={<HamburgerIcon />}
                />
                <MenuList>
                  <MenuItem icon={<ViewIcon />} onClick={() => ref.current?.click()} isDisabled={sav.game[0] === 'Invalid'}>
                    {t('load_pkm')}
                    <VisuallyHiddenInput
                      type='file'
                      accept={`.pk${Gen[sav.game[0]]}`}
                      ref={ref}
                      onChange={(e) => {
                        const file = e.target.files![0];
                        r.readAsArrayBuffer(file);
                      }}
                    />
                  </MenuItem>
                  <MenuItem icon={<SettingsIcon />} onClick={onOpen}>{t('settings.settings')}</MenuItem>
                </MenuList>
              </Menu>
            </ButtonGroup>
          </HStack>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{t('settings.settings')}</ModalHeader>
            <ModalCloseButton />
            <ModalBody p={4}>
              <Setting />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
};

const Setting: React.FC = () => {
  const { t } = useTranslation();
  const ver = useSelector((state: RootState) => state.sav.game[0]);

  return (
    <Box p={4} borderRadius='lg' borderWidth='1px'>
      <Box>
        <Text as='b'>{t('settings.language')}</Text>
        <Spacer h={2} />
        <LangSwitch />
      </Box>

      {
        /* {['FR', 'LG'].includes(ver) && (
        <>
          <Spacer h={4} />
          <Divider />
          <Spacer h={4} />

          <Box>
            <Text as='b'>Remember version selection</Text>
            <Spacer h={2} />
            TODO
          </Box>
        </>
      )} */
      }
    </Box>
  );
};

export default App;
