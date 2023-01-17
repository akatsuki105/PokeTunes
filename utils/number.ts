export const uint8 = (val: number): number => {
  return maxUint(val, 255);
};

export const uint16 = (val: number): number => {
  return maxUint(val, 65535);
};

export const uint32 = (val: number): number => {
  return maxUint(val, 0xFFFFFFFF);
};

export const maxUint = (val: number, max: number): number => {
  if (Number.isNaN(val)) return 0;

  val = Math.floor(val);
  if (val > max) val = max;
  if (val < 0) val = 0;
  return val;
};
