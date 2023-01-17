import {
  Center,
  Flex,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { ItemData, PKM } from 'pksav';
import { useLang } from 'src/hooks';
import { useDispatch } from 'react-redux';
import { itemChanged } from 'src/stores/pkm';
import { useTranslation } from 'react-i18next';
import { SelectBox } from 'src/components/Select';
import { ItemIcon, ItemModalContent } from 'src/components';

export const HeldItem: React.FC<{ p: PKM }> = ({ p }) => {
  const lang = useLang();
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const name = ItemData.Name[p.ver][lang][p.item];
  const itemIDs = ItemData.Cat[p.ver].heldItems as number[];

  const onSelect = (itemID: number) => {
    dispatch(itemChanged(itemID));
    onClose();
  };

  return (
    <>
      <FormControl>
        <FormLabel fontSize='sm'>{t('held_item')}</FormLabel>
        <SelectBox onClick={onOpen}>
          <Flex>
            {name}
            <Center pl={2} mt={'3px'}>
              {p.item > 0 && <ItemIcon itemID4={ItemData.Gen4ID[p.ver][p.item]} h='1.2rem' />}
            </Center>
          </Flex>
        </SelectBox>
      </FormControl>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t('held_item')}</ModalHeader>
          <ModalBody>
            <ItemModalContent items={itemIDs} onSelect={onSelect} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
