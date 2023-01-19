import {
  Box,
  Center,
  FormControl,
  FormLabel,
  HStack,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { GameVersion, PKM, PKMData, PKMFunc } from 'pksav';
import { useLang } from 'src/hooks';
import { useDispatch } from 'react-redux';
import { replaced } from 'src/stores/pkm';
import { PKMIconURL } from '../../Icon';
import { useTranslation } from 'react-i18next';
import { SelectBox, StringInput } from 'src/components';
import { zeropad } from 'utils';
import { useState } from 'react';
import { Search2Icon } from '@chakra-ui/icons';

type DexData = {
  name: string;
  dexno: number;
};

export const Specie: React.FC<{ p: PKM }> = ({ p }) => {
  const lang = useLang();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [query, setQuery] = useState('');

  const onSelect = (dexno: number) => {
    const id = getInternalID(p.ver, dexno);
    if (id >= 0) {
      dispatch(replaced(PKMFunc.SetSpecie(p, id)));
    }
  };

  const mons = PKMData.Specie[p.ver][lang].slice(1).map((name, dexno) => {
    return { name, dexno: dexno + 1 };
  }).slice(0, -1);
  const filteredMons = query === '' ? mons : mons.filter((mon) => {
    return mon.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <>
      <FormControl>
        <FormLabel fontSize='sm'>{t('specie')}</FormLabel>
        <SelectBox
          onClick={() => {
            setQuery('');
            onOpen();
          }}
        >
          {PKMFunc.Specie(p, lang)}
        </SelectBox>
      </FormControl>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t('specie')}</ModalHeader>
          <ModalBody>
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<Search2Icon color='gray.300' />}
                />
                <StringInput type='text' pl='2.5rem' placeholder={t('specie_name')!} value={query} onChange={setQuery} />
              </InputGroup>
              <SpecieModalContent mons={filteredMons} onSelect={onSelect} onClose={onClose} />
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const SpecieModalContent: React.FC<{ mons: DexData[]; onSelect: (dexno: number) => void; onClose: () => void }> = (
  { mons, onSelect, onClose },
) => {
  const hover = useColorModeValue('blackAlpha.400', 'whiteAlpha.400');
  const onClick = (dexno: number) => {
    onSelect(dexno);
    onClose();
  };

  return (
    <Box maxH='lg' overflow='scroll' borderWidth='1px' borderRadius='lg'>
      {mons.map((dex, i) => {
        const { name, dexno } = dex;
        const src = PKMIconURL(dexno.toString());

        const bg = ['blackAlpha.200', 'whiteAlpha.200'][i % 2];
        const styles = { py: 2, bg, cursor: 'pointer' };

        return (
          <Box
            key={dexno}
            {...styles}
            onClick={() => onClick(dexno)}
            _hover={{ backgroundColor: hover }}
          >
            <HStack>
              <Center w='auto'>
                <img src={src} />
              </Center>
              <Box pl={4}>
                <Text fontWeight='bold'>No.{zeropad(dexno, 3)}&nbsp;&nbsp;&nbsp;&nbsp;{name}</Text>
              </Box>
            </HStack>
          </Box>
        );
      })}
    </Box>
  );
};

const getInternalID = (ver: GameVersion, dexno: number): number => {
  switch (ver) {
    case 'RB':
    case 'YW': {
      const ids: number[] = [...PKMData.DexNo[1]];
      return ids.indexOf(dexno);
    }

    case 'RS':
    case 'FR':
    case 'LG':
    case 'E': {
      const ids: number[] = [...PKMData.DexNo[3]];
      return ids.indexOf(dexno);
    }

    case 'Invalid': {
      return -1;
    }
  }

  return dexno;
};
