import { Lang } from 'pksav';
import { useTranslation } from 'react-i18next';
import { storeLangConfig } from 'src/storage';
import { StringSelect } from './Select';

export const LangSwitch: React.FC = () => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language;

  return (
    <StringSelect<Lang>
      onChange={(lang) => {
        i18n.changeLanguage(lang);
        storeLangConfig(lang);
      }}
    >
      <option value='en' selected={lang === 'en'}>{t('language.en')}</option>
      <option value='ja' selected={lang === 'ja'}>{t('language.ja')}</option>
    </StringSelect>
  );
};
