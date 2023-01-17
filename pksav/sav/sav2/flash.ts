import { Game2 } from 'pksav/data';
import { exportRawPK2, PK2, PKMFunc } from 'pksav/pkm';
import { BCD24, setBit, slice, storeU16BE, storeU24BE } from 'utils';
import { Pouch } from '../pouch';
import { Event2 } from './event';
import { MON_SIZE2, NameSize2, PARTYMON_SIZE2 } from './helper';
import { SAV2 } from './index';
import { Offset2 } from './offset';

const PARTY_LENGTH = 6;

export const flash2 = (s: SAV2, old: Uint8Array): Uint8Array => {
  const [ver, loc] = s.game as Game2;

  old[Offset2.PlayerPalette[loc][ver]] = s.playerColor;
  storeU16BE(old, Offset2.TID, s.tid);
  storeU24BE(old, Offset2.Money[loc][ver], BCD24(s.money));
  storeU16BE(old, Offset2.Coin[loc][ver], s.coin);
  flashPlayerGender(s, old);

  flashPouch(s, old, s.bag['items']);
  flashPouch(s, old, s.bag['keyItems']);
  flashPouch(s, old, s.bag['balls']);
  flashPouch(s, old, s.bag['tmhm']);

  flashPCBox(s, old);
  flashParty(s, old);
  old = flashEvents(s, old);

  setChecksum(s, old);
  return old;
};

const flashPlayerGender = (s: SAV2, old: Uint8Array) => {
  const [ver, loc] = s.game as Game2;
  if (ver === 'C') {
    old[Offset2.Gender[loc]] = s.gender === 'female' ? 1 : 0;
  }
};

const flashPouch = (s: SAV2, old: Uint8Array, p: Pouch) => {
  const [ver, loc] = s.game as Game2;

  switch (p.name) {
    case 'items': // Fallthrough
    case 'balls': {
      const ofs = p.name === 'balls' ? Offset2.Pouch.Ball[loc][ver] : Offset2.Pouch.Item[loc][ver];
      const flashItems = (ofs: number, p: Pouch) => {
        old[ofs++] = p.items.filter(([id]) => id != 0xFF).length;
        for (let i = 0; i < p.capacity; i++) {
          old[ofs++] = p.items[i][0];
          old[ofs++] = p.items[i][1];
        }
      };
      flashItems(ofs, p);
      break;
    }

    case 'keyItems': {
      let ofs = Offset2.Pouch.Key[loc][ver];
      old[ofs++] = p.items.filter(([id]) => id != 0xFF).length;
      for (let i = 0; i < p.capacity; i++) {
        old[ofs++] = p.items[i][0];
      }
      break;
    }

    case 'tmhm': {
      const bytes = new Uint8Array(57).fill(0x00);
      for (let i = 0; i < 57; i++) {
        const [itemID, amount] = p.items[i];
        if (itemID === 0xFF) {
          break;
        }
        if (itemID >= 191 && itemID <= 249) {
          bytes[itemID - 191] = amount;
        }
      }
      old.set(bytes, Offset2.Pouch.TMHM[loc][ver]);
      break;
    }
  }
};

const flashPCBox = (s: SAV2, old: Uint8Array) => {
  const [_, loc] = s.game as Game2;
  const namesize = NameSize2[loc];

  s.boxes.forEach((box, boxIdx) => {
    // Each Box
    let ofs = Offset2.Box[loc][boxIdx];

    const sBoxMonOT = Offset2.BoxOT[loc][boxIdx];
    const sBoxMonNicks = Offset2.BoxNick[loc][boxIdx];

    const mons = box.mons.filter((mon) => !PKMFunc.IsDummy(mon)) as PK2[];
    old[ofs] = mons.length;
    ofs += 1;

    {
      const ids = new Uint8Array(box.capacity + 1).fill(0xFF);
      ids.set(mons.map((mon) => mon.id), 0);
      for (let i = 0; i < mons.length; i++) {
        if (mons[i].isEgg) ids[i] = 0xFD;
      }
      old.set(ids, ofs);
      ofs += box.capacity + 1;
    }

    for (let idx = 0; idx < mons.length; idx++) {
      // Each Mon
      old.set(exportRawPK2(mons[idx]).subarray(0, 32), ofs);
      // Mon names
      old.set(mons[idx].ot.name, sBoxMonOT + (idx * namesize));
      old.set(mons[idx].nickname, sBoxMonNicks + (idx * namesize));

      ofs += MON_SIZE2;
    }
  });
};

const flashParty = (s: SAV2, old: Uint8Array) => {
  const [ver, loc] = s.game as Game2;

  const sPartyMonOT = Offset2.PartyOT[loc][ver];

  let ofs = Offset2.Party[loc][ver];

  const mons = s.party.filter((mon) => !PKMFunc.IsDummy(mon)) as PK2[];
  old[ofs] = mons.length;
  ofs++;

  {
    const ids = new Uint8Array(PARTY_LENGTH + 1).fill(0xFF);
    ids.set(mons.map((mon) => mon.id), 0);
    for (let i = 0; i < mons.length; i++) {
      if (mons[i].isEgg) ids[i] = 0xFD;
    }
    old.set(ids, ofs);
    ofs += PARTY_LENGTH + 1;
  }

  for (let i = 0; i < mons.length; i++) {
    // Each mon
    old.set(exportRawPK2(mons[i]), ofs);

    // Mon Names
    old.set(mons[i].ot.name, sPartyMonOT[i]);
    old.set(mons[i].nickname, Offset2.PartyNick[loc][ver][i]);

    ofs += PARTYMON_SIZE2;
  }
};

const flashEvents = (s: SAV2, old: Uint8Array): Uint8Array => {
  const events = s.events as Event2[];
  const [ver, loc] = s.game as Game2;

  const eventFlags = slice(old, Offset2.EventFlag[loc][ver], 256);

  const setEventFlags = (flagIdx: number, val: boolean) => {
    const bitfield = [flagIdx >> 3, flagIdx & 0b111];
    eventFlags[bitfield[0]] = setBit(eventFlags[bitfield[0]], bitfield[1], val);
  };
  events.forEach((e) => {
    const id = Event2[ver][e.id];
    setEventFlags(id, e.val);
  });

  return old;
};

const setChecksum = (s: SAV2, old: Uint8Array) => {
  const [ver] = s.game as Game2;
  let checksum = 0;
  let addr = 0;

  switch (ver) {
    case 'GS': {
      for (let i = 0x2009; i <= 0x2D68; i++) {
        checksum += old[i];
        if (checksum >= 0x10000) checksum -= 0x10000;
      }
      addr = 0x2D69;
      break;
    }

    case 'C': {
      for (let i = 0x2009; i <= 0x2B82; i++) {
        checksum += old[i];
        if (checksum >= 0x10000) checksum -= 0x10000;
      }
      addr = 0x2D0D;
      break;
    }
  }

  // Note: Checksum is 16bit Little Endian
  old[addr] = checksum & 0xFF;
  old[addr + 1] = (checksum >> 8) & 0xFF;
};
