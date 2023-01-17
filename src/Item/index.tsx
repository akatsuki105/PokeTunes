import { Box, Button, Container, HStack, Spacer } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { SAV } from 'pksav';
import { PouchItems } from './Pouch';
import { useState } from 'react';
import { NumberSelect, Select } from 'src/components';

export const Item: React.FC<{ sav: SAV }> = ({ sav }) => {
  const { t } = useTranslation();
  const [idx, _setIdx] = useState(0);

  const pouchs = Object.keys(sav.bag);
  if (!pouchs.length) return <></>;
  const setPouch = (n: number) => {
    if (n < 0) n += pouchs.length;
    _setIdx(n);
  };

  return (
    <Container maxW='xl' py={8}>
      <HStack mx={16}>
        <Button onClick={() => setPouch((idx - 1) % pouchs.length)}>◀︎</Button>
        <NumberSelect onChange={setPouch} mx={4}>
          {pouchs.map((name, i) => <option key={name} value={i} selected={i === idx}>{t(`pouch.${name}`)}</option>)}
        </NumberSelect>
        <Button onClick={() => setPouch((idx + 1) % pouchs.length)}>▶︎</Button>
      </HStack>

      <Spacer h={4} />

      <PouchContainer>
        <PouchItems p={sav.bag[pouchs[idx]]} ver={sav.game[0]} />
      </PouchContainer>
    </Container>
  );
};

const PouchContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box h='xl' overflow='scroll' borderWidth='1px' borderRadius='lg'>
      {children}
    </Box>
  );
};
