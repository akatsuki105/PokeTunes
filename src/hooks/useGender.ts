import { useColorModeValue } from '@chakra-ui/react';
import { Gender } from 'pksav';

export const useGender = (g: Gender) => {
  const intensity = useColorModeValue('500', '700');

  switch (g) {
    case 'male':
      return ['♂', `cyan.${intensity}`];
    case 'female':
      return ['♀', `pink.${intensity}`];
    case 'unknown':
      return ['', 'black'];
  }
};
