import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English
import enTop from '../lang/en.json';
import enPkm from '../lang/pkm/en.json';
import enEvent from '../lang/event/en.json';

// Japanese
import jaTop from '../lang/ja.json';
import jaPkm from '../lang/pkm/ja.json';
import jaEvent from '../lang/event/ja.json';

const en = {
  translation: {
    ...enTop,
    ...enPkm,
    event: enEvent,
  },
};

const ja: typeof en = {
  translation: {
    ...jaTop,
    ...jaPkm,
    event: jaEvent,
  },
};

export const resources = { en, ja } as const;

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
});

export default i18n;
