import { useBreakpointValue } from '@chakra-ui/react';

export const useSmallerScreen = (size: 'sm' | 'md' | 'lg' | 'xl' | '2xl'): boolean => {
  const smaller = useBreakpointValue({ base: true, [size]: false });
  return smaller ?? false;
};
