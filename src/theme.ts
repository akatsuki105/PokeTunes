import { createMultiStyleConfigHelpers, extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { numberInputAnatomy } from '@chakra-ui/anatomy';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(numberInputAnatomy.keys);

// https://chakra-ui.com/docs/styled-system/color-mode

const numberInputTheme = defineMultiStyleConfig({
  baseStyle: {
    field: {
      _light: {
        _hover: {
          borderColor: 'brand.200',
        },
      },
      _dark: {
        _hover: {
          borderColor: 'brand.200',
        },
      },
    },
  },
});

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const shadows = {
  outline: '0 0 0 3px var(--chakra-colors-brand-200)',
};

const theme = extendTheme({
  components: { NumberInput: numberInputTheme },
  config,
  fonts: {
    heading: `'Noto Sans JP', 'Inter', sans-serif`,
    body: `'Noto Sans JP', 'Inter', sans-serif`,
  },
  colors: {
    brand: {
      bg: '#553C9A',
      hover: '#6B46C1',
      text: '#805AD5',
      check: '#EDF2F7',
      50: '#553C9A',
      100: '#553C9A',
      200: '#553C9A', // normal
      300: '#6B46C1', // hover
      400: '#553C9A',
      500: '#553C9A',
      600: '#553C9A',
      700: '#553C9A',
      800: '#553C9A',
      900: '#553C9A',
    },
  },
  shadows,
});

export default theme;
