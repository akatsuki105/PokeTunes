import { Container } from '@chakra-ui/react';
import { isSAV1, isSAV2, isSAV3 } from 'pksav';
import { useSelector } from 'react-redux';
import { RootState } from 'src/main';
import { Sav1 } from './Sav1';
import { Sav2 } from './Sav2';
import { Sav3 } from './Sav3';

export const Sav: React.FC = () => {
  const sav = useSelector((state: RootState) => state.sav);

  return (
    <Container maxW='xl' py={8}>
      {isSAV1(sav) && <Sav1 sav={sav} />}
      {isSAV2(sav) && <Sav2 sav={sav} />}
      {isSAV3(sav) && <Sav3 sav={sav} />}
    </Container>
  );
};
