import { Game2, Gender, Locale } from 'pksav/data';
import { PK2 } from 'pksav/pkm';
import { bit, loadU16BE, loadU24BE, parseBCD24, slice } from 'utils';
import { SAV2 } from '.';
import { Box, newPokeBoxes } from '../box';
import { Party } from '../party';
import { Pouch, PouchGB } from '../pouch';
import { Event2 } from './event';
import { Capacity2, MON_SIZE2, NameSize2, PARTYMON_SIZE2 } from './helper';
import { Offset2 } from './offset';

export const parse2 = (game: Game2, buf: Uint8Array): SAV2 => {
  const [ver, loc] = game;
  const name = Array.from(slice(buf, Offset2.PlayerName, NameSize2[loc]));
  const tid = loadU16BE(buf, Offset2.TID);
  const playerColor = buf[Offset2.PlayerPalette[loc][ver]];
  const money = parseBCD24(loadU24BE(buf, Offset2.Money[loc][ver]));
  const coin = loadU16BE(buf, Offset2.Coin[loc][ver]);

  const badges = parseBadge(game, buf);
  const playtime = parsePlayTime(game, buf);
  const gender = parsePlayerGender(game, buf);
  const boxes = parsePCBox(game, buf);
  const party = parseParty(game, buf);
  const bag = {
    items: parsePouch(game, buf, PouchGB('items', 20)),
    keyItems: parsePouch(game, buf, PouchGB('keyItems', 26)),
    balls: parsePouch(game, buf, PouchGB('balls', 12)),
    tmhm: parsePouch(game, buf, PouchGB('tmhm', 57)),
  };
  const events = parseEvents(game, buf);

  return {
    game,
    events,
    name,
    tid,
    playerColor,
    money,
    coin,
    badges,
    playtime,
    gender,
    boxes,
    party,
    bag,
  };
};

const parseBadge = (game: Game2, buf: Uint8Array): boolean[] => {
  const badges = [...Array(16)].fill(false);

  const [ver, loc] = game;
  const ofs = Offset2.Badge[loc][ver];
  const bitfields = (buf[ofs + 1] << 8) | buf[ofs];
  for (let i = 0; i < 16; i++) {
    badges[i] = bit(bitfields, i);
  }

  return badges;
};

const parsePlayTime = (game: Game2, buf: Uint8Array): [number, number, number, number] => {
  const ofs = Offset2.PlayTime[game[1]][game[0]];
  return [buf[ofs + 1], buf[ofs + 2], buf[ofs + 3], buf[ofs + 4]];
};

const parsePlayerGender = (game: Game2, buf: Uint8Array): Gender => {
  if (game[0] === 'GS') {
    return 'male';
  }

  const val = buf[Offset2.Gender[game[1]]];
  if (val != 0) {
    return 'female';
  }
  return 'male';
};

const parsePCBox = (game: Game2, buf: Uint8Array): Box[] => {
  const boxes = newPokeBoxes(game);
  const loc = game[1];
  const namesize = NameSize2[loc];

  boxes.forEach((box, boxIdx) => {
    // Each Box
    const boxbuf = slice(buf, Offset2.Box[loc][boxIdx], loc === 'ja' ? 1354 : 1104);

    const sBoxMonOT = Offset2.BoxOT[loc][boxIdx];
    const sBoxMonNicks = Offset2.BoxNick[loc][boxIdx];

    const len = boxbuf[0];
    const ids = slice(boxbuf, 1, Capacity2[loc]);
    for (let i = 0; i < len; i++) {
      // Each Mon
      const raw = new Uint8Array(PARTYMON_SIZE2);
      raw.set(sliceBoxMon(boxbuf, i, loc), 0);
      const ot = slice(buf, sBoxMonOT + (i * namesize), namesize);
      const nn = slice(buf, sBoxMonNicks + (i * namesize), namesize);
      const pkmn = PK2(game, new Uint8Array([0x01, raw[0], 0xFF, ...raw, ...ot, ...nn]));
      pkmn.isEgg = ids[i] === 0xFD;
      box.mons[i] = pkmn;
    }

    boxes[boxIdx] = box;
  });

  return boxes;
};

const sliceBoxMon = (boxbuf: Uint8Array, n: number, loc: Locale): Uint8Array => {
  const hdrSize = (1 + Capacity2[loc] + 1);
  const ofs = hdrSize + MON_SIZE2 * n;
  return slice(boxbuf, ofs, MON_SIZE2);
};

const parseParty = (game: Game2, buf: Uint8Array): [PK2, PK2, PK2, PK2, PK2, PK2] => {
  const party = Party(game);
  const [ver, loc] = game;

  const ofs = Offset2.Party[loc][ver];
  const len = buf[ofs];
  const ids = slice(buf, ofs + 1, 6);

  for (let i = 0; i < len; i++) {
    const raw = slicePartyMon(buf, ofs, i);
    const ot = slice(buf, Offset2.PartyOT[loc][ver][i], NameSize2[loc]);
    const nn = slice(buf, Offset2.PartyNick[loc][ver][i], NameSize2[loc]);
    const pkmn = PK2(game, new Uint8Array([0x01, raw[0], 0xFF, ...raw, ...ot, ...nn]));
    pkmn.isEgg = ids[i] === 0xFD;
    party[i] = pkmn;
  }

  return party as [PK2, PK2, PK2, PK2, PK2, PK2];
};

const parsePouch = (game: Game2, buf: Uint8Array, p: Pouch): Pouch => {
  const [ver, loc] = game;

  switch (p.name) {
    case 'items': // Fallthrough
    case 'balls': {
      const ofs = p.name === 'balls' ? Offset2.Pouch.Ball[loc][ver] : Offset2.Pouch.Item[loc][ver];
      const parseItems = (ofs: number, pouch: Pouch) => {
        const count = buf[ofs++];
        for (let i = 0; i < count; i++) {
          const itemID = buf[ofs++];
          const amount = buf[ofs++];
          pouch.items[i] = [itemID, amount];
        }
      };
      parseItems(ofs, p);
      break;
    }

    case 'keyItems': {
      let ofs = Offset2.Pouch.Key[loc][ver];
      const count = buf[ofs++];
      for (let i = 0; i < count; i++) {
        p.items[i] = [buf[ofs++], 1];
      }
      break;
    }

    case 'tmhm': {
      const ofs = Offset2.Pouch.TMHM[loc][ver];
      let last = 0;
      let idx = 0; // 未使用分をスキップするため
      for (let i = 0; i < 59; i++) {
        if ([4, 29].includes(i)) {
          continue;
        }
        const itemID = 191 + i;
        const amount = buf[ofs + idx];
        if (amount > 0) {
          p.items[last] = [itemID, amount];
          last++;
        }
        idx++;
      }
      break;
    }
  }

  return p;
};

const parseEvents = (game: Game2, buf: Uint8Array): Event2[] => {
  const [ver, loc] = game;
  const events: Event2[] = [];
  const eventFlags = slice(buf, Offset2.EventFlag[loc][ver], 256);
  const parseEventFlags = (flagIdx: number): boolean => {
    const bitfield = [flagIdx >> 3, flagIdx & 0b111];
    return bit(eventFlags[bitfield[0]], bitfield[1]);
  };

  const eventIDs: Event2['id'][] = ['HoOh', 'Lugia', 'RedGyarados', 'Snorlax'];
  eventIDs.forEach((id) => {
    events.push({ id, val: parseEventFlags(Event2[ver][id]) });
  });

  return events;
};

const slicePartyMon = (sram: Uint8Array, ofs: number, n: number): Uint8Array => {
  const hdrSize = 1 + 6 + 1;
  ofs += hdrSize + (PARTYMON_SIZE2 * n);
  return slice(sram, ofs, PARTYMON_SIZE2);
};
