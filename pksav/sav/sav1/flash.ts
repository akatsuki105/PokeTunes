import { GameVersion1 } from 'pksav/data';
import { exportRawPK1, PK1, PKMFunc } from 'pksav/pkm';
import { BCD24, maxUint, setBit, slice, storeU16BE, storeU24BE, uint8 } from 'utils';
import { Event1 } from './event';
import { MON_SIZE1, NameSize1, PARTYMON_SIZE1 } from './helper';
import { SAV1 } from './index';
import { Offset1 } from './offset';

const PARTY_LENGTH = 6;

export const flash1 = (sav: SAV1, old: Uint8Array): Uint8Array => {
  storeU24BE(old, Offset1.Money[sav.game[1]], BCD24(sav.money));
  storeU16BE(old, Offset1.TID[sav.game[1]], sav.money);

  old = flashPlaytime(sav, old);
  old = flashPouch(sav, old);
  old = flashPCBox(sav, old);
  old = flashParty(sav, old);
  old = flashEvents(sav, old);

  old = setChecksum(sav, old);
  return old;
};

const flashPlaytime = (s: SAV1, old: Uint8Array): Uint8Array => {
  const ofs = Offset1.PlayTime[s.game[1]];

  const hour = uint8(s.playtime[0]);
  if (hour === 255) {
    const cap = 1;
    [old[ofs], old[ofs + 1], old[ofs + 2], old[ofs + 3], old[ofs + 4]] = [255, cap, 0, 0, 0];
    return old;
  }

  const cap = 0;
  const min = maxUint(s.playtime[1], 59);
  const sec = maxUint(s.playtime[2], 59);
  const frame = maxUint(s.playtime[3], 59);

  [old[ofs], old[ofs + 1], old[ofs + 2], old[ofs + 3], old[ofs + 4]] = [hour, cap, min, sec, frame];
  return old;
};

const flashPouch = (sav: SAV1, old: Uint8Array): Uint8Array => {
  let ofs = Offset1.Pouch.Item[sav.game[1]];

  const pouch = sav.bag['items'];
  old[ofs++] = pouch.items.filter(([id]) => id != 0xFF).length;
  for (let i = 0; i < pouch.capacity; i++) {
    old[ofs++] = pouch.items[i][0];
    old[ofs++] = pouch.items[i][1];
  }

  return old;
};

const flashPCBox = (s: SAV1, old: Uint8Array): Uint8Array => {
  const loc = s.game[1];

  s.boxes.forEach((box, boxIdx) => {
    let ofs = Offset1.Box[loc][boxIdx];
    const sBoxMonOT = Offset1.BoxOT[loc][boxIdx];
    const sBoxMonNicks = Offset1.BoxNick[loc][boxIdx];

    const mons = box.mons.filter((mon) => !PKMFunc.IsDummy(mon)) as PK1[];
    old[ofs] = mons.length;
    ofs += 1;

    const capacity = box.capacity;
    const ids = new Uint8Array(capacity + 1).fill(0xFF);
    ids.set(mons.map((mon) => mon.id), 0);
    old.set(ids, ofs);
    ofs += capacity + 1;

    for (let i = 0; i < mons.length; i++) {
      // Each mon
      old.set(exportRawPK1(mons[i]).subarray(0, 33), ofs);

      // Mon names
      old.set(mons[i].ot.name, sBoxMonOT + NameSize1[loc]);
      old.set(mons[i].nickname, sBoxMonNicks + NameSize1[loc]);

      ofs += MON_SIZE1;
    }
  });

  return old;
};

const flashParty = (s: SAV1, old: Uint8Array): Uint8Array => {
  const loc = s.game[1];

  let ofs = Offset1.Party[loc];
  const mons = s.party.filter((mon) => !PKMFunc.IsDummy(mon)) as PK1[];
  old[ofs] = mons.length;
  ofs++;

  const ids = new Uint8Array(PARTY_LENGTH + 1).fill(0xFF);
  ids.set(mons.map((mon) => mon.id), 0);
  old.set(ids, ofs);
  ofs += PARTY_LENGTH + 1;

  for (let i = 0; i < mons.length; i++) {
    // Each mon
    old.set(exportRawPK1(mons[i]), ofs);

    // Mon Names
    old.set(mons[i].ot.name, Offset1.PartyOT[loc][i]);
    old.set(mons[i].nickname, Offset1.PartyNick[loc][i]);

    ofs += PARTYMON_SIZE1;
  }

  return old;
};

const flashEvents = (s: SAV1, old: Uint8Array): Uint8Array => {
  const events = s.events as Event1[];

  const eventFlags = slice(old, Offset1.EventFlag[s.game[1]], 320);
  const spawnFlags = slice(old, Offset1.ObjectSpawnFlags[s.game[1]], 32);

  const setEventFlags = (flagIdx: number, val: boolean) => {
    const bitfield = [flagIdx >> 3, flagIdx & 0b111];
    eventFlags[bitfield[0]] = setBit(eventFlags[bitfield[0]], bitfield[1], val);
  };
  const setSpawnFlags = (flagIdx: number, val: boolean) => {
    const bitfield = [flagIdx >> 3, flagIdx & 0b111];
    spawnFlags[bitfield[0]] = setBit(spawnFlags[bitfield[0]], bitfield[1], val);
  };

  events.forEach((e) => {
    const event = Event1[e.id];
    setEventFlags(event.flag, e.val);

    switch (typeof event.spawn) {
      case 'number':
        setSpawnFlags(event.spawn, e.val);
        break;
      default:
        setSpawnFlags(event.spawn[s.game[0] as GameVersion1], e.val);
        break;
    }
  });

  return old;
};

const setChecksum = (s: SAV1, old: Uint8Array): Uint8Array => {
  const loc = s.game[1];
  const { dst, start, end } = Offset1.Checksum;

  let checksum = 255;
  for (let i = start; i <= end[loc]; i++) {
    checksum -= old[i];
    if (checksum < 0) checksum += 256;
  }

  old[dst[loc]] = checksum;
  return old;
};
