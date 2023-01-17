import { slice } from 'utils';
import { SIZE_SECTOR, SIZE_SECTOR_USED } from './constants';

// Get section N offset from section 0 offset.
export const getSectionOffset = (section0: number, sectionID: number): number => {
  const slot0 = [...Array(14)].map((_, i) => SIZE_SECTOR * i);
  const slot1 = [...Array(14)].map((_, i) => 0x00E000 + SIZE_SECTOR * i);
  if (slot0.includes(section0)) {
    const idx = (slot0.indexOf(section0) + sectionID) % 14;
    return slot0[idx];
  }
  if (slot1.includes(section0)) {
    const idx = (slot1.indexOf(section0) + sectionID) % 14;
    return slot1[idx];
  }
  return 0;
};

export const getPCBuffer = (buf: Uint8Array, section0: number): Uint8Array => {
  const result = new Uint8Array(SIZE_SECTOR_USED * 9);
  for (let i = 5; i < 14; i++) {
    const section = slice(buf, getSectionOffset(section0, i), SIZE_SECTOR_USED);
    result.set(section, SIZE_SECTOR_USED * (i - 5));
  }
  return result;
};
