import { Box, SimpleGrid, Spacer } from '@chakra-ui/react';
import { Specie } from './Specie';
import { HeldItem } from './HeldItem';
import { Nick } from './Nick';
import { useSelector } from 'react-redux';
import { RootState } from 'src/main';
import { isPK1, PKMFunc } from 'pksav';
import { Exp, Level } from './Level';

export const Main: React.FC = () => {
  const p = useSelector((state: RootState) => state.pkm);

  return (
    <Box>
      <Specie p={p} />
      <Spacer h={4} />

      <Nick p={p} />
      <Spacer h={4} />

      <SimpleGrid columns={2} spacing={4}>
        <Level p={p} />
        <Exp p={p} />
      </SimpleGrid>

      {!isPK1(p) && (
        <>
          <Spacer h={4} />
          <HeldItem p={p} />
        </>
      )}
    </Box>
  );
};
