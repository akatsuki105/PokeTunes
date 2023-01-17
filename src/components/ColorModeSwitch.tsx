import { Switch, useColorMode, useColorModeValue } from '@chakra-ui/react';

export const ColorModeSwitch: React.FC = () => {
  const { toggleColorMode } = useColorMode();
  const isChecked = useColorModeValue(false, true);

  return <Switch isChecked={isChecked} onChange={toggleColorMode} size='md' />;
};
