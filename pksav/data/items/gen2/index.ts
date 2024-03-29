import en from './text_ItemsG2_en.txt?raw';
import ja from './text_ItemsG2_ja.txt?raw';

export const ItemsGen2 = {
  en: en.split('\n'),
  ja: ja.split('\n'),
} as const;

// deno-fmt-ignore
export const Gen4IDs2 = [
  0,   // (なし)
  1,   // マスターボール
  2,   // ハイパーボール
  213, // ひかりのこな
  3,   // スーパーボール
  4,   // モンスターボール
  NaN, // カビチュウ (０)
  450, // じてんしゃ
  81, 18,

  // やけどなおし
  19,20,21,22,23,24,25,26,17,78,

  // むしよけスプレー
  79,41,82,83,84,NaN,45,46,47,48,

  256, // ラッキーパンチ
  49,50,60,85,257,92,63,27,28,

  // げんきのかたまり
  29,55,76,77,56,NaN,30,31,32,57,

  NaN, // カビチュウ (３)
  58,  // ディフェンダー
  59,  // スピーダー
  61,  // スペシャルアップ
  444, // コインケース
  NaN, // ダウンジングマシン
  NaN, // カビチュウ (４)
  216, // がくしゅうそうち
  445, // ボロのつりざお
  446, // いいつりざお
  891, // ぎんのはっぱ
  447, // すごいつりざお
  51,  // ポイントアップ
  38,39,40, // ピーピーエイド, ピーピーリカバー, ピーピーエイダー
  478, // あかいウロコ
  464, // ひでんのくすり
  456, // ふねのチケット(SS)
  484, // ふしぎなタマゴ
  474, // とうめいなスズ*
  482, // ぎんいろのはね
  33,  // モーモーミルク
  217, // せんせいのツメ
  151, // どくけしのみ
  890, // きんのはっぱ
  237,244,149,153,

  // こおったきのみ
  152,245,221,156,150,485,86,87,222,487,

  // カビチュウ (５)
  NaN,223,486,488,224,243,248,490,241,491,
  NaN, // カビチュウ (６)
  489,
  240,
  473, // おいしいシッポ
  NaN, // ピンクのリボン
  259,228,246,242,157,

  88,  // しんじゅ
  89,  // おおきなしんじゅ
  229, // かわらずのいし
  247, // のろいのおふだ
  504, // いかりまんじゅう
  10002, // ジーエスボール
  NaN, // ブルーカード*
  239, // きせきのタネ
  258, // ふといホネ
  230, // きあいのハチマキ
  NaN, // カビチュウ (７)
  34,35,36,37, // ちからのこな, ちからのねっこ, ばんのうごな, ふっかつそう
  238, // かたいいし
  231, // しあわせタマゴ
  475, // カードキー
  481, // きかいのぶひん
  NaN, // タマゴけん*
  NaN, // おとしもの
  90, // ほしのすな
  91, // ほしのかけら
  476, // ちかのカギ
  480, // ていきけん
  NaN,NaN,NaN, // カビチュウ (８,9,10)
  249, // もくたん
  43, // きのみジュース
  232,  // ピントレンズ
  NaN, // カビチュウ(11)
  NaN, // カビチュウ(12)
  233, // メタルコート
  250, // りゅうのキバ
  NaN, // カビチュウ(13)
  234, // たべのこし
  NaN,NaN,NaN,  // カビチュウ(14,15,16)
  154, // ふしぎなきのみ
  235, // りゅうのウロコ
  NaN, // はかいのいでんし
  NaN,NaN,NaN, // カビチュウ(17,18,19)
  44,  // せいなるはい
  495, // ヘビーボール
  NaN, // はながらメール
  493, // レベルボール

  // ルアーボール
  498,492,NaN,236,497,498,496,NaN,NaN,80,

  NaN, // みずたまリボン
  NaN, // カビチュウ (２１)
  252, // アップグレード
  155, // きのみ
  158, // おうごんのみ
  477, // ゼニガメじょうろ
  NaN, // カビチュウ (２２)
  500, // パークボール
  483, // にじいろのはね
  NaN, // カビチュウ (２３)

  // かわらのかけら
  NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,

  // カビチュウ (２４)
  NaN,
  
  // わざマシン1~50
  ...Array(52).fill(10000),

  // ひでんマシン1~12
  420, 421, 422, 423, 424, 425, 737,
  ...Array(5).fill(10000),
  /*
    425,426,
    427,NaN,NaN,NaN,NaN,NaN,
   */
] as const;
