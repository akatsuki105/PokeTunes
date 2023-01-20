import {
  Center,
  Flex,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { ItemData, PKM } from 'pksav';
import { useLang } from 'src/hooks';
import { useDispatch } from 'react-redux';
import { itemChanged } from 'src/stores/pkm';
import { useTranslation } from 'react-i18next';
import { SelectBox } from 'src/components/Select';
import { ItemIcon, ItemModalContent, StringInput } from 'src/components';
import { Search2Icon } from '@chakra-ui/icons';
import { useState } from 'react';
import { hiraToKana } from 'utils';

export const HeldItem: React.FC<{ p: PKM }> = ({ p }) => {
  const lang = useLang();
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const itemNames = ItemData.Name[p.ver][lang];
  const name = itemNames[p.item];
  const itemIDs = ItemData.Cat[p.ver].heldItems as number[];

  const items = itemIDs.map((id) => {
    return { name: itemNames[id], id };
  });

  const filterHira = query.toLowerCase();
  const filterKana = hiraToKana(filterHira);
  const filteredItems = query === '' ? items : items.filter((item) => {
    return item.name.toLowerCase().includes(filterKana) || item.name.toLowerCase().includes(filterHira) || item.id === 0;
  });

  const onSelect = (itemID: number) => {
    dispatch(itemChanged(itemID));
    onClose();
  };

  return (
    <>
      <FormControl>
        <FormLabel fontSize='sm'>{t('held_item')}</FormLabel>
        <SelectBox
          onClick={() => {
            setQuery('');
            onOpen();
          }}
        >
          <Flex>
            {name}
            <Center pl={2} mt={'3px'}>
              <ItemIcon itemID4={ItemData.Gen4ID[p.ver][p.item]} h='1.2rem' />
            </Center>
          </Flex>
        </SelectBox>
      </FormControl>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t('held_item')}</ModalHeader>
          <ModalBody>
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<Search2Icon color='gray.300' />}
                />
                <StringInput type='text' pl='2.5rem' placeholder={t('item_name')!} value={query} onChange={setQuery} />
              </InputGroup>
              <ItemModalContent items={filteredItems} onSelect={onSelect} />
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
