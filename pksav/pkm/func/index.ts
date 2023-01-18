import {
  decodeNames,
  encodeNames,
  Game,
  Game1,
  Game2,
  Game3,
  Gen,
  Gender,
  isGB,
  Lang,
  Locale,
  PKMData,
  Status,
  ZeroStatus,
} from 'pksav/data';
import { export1, genderGB, getIVs1, isPK1, PK1, stats1 } from '../pk1';
import { export2, form2, isPK2, isShiny2, PK2, stats2 } from '../pk2';
import { export3, form3, gender3, isPK3, isShiny3, PK3, stats3 } from '../pk3';
import { isDummy, PKM, PKMA } from '../pkm';
import { Problems } from './legal';
import { Learnset as _Learnset } from './learnset';
import { newDummyMon } from '..';
import { getMinExp } from 'pksav/exp';

/*
  Function for external
*/

const Clone = <T extends PKM>(p: T): T => {
  return JSON.parse(JSON.stringify(p)) as T;
};

const Specie = (p: PKM, lang: Lang): string => {
  return PKMData.Specie[p.ver][lang][DexNo(p)];
};

const SetSpecie = (old: PKM, specieID: number): PKM => {
  let p = Clone(old);
  const wasDefaultNickname = Nickname(p) === DefaultNickname(p);
  p.id = specieID;
  if (wasDefaultNickname) {
    p.nickname = Array.from(encodeNames[p.ver](p.loc, DefaultNickname(p)));
  }

  p = SetLevel(p, p.lv);
  return p;
};

const SetLocale = (old: PKM, loc: Locale): PKM => {
  if (loc === old.loc) {
    return old;
  }

  const p = Clone(old);
  p.loc = loc;
  p.nickname = Array.from(encodeNames[p.ver](loc, DefaultNickname(p)));
  return p;
};

const Nickname = (p: PKM): string => {
  if (isDummy(p)) return '---';
  return decodeNames[p.ver](p.loc, new Uint8Array(p.nickname));
};

const DefaultNickname = (p: PKM): string => {
  const specie = PKMData.Specie[p.ver][p.loc][DexNo(p)];
  return p.loc === 'en' ? specie.toUpperCase() : specie;
};

const EggName = (p: PKM): string => {
  switch (p.loc) {
    case 'en':
      return 'EGG';
    case 'ja':
      return 'タマゴ';
  }
};

const SetLevel = (old: PKM, lv: number): PKM => {
  const p = Clone(old);
  p.lv = lv;

  const growth = PKMData.PI[p.ver][PKMFunc.DexNo(p)].growth;
  p.exp = getMinExp(lv, growth);

  return p;
};

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const randomizeIVs = (p: PKM): Status => {
  const ivs = ZeroStatus();

  if (isPK1(p) || isPK2(p)) {
    ivs.atk = getRandomInt(15);
    ivs.def = getRandomInt(15);
    ivs.spa = getRandomInt(15);
    ivs.spd = ivs.spa;
    ivs.spe = getRandomInt(15);
    return ivs;
  }

  ivs.hp = getRandomInt(31);
  ivs.atk = getRandomInt(31);
  ivs.def = getRandomInt(31);
  ivs.spa = getRandomInt(31);
  ivs.spd = getRandomInt(31);
  ivs.spe = getRandomInt(31);
  return ivs;
};

export const randomizeEVs = (p: PKM): Status => {
  const evs = ZeroStatus();

  if (!IsPKMA(p)) {
    evs.hp = getRandomInt(65535);
    evs.atk = getRandomInt(65535);
    evs.def = getRandomInt(65535);
    evs.spa = getRandomInt(65535);
    evs.spd = evs.spa;
    evs.spe = getRandomInt(65535);
    return evs;
  }

  return evs;
};

/**
 * アイコンなどの識別に使うフォーム(アンノーンやデオキシス、ロトムとか)も考慮した文字列IDを取得
 * 図鑑番号(-付随情報)の形 例: リザードンのキョダイマックスは 6-gmax
 */
const UniqueID = (p: PKM): string => {
  let form = '';

  let id = `${DexNo(p)}`;
  if (isPK2(p)) form += form2(p);
  if (isPK3(p)) form += form3(p);

  if (form !== '') {
    id += `-${form}`;
  }
  return id;
};

const IsShiny = (p: PKM): boolean => {
  if (isPK2(p)) return isShiny2(p);
  if (isPK3(p)) return isShiny3(p);
  return false;
};

const Gender = (p: PKM): Gender => {
  if (isPK1(p) || isPK2(p)) return genderGB(p);
  if (isPK3(p)) return gender3(p);
  return 'male';
};

// WARNING: this pid is not sequential on PRNG
const ChangeNature = (p: PKMA, natureIdx: number): PKMA => {
  p = Clone(p);
  const old = p.pid % 25;
  p.pid = p.pid + (natureIdx - old);
  return p;
};

const Learnset = (p?: PKM): number[] => {
  if (p == null) return [];

  const moveIDs = _Learnset(p.ver, DexNo(p));
  return moveIDs;
};

const DexNo = (p: PKM): number => PKMData.DexNo[Gen[p.ver]][p.id];

const IsDummy = (p: PKM): boolean => {
  if (isPK1(p)) return p.id === 0;
  if (isPK2(p)) return p.id === 252;
  if (isPK3(p)) return PKMData.DexNo[Gen[p.ver]][p.id] === 387;
  return true;
};

const IVs = (p: PKM): Status => {
  if (isPK1(p) || isPK2(p)) {
    return getIVs1(p);
  }
  return p.ivs;
};

const IsPKMA = (p: PKM): p is PKMA => {
  return !isGB(p.ver);
};

// No nature boost
const Stats = (p: PKM): Status => {
  if (isPK1(p)) return stats1(p);
  if (isPK2(p)) return stats2(p);
  if (IsPKMA(p)) return stats3(p);
  return ZeroStatus();
};

const Export = (p: PKM): Uint8Array => {
  if (isPK1(p)) return export1(p);
  if (isPK2(p)) return export2(p);
  if (isPK3(p)) return export3(p);
  return new Uint8Array(0);
};

const Parse = (game: Game, data: Uint8Array): PKM => {
  switch (Gen[game[0]]) {
    case 1:
      return PK1(game as Game1, data);
    case 2:
      return PK2(game as Game2, data);
    case 3:
      return PK3(game as Game3, data);
  }

  return newDummyMon(game);
};

const ToggleEgg = (old: PKM): PKM => {
  let p = Clone(old);
  const wasEgg = p.isEgg;
  p.isEgg = !wasEgg;
  p.item = 0;
  if (isPK3(p)) {
    p = SetLocale(p, 'ja');
  }

  if (wasEgg) {
    p.nickname = Array.from(encodeNames[p.ver](p.loc, DefaultNickname(p)));
  } else {
    p.nickname = Array.from(encodeNames[p.ver](p.loc, EggName(p)));
  }
  return p;
};

export const PKMFunc = {
  Clone,
  Specie,
  SetSpecie,
  SetLocale,
  SetLevel,
  Nickname,
  DefaultNickname,
  EggName,
  UniqueID,
  IsShiny,
  Gender,
  ChangeNature,
  Learnset,
  Problems,
  DexNo,
  IsDummy,
  IVs,
  Stats,
  IsPKMA,
  Parse,
  Export,
  ToggleEgg,
} as const;
