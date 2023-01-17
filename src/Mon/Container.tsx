import { Box, BoxProps, Center, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { Game, PKM, PKMData, PKMFunc } from 'pksav';
import { PKMIcon } from './Icon';

const HPBar: React.FC = () => {
  const border = useColorModeValue('#1B9CF4', '#1B9CF4');

  return (
    <Box
      w='64px'
      h='10px'
      borderRadius='lg'
      border='2px'
      borderColor={border}
      bgGradient='linear(to-r, #07FC56, #58FF1E, #86FA15)'
    />
  );
};

export const IconContainer: React.FC<BoxProps> = ({ children, ...props }) => {
  const bgGradient = useColorModeValue('linear(to-t, blackAlpha.200, blackAlpha.50)', 'linear(to-b, whiteAlpha.200, whiteAlpha.50)');
  const hover = useColorModeValue('blackAlpha.400', 'whiteAlpha.400');

  return (
    <Box
      bgGradient={bgGradient}
      borderRadius='lg'
      cursor='pointer'
      _hover={{
        backgroundColor: hover,
      }}
      {...props}
    >
      <Center>
        {children}
      </Center>
    </Box>
  );
};

export const PKMContainer: React.FC<Omit<BoxProps, 'p'> & { game: Game; p: PKM }> = ({ game, p, ...props }) => {
  const bgGradient = useColorModeValue('linear(to-t, blackAlpha.200, blackAlpha.50)', 'linear(to-b, whiteAlpha.200, whiteAlpha.50)');
  const hover = useColorModeValue('blackAlpha.400', 'whiteAlpha.400');
  const [ver, loc] = game;
  const specie = PKMData.Specie[ver][loc][PKMFunc.DexNo(p)] ?? '---';

  return (
    <Box
      {...props}
      bgGradient={bgGradient}
      borderRadius='lg'
      cursor='pointer'
      px={4}
      py={2}
      _hover={{
        backgroundColor: hover,
      }}
    >
      <VStack>
        <Text>Lv.{p.lv}</Text>

        <Center>
          <PKMIcon p={p} />
        </Center>

        <Text>{specie}</Text>
        <HPBar />
      </VStack>
    </Box>
  );
};
