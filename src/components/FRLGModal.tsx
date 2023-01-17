import { Box, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Text } from '@chakra-ui/react';
import { SAV3 } from 'pksav';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/main';
import { storeFRLGAutoDetect } from 'src/storage';
import { verReplaced } from 'src/stores/sav';
import { StringSelect } from './Select';

const FRLGModalContent: React.FC<{ onSelect: (ver: 'FR' | 'LG') => void }> = ({ onSelect }) => {
  const { t } = useTranslation();

  return (
    <Box px={4}>
      <Box>
        <Text>{t('version_selection.frlg')}</Text>
        <Spacer h={2} />
        <Text>{t('version_selection.please')}</Text>
      </Box>
      <Spacer h={4} />
      <StringSelect<'FR' | 'LG'> onChange={onSelect}>
        <option value='FR'>{t('game.firered')}</option>
        <option value='LG'>{t('game.leafgreen')}</option>
      </StringSelect>
    </Box>
  );
};

export const FRLGModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen: _isOpen, onClose }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const old = useSelector((state: RootState) => state.sav.game[0]) as 'FR' | 'LG';
  const sid = useSelector((state: RootState) => (state.sav as SAV3).sid);
  const [ver, setVer] = useState<'FR' | 'LG'>(old);

  const onClick = () => {
    dispatch(verReplaced(ver));
    storeFRLGAutoDetect(sid, ver);
    onClose();
  };
  const isOpen = ['FR', 'LG'].includes(old) && _isOpen;

  return (
    <Modal closeOnOverlayClick={false} closeOnEsc={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t('version_selection.title')}</ModalHeader>
        <ModalBody px={4}>
          <FRLGModalContent onSelect={setVer} />
        </ModalBody>

        <ModalFooter>
          <Button color='white' colorScheme='brand' onClick={onClick}>OK</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
