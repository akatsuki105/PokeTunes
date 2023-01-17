// deno-fmt-ignore
const items = [
  3, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 46, 47, 48, 49, 51, 52, 53, 57, 60, 62, 63, 64, 65, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 117, 118, 119, 121, 122, 123, 124, 125, 126, 131, 132, 138, 139, 140, 143, 144, 146, 150, 151, 152, 156, 158, 163, 167, 168, 169, 170, 172, 173, 174, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189
] as const;

// deno-fmt-ignore
const balls = [
  1, 2, 4, 5, 157, 159, 160, 161, 164, 165, 166
] as const

// deno-fmt-ignore
const keyItemsGS = [
  7, 54, 55, 58, 59, 61, 66, 67, 68, 69, 71, 127, 128, 130, 133, 134, 175, 178
] as const

// deno-fmt-ignore
const tmhm = [
  191, 192, 193, 194, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249
] as const

const heldItems = [
  0,
  ...items,
  ...balls,
  ...tmhm,
] as const;

export const CategoryGS = {
  items,
  balls,
  keyItems: keyItemsGS,
  tmhm: tmhm,
  heldItems,
};

export const CategoryC = {
  items,
  balls,
  keyItems: [...keyItemsGS, 70, 115, 116, 129],
  tmhm: tmhm,
  heldItems,
};