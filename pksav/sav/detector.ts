import { loadU32LE } from 'utils';
import { GameVersion, Locale } from '../data';
import { Offset1 } from './sav1';
import { Offset2 } from './sav2';
import { isAllMainSectorsPresent } from './sav3';

export const getSAVType = (sav: Uint8Array): [GameVersion, Locale] => {
  const detects = [getIsG1SAV, getIsG2SAV, getIsG3SAV];

  for (const detect of detects) {
    const [ver, loc] = detect(sav);
    if (ver !== 'Invalid') return [ver, loc];
  }

  return ['Invalid', 'en'];
};

const getIsG1SAV = (sav: Uint8Array): [GameVersion, Locale] => {
  if (getIsG1SAVU(sav)) {
    return ['RB', 'en'];
  }
  if (getIsG1SAVJ(sav)) {
    return ['RB', 'ja'];
  }
  return ['Invalid', 'en'];
};

const getIsG1SAVU = (sav: Uint8Array): boolean => {
  return isG12ListValid(sav, Offset1.Party['en'], 20) && isG12ListValid(sav, Offset1.CurrentBox['en'], 20);
};

const getIsG1SAVJ = (sav: Uint8Array): boolean => {
  return isG12ListValid(sav, Offset1.Party['ja'], 30) && isG12ListValid(sav, Offset1.CurrentBox['ja'], 30);
};

const getIsG2SAV = (sav: Uint8Array): [GameVersion, Locale] => {
  {
    const ver = getIsG2SAVU(sav);
    if (ver !== 'Invalid') return [ver, 'en'];
  }
  {
    const ver = getIsG2SAVJ(sav);
    if (ver !== 'Invalid') return [ver, 'ja'];
  }
  return ['Invalid', 'en'];
};

const getIsG2SAVU = (sav: Uint8Array): GameVersion => {
  if (isG12ListValid(sav, Offset2.Party['en']['GS'], 20) && isG12ListValid(sav, 0x2D6C, 20)) {
    return 'GS';
  }
  if (isG12ListValid(sav, Offset2.Party['en']['C'], 20) && isG12ListValid(sav, 0x2D10, 20)) {
    return 'C';
  }
  return 'Invalid';
};

const getIsG2SAVJ = (sav: Uint8Array): GameVersion => {
  if (!isG12ListValid(sav, 0x2D10, 30)) {
    return 'Invalid';
  }
  if (isG12ListValid(sav, Offset2.Party['ja']['GS'], 30)) {
    return 'GS';
  }
  if (isG12ListValid(sav, Offset2.Party['ja']['C'], 30)) {
    return 'C';
  }
  return 'Invalid';
};

const isG12ListValid = (sav: Uint8Array, offset: number, listCount: number) => {
  const numEntries = sav[offset];
  if (numEntries > listCount) return false;

  const terminate = sav[offset + 1 + numEntries];
  return terminate === 0xFF;
};

const getIsG3SAV = (sav: Uint8Array): [GameVersion, Locale] => {
  for (let slot = 0; slot < 2; slot++) {
    const [ok, section0] = isAllMainSectorsPresent(sav, slot as (0 | 1));
    if (ok) {
      const val = loadU32LE(sav, section0 + 0xAC);
      switch (val) {
        case 0:
          return ['RS', 'en'];
        case 1:
          return ['FR', 'en'];
        default:
          return ['E', 'en'];
      }
    }
  }

  return ['Invalid', 'en'];
};
