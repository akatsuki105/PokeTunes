export * from './binary';
export * from './number';

export const clone = <T>(obj: T): T => {
  if (!obj) return obj;
  return Object.assign(Object.create(Object.getPrototypeOf(obj)), obj);
};

export const deepEqual = (a: unknown, b: unknown): boolean => {
  return JSON.stringify(a) === JSON.stringify(b);
};

export const zeropad = (n: number, length: number): string => {
  return n.toString(10).toUpperCase().padStart(length, '0');
};

export const download = (filename: string, blob: Blob) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  document.body.appendChild(a);
  a.download = filename;
  a.href = url;
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
};

export const hasDuplicated = (arr: unknown[]) => {
  const s = new Set(arr);
  return s.size !== arr.length;
};
