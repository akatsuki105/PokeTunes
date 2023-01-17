export type GameVersion1 = 'RB' | 'YW';
export type GameVersion2 = 'GS' | 'C';
export type GameVersion3 = 'RS' | 'FR' | 'LG' | 'E';
export type GameVersion4 = 'DP' | 'Pt' | 'HGSS';
export type GameVersion = 'Invalid' | GameVersion1 | GameVersion2 | GameVersion3 | GameVersion4;

export type Locale = 'ja' | 'en'; // Game Locale

export type Game = [GameVersion, Locale];

export type Game1 = [GameVersion1, 'en' | 'ja'];
export type Game2 = [GameVersion2, 'en' | 'ja'];
export type Game3 = [GameVersion3, 'en' | 'ja'];

export const isG1 = (ver: GameVersion): boolean => {
  return ['RB', 'YW'].includes(ver);
};

export const isGB = (ver: GameVersion): boolean => {
  return ['RB', 'YW', 'GS', 'C'].includes(ver);
};

export const isGBA = (ver: GameVersion): boolean => {
  return ['RS', 'E', 'FR', 'LG'].includes(ver);
};

export const Gen = {
  Invalid: 0,
  RB: 1,
  YW: 1,
  GS: 2,
  C: 2,
  RS: 3,
  FR: 3,
  LG: 3,
  E: 3,
  DP: 4,
  Pt: 4,
  HGSS: 4,
} as const;
