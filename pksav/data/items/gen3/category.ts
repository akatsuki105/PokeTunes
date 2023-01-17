// deno-fmt-ignore
const items = [
  13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 63, 64, 65, 66, 67, 68, 69, 70, 71, 73, 74, 75, 76, 77, 78, 79, 80, 81, 83, 84, 85, 86, 93, 94, 95, 96, 97, 98, 103, 104, 106, 107, 108, 109, 110, 111, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 254, 255, 256, 257, 258,
] as const;

// deno-fmt-ignore
const keyItemsRS = [
  259, 260, 261, 262, 263, 264, 265, 266, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288,
] as const;

// deno-fmt-ignore
const balls = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
] as const;

// deno-fmt-ignore
const tmRS = [
  289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338,
] as const;

// deno-fmt-ignore
const hmRS = [
  339, 340, 341, 342, 343, 344, 345, 346,
] as const;

// deno-fmt-ignore
const keyItemsFRLG = [
  ...keyItemsRS, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374
] as const;

// deno-fmt-ignore
const keyItemsE = [
  ...keyItemsFRLG, 375, 376,
] as const;

const heldItems = [
  0,
  ...items,
  ...balls,
  ...tmRS,
] as const;

export const CategoryRS = {
  items,
  keyItems: keyItemsRS,
  balls,
  tmhm: [...tmRS, ...hmRS],
  heldItems,
} as const;

// deno-fmt-ignore
export const CategoryFRLG = {
  items,
  keyItems: keyItemsFRLG,
  balls,
  tmhm: [...tmRS, ...hmRS],
  heldItems,
} as const;

// deno-fmt-ignore
export const CategoryE = {
  items,
  keyItems: keyItemsE,
  balls,
  tmhm: [...tmRS, ...hmRS],
  heldItems,
} as const;
