export type Event2 = {
  id: 'HoOh' | 'Lugia' | 'RedGyarados' | 'Snorlax';
  val: boolean;
};

const HoOh = 791 as const;
const Lugia = 792 as const;
const RedGyarados = 1873 as const;
const Snorlax = 1904 as const;

/**
 * GSボールを持っているか
 * 0190	*	GSボールイベント (ガンテツ確認中)
 * 0191	*	GSボールイベント (ガンテツから受け取れる / 上のフラグと組み合わせて使用)
 * 0192	*	GSボールが置ける (ウバメのもりのほこら)
 * 0832 * GSボールをポケモンセンターで受け取ったか
 */

const EventGS = {
  HoOh,
  Lugia,
  RedGyarados,
  Snorlax,
} as const;

const EventC = {
  HoOh,
  Lugia,
  RedGyarados,
  Snorlax,
} as const;

export const Event2 = {
  GS: EventGS,
  C: EventC,
} as const;
