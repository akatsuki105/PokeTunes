import { zeropad } from 'utils';

export const loadU16BE = (src: Uint8Array, addr: number): number => {
  const hi = src[addr];
  const lo = src[addr + 1];
  return lo | (hi << 8);
};

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

export const loadU24BE = (src: Uint8Array, addr: number): number => {
  const b2 = src[addr];
  const b1 = src[addr + 1];
  const b0 = src[addr + 2];
  return (b2 << 16) | (b1 << 8) | b0;
};

export const storeU16BE = (src: Uint8Array, addr: number, val: number) => {
  src[addr + 1] = val & 0xFF;
  src[addr] = (val >> 8) & 0xFF;
};

export const storeU16LE = (src: Uint8Array, addr: number, val: number) => {
  src[addr] = val & 0xFF;
  src[addr + 1] = (val >> 8) & 0xFF;
};

export const storeU24BE = (src: Uint8Array, addr: number, val: number) => {
  src[addr + 2] = val & 0xFF;
  src[addr + 1] = (val >> 8) & 0xFF;
  src[addr] = (val >> 16) & 0xFF;
};

export const storeU32LE = (src: Uint8Array, addr: number, val: number) => {
  src[addr] = val & 0xFF;
  src[addr + 1] = (val >> 8) & 0xFF;
  src[addr + 2] = (val >> 16) & 0xFF;
  src[addr + 3] = (val >> 24) & 0xFF;
};

export const bit = (val: number, idx: number): boolean => {
  return ((val >> idx) & 0b1) === 0b1;
};

export const setBit = (val: number, idx: number, bool: boolean): number => {
  const mask = ~(1 << idx);
  const b = bool ? 1 : 0;
  return (val & mask) | (b << idx);
};

export const slice = (buf: Uint8Array, start: number, length: number) => {
  return buf.subarray(start, start + length);
};

// parse 3byte BCD
export const parseBCD24 = (bcd24: number): number => {
  let result = 0;
  for (let i = 0; i < 6; i++) {
    const digit = bcd24 >> (i * 4) & 0xF;
    result += (10 ** i) * digit;
  }
  return result;
};

// parse 3byte BCD
export const BCD24 = (val: number): number => {
  const s = zeropad(val, 6);

  let bcd24 = 0;
  for (let i = 0; i < 6; i++) {
    const digit = Number(s[5 - i]);
    bcd24 |= digit << (i * 4);
  }
  return bcd24;
};
