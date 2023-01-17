export const loadU16LE = (src: Uint8Array, addr: number): number => {
  const lo = src[addr];
  const hi = src[addr + 1];
  return lo | (hi << 8);
};

export const loadU32LE = (src: Uint8Array, addr: number): number => {
  const b0 = src[addr];
  const b8 = src[addr + 1];
  const b16 = src[addr + 2];
  const b24 = src[addr + 3];
  let result = b0 | (b8 << 8) | (b16 << 16) | (b24 << 24);
  if (result < 0) result += 0x1_0000_0000;
  return result;
};
