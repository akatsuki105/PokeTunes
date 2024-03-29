import { NameSize2 } from 'pksav/sav';
import { Locale } from '../game';

const NAME_TERMINATE = 0x50;

// deno-fmt-ignore
const CharEn2 = [
  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",
  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",
  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",
  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",
  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",
  "",  "",  "",  "",  "",  "@", "",  "",  "",  "",  "",  "",  "",  "",  "",
  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",
  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",
  "",  "",  "",  "",  "",  "",  "",  " ", "A", "B", "C", "D", "E", "F", "G",
  "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
  "W", "X", "Y", "Z", "(", ")", ":", ";", "[", "]", "a", "b", "c", "d", "e",
  "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y", "z", "",  "",  "",  "",  "",  "",  "",  "",  "",
  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",
  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",
  "",  "",  "-", "",  "",  "?", "!", "",  "",  "",  "",  "",  "",  "",  "♂",
  "",  "×", ".", "/", ",", "♀", "0", "1", "2", "3", "4", "5", "6", "7", "8",
  "9"
];

// deno-fmt-ignore
const CharJa2 = [
  "",  "",  "",  "",  "",  "ガ", "ギ", "グ", "ゲ", "ゴ", "ザ", "ジ", "ズ", "ゼ", "ゾ",
  "ダ", "ヂ", "ヅ", "デ", "ド", "",  "",  "",  "",  "",  "バ", "ビ", "ブ", "ボ", "",
  "",  "",  "",  "",  "",  "",  "",  "",  "が", "ぎ", "ぐ", "げ", "ご", "ざ", "じ",
  "ず", "ぜ", "ぞ", "だ", "ぢ", "づ", "で", "ど", "",  "",  "",  "",  "",  "ば", "び",
  "ぶ", "ベ", "ぼ", "",  "パ", "ピ", "プ", "ポ", "ぱ", "ぴ", "ぷ", "ペ", "ぽ", "",  "",
  "",  "",  "",  "",  "",  "@", "",  "",  "",  "",  "",  "",  "",  "",  "",
  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",
  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",  "",
  "",  "",  "",  "",  "",  "",  "",  " ", "ア", "イ", "ウ", "エ", "オ", "カ", "キ",
  "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ",
  "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ",
  "ラ", "ル", "レ", "ロ", "ワ", "ヲ", "ン", "ッ", "ャ", "ュ", "ョ", "ィ", "あ", "い", "う",
  "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ",
  "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む",
  "め", "も", "や", "ゆ", "よ", "ら", "リ", "る", "れ", "ろ", "わ", "を", "ん", "っ", "ゃ",
  "ゅ", "ょ", "ー", "",  "",  "?", "!", "",  "ァ", "ゥ", "ェ", "",  "",  "",  "♂",
  "",  "",  "",  "",  "ォ", "♀", "0", "1", "2", "3", "4", "5", "6", "7", "8",
  "9"
];

export const Char2 = {
  en: CharEn2,
  ja: CharJa2,
} as const;

export const decodeName2 = (loc: Locale, encoded: Uint8Array): string => {
  const max = NameSize2[loc] - 1;

  let decoded = '';
  for (let i = 0; i < max; i++) {
    const charcode = encoded[i];
    if (charcode == null) break;

    const c = Char2[loc][charcode];
    if (c === '' || c === '@') {
      // console.log(i, encoded[i]);
      break;
    }
    decoded += c;
  }
  return decoded;
};

export const encodeName2 = (loc: Locale, name: string): Uint8Array => {
  const encoded: number[] = [...Array(NameSize2[loc])].fill(0x50);

  let idx = 0;
  for (const c of name) {
    const code = Char2[loc].indexOf(c);
    if (code === -1) continue;

    encoded[idx++] = code;
    if (code === NAME_TERMINATE || idx === (NameSize2[loc] - 1)) {
      break;
    }
  }

  return new Uint8Array(encoded);
};
