import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import { editPouch, GameVersion, getItems, hmGen4IDs, ItemData, Pouch, tmGen4IDs, TMHMFunc } from 'pksav';
import { Item } from 'pksav/sav/types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ItemIcon } from 'src/components';
import { useLang } from 'src/hooks';
import { pouchReplaced } from 'src/stores/sav';
import { ItemEdit } from './EditModal';

export const PouchItems: React.FC<{ p: Pouch; ver: GameVersion }> = ({ p, ver }) => {
  const lang = useLang();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const [idx, setIdx] = useState(0);
  const [edit, setEdit] = useState<Item>(p.noItem);

  const items = getItems(p);

  const onSave = () => {
    dispatch(pouchReplaced(editPouch(p, idx, edit)));
    onClose();
  };

  return (
    <>
      <TableContainer>
        <Table>
          <Tbody>
            {items.map(([id, amount], i) => {
              const gen4ID = ItemData.Gen4ID[ver][id];
              let name = ItemData.Name[ver][lang][id];
              if (tmGen4IDs.includes(gen4ID)) {
                const tmNo = tmGen4IDs.indexOf(gen4ID);
                name += `\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${TMHMFunc.TMName(lang, tmNo)}`;
              }
              if (hmGen4IDs.includes(gen4ID)) {
                const hmNo = hmGen4IDs.indexOf(gen4ID);
                name += `\u00A0\u00A0${TMHMFunc.HMName(lang, ver, hmNo)}`;
              }

              const count = p.name === 'keyItems' ? '' : String(amount);

              return (
                <Tr
                  key={i}
                  bg={i % 2 > 0 ? '#553C9A88' : 'transparent'}
                  cursor='pointer'
                  onClick={(e) => {
                    setIdx(i);
                    setEdit([id, amount]);
                    onOpen();
                  }}
                  _hover={{
                    bg: i % 2 > 0 ? '#553C9A' : 'whiteAlpha.300',
                  }}
                >
                  <Td w='5rem'>
                    <ItemIcon itemID4={gen4ID} pr={2} />
                  </Td>
                  <Td>{name}</Td>
                  <Td w='5rem'>{count}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <ItemEdit
              ver={ver}
              lang={lang}
              category={p.name}
              item={edit}
              setItem={setEdit}
              max={p.name === 'keyItems' ? 1 : 99}
            />
          </ModalBody>

          <ModalFooter>
            <Button color='white' colorScheme='brand' mr={3} onClick={onSave}>Save</Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
