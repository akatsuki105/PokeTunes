import React, { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Box, ChakraProvider, ColorModeScript, useColorModeValue } from '@chakra-ui/react';
import theme from './theme';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './i18n';
import { configureStore } from '@reduxjs/toolkit';
import { PKMSlice } from './stores/pkm';
import { Provider as ReduxProvider } from 'react-redux';
import { savSlice } from './stores/sav';
import '@fontsource/inter';
import '@fontsource/noto-sans-jp';
import { loadLangConfig } from './storage';
import { useLang } from './hooks';

const store = configureStore({
  reducer: {
    pkm: PKMSlice.reducer,
    sav: savSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

const ColorModeProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const bg = useColorModeValue('#FFFFFF', '#181818');
  const color = useColorModeValue('black', 'white');

  return <Box bg={bg} color={color}>{children}</Box>;
};

const LanguageProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();
  const cur = useLang();
  const lang = loadLangConfig();
  if (lang !== cur) i18n.changeLanguage(lang);

  return <>{children}</>;
};

const Providers: React.FC<PropsWithChildren> = ({ children }) => (
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <div>
      <ColorModeProvider>
        <I18nextProvider i18n={i18n}>
          <LanguageProvider>
            <ReduxProvider store={store}>{children}</ReduxProvider>
          </LanguageProvider>
        </I18nextProvider>
      </ColorModeProvider>
    </div>
  </ChakraProvider>
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
);
