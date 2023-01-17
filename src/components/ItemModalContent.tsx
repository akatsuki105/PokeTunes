import { Box, Center, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import { ItemData } from 'pksav';
import { useSelector } from 'react-redux';
import { useLang } from 'src/hooks';
import { RootState } from 'src/main';
import { ItemIconURL } from './ItemIcon';

export const ItemModalContent: React.FC<{ items: number[]; onSelect: (itemID: number) => void }> = ({ items, onSelect }) => {
  const lang = useLang();
  const ver = useSelector((state: RootState) => state.sav.game[0]);
  const hover = useColorModeValue('blackAlpha.400', 'whiteAlpha.400');

  const itemNames = ItemData.Name[ver][lang];

  return (
    <Box maxH='lg' overflow='scroll' borderWidth='1px' borderRadius='lg'>
      {items.map((id, i) => {
        const name = itemNames[id];
        const bg = ['blackAlpha.200', 'whiteAlpha.200'][i % 2];
        const styles = { py: 2, bg, cursor: 'pointer' };
        const src = ItemIconURL(ItemData.Gen4ID[ver][id]);

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
                {id ? <img src={src} /> : <></>}
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
