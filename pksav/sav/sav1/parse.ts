import { Game1 } from 'pksav/data';
import { PK1 } from 'pksav/pkm';
import { bit, loadU16BE, loadU24BE, parseBCD24, slice } from 'utils';
import { SAV1 } from '.';
import { Box, newPokeBoxes } from '../box';
import { Party } from '../party';
import { Pouch, PouchGB } from '../pouch';
import { Event1 } from './event';
import { Capacity1, MON_SIZE1, NameSize1, PARTYMON_SIZE1 } from './helper';
import { Offset1 } from './offset';

export const parse1 = (game: Game1, buf: Uint8Array): SAV1 => {
  const loc = game[1];

  const name = Array.from(slice(buf, Offset1.PlayerName, NameSize1[loc]));
  const tid = loadU16BE(buf, Offset1.TID[loc]);
  const money = parseBCD24(loadU24BE(buf, Offset1.Money[loc]));
  const playtime = parsePlayTime(game, buf);
  const bag = { items: parsePouch(game, buf) };
  const boxes = parsePCBox1(game, buf);
  const party = parseParty(game, buf);
  const events = parseEvents(game, buf);
  const coin = 0;
  const badges: boolean[] = [];

  return {
    game,
    events,
    name,
    tid,
    money,
    coin,
    badges,
    playtime,
    bag,
    boxes,
    party,
    gender: 'male',
  };
};

export const parsePlayTime = (game: Game1, buf: Uint8Array): [number, number, number, number] => {
  const ofs = Offset1.PlayTime[game[1]];
  return [buf[ofs], buf[ofs + 2], buf[ofs + 3], buf[ofs + 4]];
};

export const parsePouch = (game: Game1, buf: Uint8Array): Pouch => {
  const pouch = PouchGB('items', 20);
  let ofs = Offset1.Pouch.Item[game[1]];
  const count = buf[ofs++];
  for (let i = 0; i < count; i++) {
    const item = buf[ofs++];
    const amount = buf[ofs++];
    pouch.items[i] = [item, amount];
  }
  return pouch;
};

const parsePCBox1 = (game: Game1, buf: Uint8Array): Box[] => {
  const loc = game[1];
  const boxes = newPokeBoxes(game);
  const currentBoxIdx = buf[Offset1.CurrentBoxNo[loc]] & 0x0F;

  boxes.forEach((box, boxIdx) => {
    // Each Box
    let boxbuf = slice(buf, Offset1.Box[loc][boxIdx], loc === 'ja' ? 1382 : 1122);
    let sBoxMonOT = Offset1.BoxOT[loc][boxIdx];
    let sBoxMonNicks = Offset1.BoxNick[loc][boxIdx];
    if (boxIdx === currentBoxIdx) {
      boxbuf = slice(buf, Offset1.CurrentBox[loc], loc === 'ja' ? 1382 : 1122);
      sBoxMonOT = Offset1.CurrentBoxOT[loc];
      sBoxMonNicks = Offset1.CurrentBoxNick[loc];
    }

    const len = (boxbuf[0] === 0xFF ? 0 : boxbuf[0]);
    const hdrSize = 1 + (Capacity1[loc] + 1); // [count, [ID, ID, ID, ...], 0xFF]
    for (let i = 0; i < len; i++) {
      // Each mon entry
      const raw = new Uint8Array(44);
      raw.set(slice(boxbuf, hdrSize + (MON_SIZE1 * i), MON_SIZE1), 0);
      const otname = slice(buf, sBoxMonOT + (i * NameSize1[loc]), NameSize1[loc]);
      const nn = slice(buf, sBoxMonNicks + (i * NameSize1[loc]), NameSize1[loc]);
      const pkmbuf = new Uint8Array([0x01, raw[0], 0xFF, ...raw, ...otname, ...nn]);
      box.mons[i] = PK1(game, pkmbuf);
    }
  });

  return boxes;
};

export const parseParty = (game: Game1, buf: Uint8Array): [PK1, PK1, PK1, PK1, PK1, PK1] => {
  const party = Party(game);
  const loc = game[1];

  let ofs = Offset1.Party[loc];
  const hdrSize = 1 + (6 + 1); // [count, [ID, ID, ID, ID, ID, ID], 0xFF]
  const len = buf[ofs];
  ofs += hdrSize;

  for (let i = 0; i < len; i++) {
    const raw = slice(buf, ofs, PARTYMON_SIZE1);
    ofs += PARTYMON_SIZE1;
    const otname = Array.from(slice(buf, Offset1.PartyOT[loc][i], NameSize1[loc]));
    const nn = Array.from(slice(buf, Offset1.PartyNick[loc][i], NameSize1[loc]));
    const pkmn = PK1(game, new Uint8Array([0x01, raw[0], 0xFF, ...raw, ...otname, ...nn]));
    pkmn.lv = raw[33];

    party[i] = pkmn;
  }

  return party as [PK1, PK1, PK1, PK1, PK1, PK1];
};

const parseEvents = (game: Game1, buf: Uint8Array): Event1[] => {
  const loc = game[1];
  const events: Event1[] = [];
  const eventFlags = slice(buf, Offset1.EventFlag[loc], 320);
  const parseEventFlags = (flagIdx: number): boolean => {
    const bitfield = [flagIdx >> 3, flagIdx & 0b111];
    return bit(eventFlags[bitfield[0]], bitfield[1]);
  };

  const eventIDs: Event1['id'][] = ['Zapdos', 'Moltres', 'Articuno', 'Mewtwo'];
  eventIDs.forEach((id) => {
    events.push({
      id,
      val: parseEventFlags(Event1[id].flag),
    });
  });

  return events;
};
