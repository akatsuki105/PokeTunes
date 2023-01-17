import {
  Box,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
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
import { SelectBox } from 'src/components';
import { zeropad } from 'utils';

type DexData = {
  name: string;
  dexno: number;
};

export const Specie: React.FC<{ p: PKM }> = ({ p }) => {
  const lang = useLang();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSelect = (dexno: number) => {
    const id = getInternalID(p.ver, dexno);
    if (id >= 0) {
      dispatch(replaced(PKMFunc.SetSpecie(p, id)));
    }
  };

  const mons = PKMData.Specie[p.ver][lang].slice(1).map((name, dexno) => {
    return { name, dexno: dexno + 1 };
  });

  return (
    <>
      <FormControl>
        <FormLabel fontSize='sm'>{t('specie')}</FormLabel>
        <SelectBox onClick={onOpen}>{PKMFunc.Specie(p, lang)}</SelectBox>
      </FormControl>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t('specie')}</ModalHeader>
          <ModalBody>
            <SpecieModalContent mons={mons} onSelect={onSelect} onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const SpecieModalContent: React.FC<{ mons: DexData[]; onSelect: (n: number) => void; onClose: () => void }> = (
  { mons, onSelect, onClose },
) => {
  const hover = useColorModeValue('blackAlpha.400', 'whiteAlpha.400');
  const onClick = (n: number) => {
    onSelect(n);
    onClose();
  };

  return (
    <Box maxH='lg' overflow='scroll' borderWidth='1px' borderRadius='lg'>
      {mons.slice(0, -1).map((dex, i) => {
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
    case 'Invalid': {
      return -1;
    }
  }

  return dexno;
};
