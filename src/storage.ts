import { Lang } from 'pksav';

export const loadLangConfig = (): Lang => {
  const config = localStorage.getItem('lang');
  if (!config) return 'en';
  switch (config) {
    case 'ja':
      return 'ja';
    default:
      return 'en';
  }
};

export const storeLangConfig = (lang: Lang) => {
  localStorage.setItem('lang', lang);
};

export const loadFRLGAutoDetectEnabled = (): boolean => {
  const config = localStorage.getItem('frlg_auto_detect');
  if (!config) return true;
  switch (config) {
    case 'true':
      return true;
    case 'false':
      return false;
  }
  return true;
};

export const storeFRLGAutoDetectEnabled = (val: boolean) => {
  localStorage.setItem('frlg_auto_detect', val ? 'true' : 'false');
};

export const loadFRLGAutoDetect = (sid: number): 'FR' | 'LG' | '' => {
  if (!loadFRLGAutoDetectEnabled()) return '';

  const config = localStorage.getItem(`frlg_auto_detect_${sid}`);
  if (!config) return '';
  switch (config) {
    case 'FR':
    case 'LG':
      return config;
  }
  return '';
};

export const storeFRLGAutoDetect = (sid: number, ver: 'FR' | 'LG') => {
  if (loadFRLGAutoDetectEnabled()) localStorage.setItem(`frlg_auto_detect_${sid}`, ver);
};
