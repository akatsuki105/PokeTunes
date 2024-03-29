import en from './text_ItemsG1_en.txt?raw';
import ja from './text_ItemsG1_ja.txt?raw';

export const ItemsGen1 = {
  en: en.split('\n'),
  ja: ja.split('\n'),
} as const;

export const CategoryRBYW = {
  items: [...Array(ItemsGen1.en.length)].map((_, i) => i),
  keyItems: [],
  balls: [],
  tmhm: [],
  berries: [],
  heldItems: [0],
} as const;

export const Gen4IDs1 = [
  0, // (なし)
  1, // マスターボール
  2, // ハイパーボール
  3, // スーパーボール
  4, // モンスターボール
  442, // タウンマップ
  450, // じてんしゃ
  NaN, // ？？？？？ (７)
  5, // サファリボール
  NaN, // ポケモンずかん
  81, // つきのいし
  18, // どくけし
  19, // やけどなおし
  20, // こおりなおし
  21, // ねむけざまし
  22, // まひなおし
  23, // かいふくのくすり
  24, // まんたんのくすり
  25, // すごいキズぐすり
  26, // いいキズぐすり
  17, // キズぐすり
  NaN, // グレーバッジ
  NaN, // ブルーバッジ
  NaN, // かみなりバッジ
  NaN, // レインボーバッジ
  NaN, // ピンクバッジ
  NaN, // ゴールドバッジ
  NaN, // クリムゾンバッジ
  NaN, // グリーンバッジ
  78, // あなぬけのひも
  79, // むしよけスプレー
  103, // ひみつのコハク
  82, // ほのおのいし
  83, // かみなりのいし
  84, // みずのいし
  45, // マックスアップ
  46, // タウリン
  47, // ブロムヘキシン
  48, // インドメタシン
  49, // リゾチウム
  50, // ふしぎなアメ
  102, // こうらのカセキ
  101, // かいのカセキ
  467, // ひみつのカギ(カントー)
  NaN, // ？？？？？ (４４)
  460, // ひきかえけん(1)
  60, // ヨクアタール
  85, // リーフのいし
  475, // カードキー
  92, // きんのたま
  51, // ポイントアップ (未使用)
  63, // ピッピにんぎょう
  27, // なんでもなおし
  28, // げんきのかけら
  29, // げんきのかたまり
  55, // エフェクトガード
  76, // シルバースプレー
  77, // ゴールドスプレー
  61, // クリティカット
  NaN, // コイン
  30, // おいしいみず
  31, // サイコソーダ
  32, // ミックスオレ
  456, // ふねのチケット
  877, // きんのいれば
  57, // プラスパワー
  58, // ディフェンダー
  59, // スピーダー
  61, // スペシャルアップ
  444, // コインケース
  875, // おとどけもの
  471, // ダウジングマシン
  874, // シルフスコープ
  651, // ポケモンのふえ
  878, // エレベータのカギ
  216, // がくしゅうそうち
  445, // ボロのつりざお
  446, // いいつりざお
  447, // すごいつりざお
  51, // ポイントアップ
  38, // ピーピーエイド
  39, // ピーピーリカバー
  40, // ピーピーエイダー
  41, // ピーピーマックス
  ...Array(112).fill(NaN),
  420, // ひでんマシン01
  421, // ひでんマシン02
  422, // ひでんマシン03
  423, // ひでんマシン04
  424, // ひでんマシン04
  ...Array(55).fill(10000), // わざマシン1~55
];
