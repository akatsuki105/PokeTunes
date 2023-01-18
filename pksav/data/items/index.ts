import { CategoryRBYW, Gen4IDs1, ItemsGen1 } from './gen1';
import { Gen4IDs2, ItemsGen2 } from './gen2';
import { CategoryC, CategoryGS } from './gen2/category';
import { Gen4IDs3, ItemsGen3 } from './gen3';
import { CategoryE, CategoryFRLG, CategoryRS } from './gen3/category';

export * from './gen1';
export * from './gen2';
export * from './gen3';
export * from './tmhm';

const NullItems = {
  en: [] as string[],
  ja: [] as string[],
} as const;

const NullCategory = {
  items: [],
  keyItems: [],
  balls: [],
  tmhm: [],
  berries: [],
  heldItems: [0],
};

const Name = {
  Invalid: NullItems,
  RB: ItemsGen1,
  YW: ItemsGen1,
  GS: ItemsGen2,
  C: ItemsGen2,
  RS: ItemsGen3,
  FR: ItemsGen3,
  LG: ItemsGen3,
  E: ItemsGen3,
  DP: NullItems,
  Pt: NullItems,
  HGSS: NullItems,
} as const;

const Category = {
  Invalid: NullCategory,
  RB: CategoryRBYW,
  YW: CategoryRBYW,
  GS: CategoryGS,
  C: CategoryC,
  RS: CategoryRS,
  FR: CategoryFRLG,
  LG: CategoryFRLG,
  E: CategoryE,
  DP: NullCategory,
  Pt: NullCategory,
  HGSS: NullCategory,
} as const;

const Gen4ID = {
  Invalid: [],
  RB: Gen4IDs1,
  YW: Gen4IDs1,
  GS: Gen4IDs2,
  C: Gen4IDs2,
  RS: Gen4IDs3,
  FR: Gen4IDs3,
  LG: Gen4IDs3,
  E: Gen4IDs3,
  DP: [],
  Pt: [],
  HGSS: [],
} as const;

export const ItemData = {
  Name,
  Cat: Category,
  Gen4ID,
} as const;
