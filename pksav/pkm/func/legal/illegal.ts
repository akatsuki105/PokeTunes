import { Lang } from 'pksav/data';

export type Problem = Fatal | Warn;

export type Fatal = {
  readonly severity: 'fatal';
  readonly id: string;
  readonly msg: IllegalMessage;
};

export type Warn = {
  readonly severity: 'warn';
  readonly id: string;
  readonly msg: IllegalMessage;
};

type IllegalMessage = string | {
  en: string;
  ja?: string;
};

export const toString = (lang: Lang, msg: IllegalMessage): string => {
  if (typeof msg === 'string') {
    return msg;
  }

  if (lang in msg) return msg[lang]!;
  return msg.en;
};
