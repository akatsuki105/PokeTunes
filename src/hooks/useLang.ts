import { Lang } from 'pksav';
import { useTranslation } from 'react-i18next';

export const useLang = (): Lang => {
  const { i18n } = useTranslation();
  const lang = (['en', 'ja'].includes(i18n.language) ? i18n.language : 'en') as Lang;
  return lang;
};
