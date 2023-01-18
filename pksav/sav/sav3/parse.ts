import { PouchCapacity3, SIZE_MAIN, SIZE_SECTOR } from './constants';
import { loadU16LE, loadU32LE, slice } from 'utils';
import { SAV3 } from './index';
import { decodeName3, Game3, Gender } from 'pksav/data';
import { Party } from '../party';
import { Box, newPokeBoxes } from '../box';
import { PlayTime } from '../types';
import { getPCBuffer, getSectionOffset } from './helper';
import { Offset3 } from './offset';
import { PK3 } from 'pksav/pkm';
import { Pouch, PouchGBA, PouchName } from '../pouch';

export const parse3 = (game: Game3, buf: Uint8Array): SAV3 => {
  const section0Offset = parseSlot(buf);
  if (loadU16LE(buf, section0Offset + 6) === 0) {
    game[1] = 'ja';
  }
  const sectionBuffers = [...Array(14)].map((_, i) => slice(buf, getSectionOffset(section0Offset, i), SIZE_SECTOR));
  const section0 = parseSection0(game, sectionBuffers[0]);

  return {
    game,
    events: [],
    boxes: parsePCBox(game, getPCBuffer(buf, section0Offset)),
    section0: section0Offset,
    ...section0,
    ...parseSection1(game, sectionBuffers[1], section0.xor),
    shouldGameSelect: true,
  };
};

/**
 * Checks the input data to see if all required sectors for the main save data are present for the slot.
 * @param sav .sav
 * @param slot 0: Save Slot A, 1: Save Slot B
 * @returns [ok, Section 0's offset]
 */
export const isAllMainSectorsPresent = (sav: Uint8Array, slot: 0 | 1): [boolean, number] => {
  const start = SIZE_MAIN * slot;
  const end = start + SIZE_MAIN;

  let addr = 0;
  let bitTrack = 0;

  for (let ofs = start; ofs < end; ofs += SIZE_SECTOR) {
    const section = sav.slice(ofs);
    const sectionID = loadU16LE(section, 0xFF4);
    bitTrack |= 1 << sectionID;
    if (sectionID === 0) addr = ofs;
  }

  return [bitTrack === 0x3FFF, addr];
};

// Return Active slot's section0 Offset
const parseSlot = (buf: Uint8Array): number => {
  const getActiveSlot = (sav: Uint8Array): 0 | 1 => {
    const slot0 = isAllMainSectorsPresent(sav, 0);
    const slot1 = isAllMainSectorsPresent(sav, 1);

    if (!slot0[0] && !slot1[0]) {
      return 0; // Both slots are broken
    }
    if (!slot0[0] && slot1[0]) {
      return 1; // Slot 0 is broken
    }
    if (slot0[0] && !slot1[0]) {
      return 0; // Slot 1 is broken
    }

    // If both slots are fine, compare save index
    const count0 = loadU32LE(sav, slot0[1] + 0xFFC);
    const count1 = loadU32LE(sav, slot1[1] + 0xFFC);
    return count1 > count0 ? 1 : 0;
  };

  const slot = getActiveSlot(buf);
  const start = SIZE_MAIN * slot;
  const end = start + SIZE_MAIN;
  for (let ofs = start; ofs < end; ofs += SIZE_SECTOR) {
    const section = buf.slice(ofs);
    const sectionID = loadU16LE(section, 0xFF4);

    if (sectionID === 0) {
      return ofs;
    }
  }

  return 0;
};

const parseSection0 = (game: Game3, buf0: Uint8Array) => {
  const name = Array.from(slice(buf0, 0, 7));
  const gender: Gender = buf0[8] === 1 ? 'female' : 'male';
  const tid = loadU16LE(buf0, 10);
  const sid = loadU16LE(buf0, 10 + 2);
  const playtime = [loadU16LE(buf0, 14), buf0[16], buf0[17], buf0[18]] as PlayTime;

  let xor = 0;
  switch (game[0]) {
    case 'FR':
    case 'LG':
      xor = loadU32LE(buf0, 0x0F20);
      break;

    case 'E':
      xor = loadU32LE(buf0, 0x00AC);
      break;
  }

  return {
    name,
    gender,
    tid,
    sid,
    playtime,
    xor,
  };
};

const parseSection1 = (game: Game3, buf1: Uint8Array, xor: number) => {
  const ver = game[0];
  const money = (loadU32LE(buf1, Offset3.Money[ver]) ^ xor) & 0xFFFF_FFFF;
  const coin = (loadU16LE(buf1, Offset3.Coin[ver]) ^ (xor & 0xFFFF));

  const party = Party(game);
  const partyLength = loadU32LE(buf1, Offset3.Party[ver]);
  for (let i = 0; i < partyLength; i++) {
    const ofs = Offset3.Party[ver] + 4 + (100 * i);
    const monbuf = slice(buf1, ofs, 100);
    party[i] = PK3(game, monbuf);
  }

  const pouch: PouchName[] = ['items', 'keyItems', 'balls', 'tmhm', 'berries'];
  const capacities = PouchCapacity3[game[0]];
  const bag: { [key: string]: Pouch } = {};
  pouch.forEach((p) => {
    let ofs = Offset3.Pouch[game[0]][p];
    const capacity = capacities[p];
    const pouch = PouchGBA(p, capacity);

    for (let i = 0; i < capacity; i++) {
      const itemID = loadU16LE(buf1, ofs);
      const amount = loadU16LE(buf1, ofs + 2) ^ (xor & 0xFFFF);
      ofs += 4;
      pouch.items[i] = [itemID, amount];
    }
    bag[p] = pouch;
  });

  return {
    money,
    coin,
    party,
    bag,
  };
};

const parsePCBox = (game: Game3, pcBuf: Uint8Array): Box[] => {
  const boxes = newPokeBoxes(game);

  // Box mons
  for (let i = 0; i < 420; i++) {
    const [box, idx] = [Math.floor(i / 30), i % 30];
    const monbuf = slice(pcBuf, 4 + (80 * i), 80);
    if (monbuf[8] !== 0) {
      boxes[box].mons[idx] = PK3(game, monbuf);
    }
  }

  // Box name
  for (let i = 0; i < 14; i++) {
    const name = slice(pcBuf, 0x8344 + (9 * i), 9);
    boxes[i].name = decodeName3(game[1], name);
  }

  return boxes;
};
