import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { isPK3, ItemData, PKM, PKMFunc } from 'pksav';
import { ItemIcon } from 'src/components';
import { useGender } from 'src/hooks';
import { PKMSprite } from './Icon';

export const Preview: React.FC<{ p?: PKM }> = ({ p }) => {
  if (p == null || PKMFunc.IsDummy(p)) return <Box h='2'></Box>;

  let ball = 4;
  if (isPK3(p)) {
    ball = ItemData.Gen4ID[p.ver][p.met.ball];
  }

  const gender = PKMFunc.Gender(p);

  return (
    <Box>
      <Flex gap={4} py={3} px={2}>
        <ItemIcon itemID4={ball} w='22px' h='22px' />
        <Text fontSize='md' fontWeight='bold'>{PKMFunc.Nickname(p)}</Text>
        {gender !== 'unknown' && <GenderMark g={gender} />}
        <Text fontSize='md' fontWeight='bold'>Lv.{p.lv}</Text>
      </Flex>
      <Center>
        <PKMSprite p={p} width='160px' />
      </Center>
    </Box>
  );
};

const GenderMark: React.FC<{ g: 'male' | 'female' }> = ({ g }) => {
  const [mark, color] = useGender(g);
  return <Text fontWeight='bold' fontSize='md' color={color}>{mark}</Text>;
};
