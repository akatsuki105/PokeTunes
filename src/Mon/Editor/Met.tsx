import {
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
  SimpleGrid,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { isPK2, isPK3, ItemData, PK2, PK3, PKM } from 'pksav';
import { useLang } from '../../hooks';
import { useDispatch } from 'react-redux';
import { replaced } from 'src/stores/pkm';
import { Met as MetInfo } from 'pksav/pkm/types';
import { Locations } from 'pksav/data/locations';
import { Input, ItemIcon, ItemModalContent, NumberInput, NumberSelect, SelectBox } from 'src/components';

export const Met: React.FC<{ mon: PKM }> = ({ mon }) => {
  return (
    <Box>
      {isPK2(mon) && <Met2 p={mon} />}
      {isPK3(mon) && <Met3 p={mon} />}
    </Box>
  );
};

const Met2: React.FC<{ p: PK2 }> = ({ p }) => {
  const TIMES = ['unk', 'morning', 'day', 'night'] as const;
  const { t } = useTranslation();
  const lang = useLang();
  const dispatch = useDispatch();
  const locations = Locations[p.ver][lang];

  const onChanged = (met: PK2['met']) => {
    dispatch(replaced({ ...p, met } as PKM));
  };

  return (
    <>
      <FormControl>
        <FormLabel fontSize='sm'>{t('met.lv')}</FormLabel>
        <NumberInput value={p.met.lv} min={0} max={100} onChange={(_, lv) => onChanged({ ...p.met, lv })}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <Spacer h={4} />

      <FormControl>
        <FormLabel fontSize='sm'>{t('met.loc')}</FormLabel>
        <NumberSelect onChange={(n) => onChanged({ ...p.met, location: n })}>
          {locations.map((location, i) => <option key={i} value={i} selected={p.met.location === i}>{location}</option>)}
        </NumberSelect>
      </FormControl>

      <Spacer h={4} />

      <FormControl>
        <FormLabel fontSize='sm'>{t('met.time.name')}</FormLabel>
        <Input type='text' value={t(`met.time.${TIMES[p.met.time]}`) as string} isReadOnly />
      </FormControl>
    </>
  );
};

const Met3: React.FC<{ p: PK3 }> = ({ p }) => {
  const { t } = useTranslation();
  const lang = useLang();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const games = ['unk', 'sapphire', 'ruby', 'emerald', 'firered', 'leafgreen'];

  const locations = Locations[p.ver][lang];

  const ballIDs: number[] = [...ItemData.Cat[p.ver].balls];
  const itemNames = ItemData.Name[p.ver][lang];
  const balls = ballIDs.map((id) => {
    return { name: itemNames[id], id };
  });

  const onChanged = (met: MetInfo) => {
    dispatch(replaced({ ...p, met } as PKM));
  };

  return (
    <SimpleGrid columns={1} spacing={4}>
      <FormControl>
        <FormLabel fontSize='sm'>{t('met.originGame')}</FormLabel>
        <NumberSelect onChange={(n) => onChanged({ ...p.met, game: n })}>
          {games.map((game, i) => <option key={i} value={i} selected={p.met.game === i}>{t(`game.${game}`)}</option>)}
        </NumberSelect>
      </FormControl>

      <FormControl>
        <FormLabel fontSize='sm'>{t('met.loc')}</FormLabel>
        <NumberSelect onChange={(n) => onChanged({ ...p.met, location: n })}>
          {locations.map((location, i) => <option key={i} value={i} selected={p.met.location === i}>{location}</option>)}
        </NumberSelect>
      </FormControl>

      <FormControl>
        <FormLabel fontSize='sm'>{t('met.lv')}</FormLabel>
        <NumberInput value={p.met.lv} min={0} max={100} onChange={(_, lv) => onChanged({ ...p.met, lv })}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <>
        <FormControl>
          <FormLabel fontSize='sm'>{t('met.ball')}</FormLabel>
          <SelectBox
            onClick={onOpen}
          >
            <Flex>
              {itemNames[p.met.ball]}
              <Center pl={2} mt='3px'>
                <ItemIcon itemID4={p.met.ball} h='1.2rem' />
              </Center>
            </Flex>
          </SelectBox>
        </FormControl>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody p={4}>
              <ItemModalContent
                items={balls}
                onSelect={(ball: number) => {
                  onChanged({ ...p.met, ball });
                  onClose();
                }}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    </SimpleGrid>
  );
};
