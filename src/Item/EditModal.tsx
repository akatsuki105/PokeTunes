import { Box, Center, Flex, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Spacer } from '@chakra-ui/react';
import { GameVersion, ItemData, Lang, PouchName } from 'pksav';
import { Item } from 'pksav/sav/types';
import { ItemIcon, NumberSelect } from 'src/components';

type Props = {
  ver: GameVersion;
  lang: Lang;
  category: PouchName;
  item: Item;
  setItem: (item: Item) => void;
  max?: number;
};

export const ItemEdit: React.FC<Props> = ({ ver, lang, item, setItem, category, max = 99 }) => {
  const itemIDs = ItemData.Cat[ver][category] as number[];
  const itemNames = ItemData.Name[ver][lang];
  const gen4ID = ItemData.Gen4ID[ver][item[0]];

  let items: { name: string; id: number }[] = [];
  itemNames.forEach((name, id) => {
    switch (true) {
      case id === 0:
        items.push({ name, id });
        break;
      case itemIDs.includes(id):
        items.push({ name, id });
        break;
      case id === item[0]:
        items.push({ name, id });
        break;
    }
  });

  const labelStyles = {
    mt: '2',
    fontSize: 'sm',
  };

  return (
    <Box p={4} pb={8}>
      <Flex>
        <Center borderRadius='lg' w='3rem' h='3rem' mr={2}>
          <ItemIcon itemID4={gen4ID} />
        </Center>

        <NumberSelect onChange={(itemID) => setItem([itemID, item[1]])} h='3rem'>
          {items.map(({ name, id }) => {
            return <option key={`${name}_${id}`} selected={item[0] === id} value={id}>{name}</option>;
          })}
        </NumberSelect>
      </Flex>

      <Spacer h={4} />

      <Slider
        colorScheme='brand'
        min={0}
        max={max}
        defaultValue={item[1]}
        onChange={(val) => setItem([item[0], val])}
      >
        <SliderMark value={0} {...labelStyles} ml={'-2.5'}>
          0
        </SliderMark>
        <SliderMark value={max} {...labelStyles} mr={'2.5'}>
          {max}
        </SliderMark>

        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={6} />
      </Slider>
    </Box>
  );
};
