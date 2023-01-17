import { Box, Flex } from '@chakra-ui/react';
import { PKM, PKMA } from 'pksav';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { replaced } from 'src/stores/pkm';
import { bit, setBit } from 'utils';

const marks = ['●', '■', '▲', '❤'] as const;
type Mark = typeof marks[number];

export const Marking: React.FC<{ p: PKMA }> = ({ p }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const circle = ((p.marking >> 0) & 0b1) === 1; // ●
  const square = ((p.marking >> 1) & 0b1) === 1; // ■
  const triangle = ((p.marking >> 2) & 0b1) === 1; // ▲
  const heart = ((p.marking >> 3) & 0b1) === 1; // ❤

  const toggleMark = (mark: Mark) => {
    const idx = marks.indexOf(mark);
    const old = bit(p.marking, idx);
    const marking = setBit(p.marking, idx, !old);
    dispatch(replaced({ ...p, marking } as PKM));
  };

  return (
    <Flex gap={4} borderWidth='1px' w='max-content' borderRadius='lg' px={4} py={2}>
      <Box cursor='pointer' fontSize='lg' color={circle ? 'white' : 'whiteAlpha.500'} onClick={() => toggleMark('●')}>●</Box>
      <Box cursor='pointer' fontSize='lg' color={square ? 'white' : 'whiteAlpha.500'} onClick={() => toggleMark('■')}>■</Box>
      <Box cursor='pointer' fontSize='lg' color={triangle ? 'white' : 'whiteAlpha.500'} onClick={() => toggleMark('▲')}>▲</Box>
      <Box cursor='pointer' fontSize='lg' color={heart ? 'white' : 'whiteAlpha.500'} onClick={() => toggleMark('❤')}>❤︎</Box>
    </Flex>
  );
};
