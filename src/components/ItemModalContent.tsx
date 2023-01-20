import { Box, Center, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import { ItemData } from 'pksav';
import { useSelector } from 'react-redux';
import { RootState } from 'src/main';
import { ItemIcon } from './ItemIcon';

type ItemData = {
  name: string;
  id: number; // Not gen4
};

export const ItemModalContent: React.FC<{ items: ItemData[]; onSelect: (itemID: number) => void }> = ({ items, onSelect }) => {
  const ver = useSelector((state: RootState) => state.sav.game[0]);
  const hover = useColorModeValue('blackAlpha.400', 'whiteAlpha.400');

  return (
    <Box maxH='lg' overflow='scroll' borderWidth='1px' borderRadius='lg'>
      {items.map(({ name, id }, i) => {
        const bg = ['blackAlpha.200', 'whiteAlpha.200'][i % 2];
        const styles = { py: 2, bg, cursor: 'pointer' };

        return (
          <Box
            key={`${name}_${id}`}
            {...styles}
            onClick={() => onSelect(id)}
            _hover={{
              backgroundColor: hover,
            }}
          >
            <HStack>
              <Center ml={3} w='2rem'>
                <ItemIcon itemID4={ItemData.Gen4ID[ver][id]} />
              </Center>
              <Box pl={4}>
                <Text fontWeight='bold'>{name}</Text>
              </Box>
            </HStack>
          </Box>
        );
      })}
    </Box>
  );
};
