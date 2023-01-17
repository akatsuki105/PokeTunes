import { loadU32LE, slice, storeU16LE, storeU32LE } from 'utils';
import { SAV3 } from './index';
import { SIZE_SECTOR, SIZE_SECTOR_USED } from './constants';
import { getPCBuffer, getSectionOffset } from './helper';
import { Offset3 } from './offset';
import { dumpPK3, PK3, PKMFunc } from 'pksav/pkm';
import { GameVersion3 } from 'pksav/data';
import { PouchName } from '../pouch';

export const flash3 = (s: SAV3, old: Uint8Array): Uint8Array => {
  flashSection0(s, old);
  flashSection1(s, old);
  flashPCBox(s, old);
  return old;
};

const flashSection0 = (s: SAV3, old: Uint8Array) => {
  const section0 = slice(old, s.section0, SIZE_SECTOR);
  section0.set(s.name, 0);
  section0[8] = s.gender === 'female' ? 1 : 0;

  storeU16LE(section0, 10, s.tid);
  storeU16LE(section0, 12, s.sid);

  {
    const [hour, min, sec, frame] = s.playtime;
    storeU16LE(section0, 14, hour);
    section0[16] = min;
    section0[17] = sec;
    section0[18] = frame;
  }

  switch (s.game[0]) {
    case 'RS':
      storeU32LE(section0, 0x00AC, 0);
      break;

    case 'E':
      storeU32LE(section0, 0x00AC, s.xor);
      break;

    case 'FR':
    case 'LG':
      storeU32LE(section0, 0x00AC, 1);
      storeU32LE(section0, 0x0F20, s.xor);
      break;
  }

  storeU16LE(section0, 0x0FF6, calcSectionChecksum(section0));
  old.set(section0, s.section0);
};

const flashSection1 = (s: SAV3, old: Uint8Array) => {
  const ver = s.game[0] as GameVersion3;
  const ofs = getSectionOffset(s.section0, 1);
  const section1 = slice(old, ofs, SIZE_SECTOR);

  // Party
  const mons = s.party.filter((mon) => !PKMFunc.IsDummy(mon)) as PK3[];
  storeU32LE(section1, Offset3.Party[ver], mons.length);
  mons.forEach((p, i) => {
    const ofs = Offset3.Party[ver] + 4 + (100 * i);
    section1.set(dumpPK3(p), ofs);
  });

  // Money, Coin
  storeU32LE(section1, Offset3.Money[ver], s.money ^ s.xor);
  storeU16LE(section1, Offset3.Coin[ver], s.coin ^ (s.xor & 0xFFFF));

  // Items
  const pouch: PouchName[] = ['items', 'keyItems', 'balls', 'tmhm'];
  pouch.forEach((name) => {
    const p = s.bag[name];

    let ofs = Offset3.Pouch[ver][p.name];
    for (let i = 0; i < p.capacity; i++) {
      const itemID = p.items[i][0];
      const amount = p.items[i][1] ^ (s.xor & 0xFFFF);
      storeU16LE(section1, ofs, itemID);
      storeU16LE(section1, ofs + 2, amount);
      ofs += 4;
    }
  });

  storeU16LE(section1, 0x0FF6, calcSectionChecksum(section1));
  old.set(section1, ofs);
};

const flashPCBox = (s: SAV3, old: Uint8Array) => {
  const pcBuffer = getPCBuffer(old, s.section0);

  s.boxes.forEach((box, boxIdx) => {
    box.mons.forEach((mon, i) => {
      const bytes = dumpPK3(mon as PK3).subarray(0, 80);
      const idx = (boxIdx * box.capacity) + i;
      const ofs = 4 + (idx * 80);
      pcBuffer.set(bytes, ofs);
    });
  });

  for (let i = 5; i < 14; i++) {
    const ofs = getSectionOffset(s.section0, i);
    const section = slice(old, ofs, SIZE_SECTOR);
    const data = slice(pcBuffer, SIZE_SECTOR_USED * (i - 5), SIZE_SECTOR_USED);
    section.set(data, 0);
    storeU16LE(section, 0x0FF6, calcSectionChecksum(section));
    old.set(section, ofs);
  }
};

const calcSectionChecksum = (section: Uint8Array): number => {
  let checksum = 0;
  for (let i = 0; i < SIZE_SECTOR_USED; i += 4) {
    checksum = (checksum + loadU32LE(section, i)) & 0xFFFF_FFFF;
  }
  const [upper, lower] = [(checksum >> 16) & 0xFFFF, checksum & 0xFFFF];
  return (upper + lower) & 0xFFFF;
};
