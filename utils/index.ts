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

export const hiraToKana = (str: string): string => {
  return str.replace(/[\u3041-\u3096]/g, function (match) {
    const chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
};

/**
 * 合計 total になるように count 個の乱数を生成(それぞれの乱数の最大値はmax)
 */
export const createRandArray = (count: number, total: number, max: number) => {
  const result = [];
  let randNumAmount = count;
  let remain = total;

  for (let i = 0; i < randNumAmount - 1; i++) {
    let val = 0;
    do {
      val = Math.floor(Math.random() * max);
    } while (Math.sign(remain - val) == -1 || Math.sign(remain - val) == 0);

    remain = remain - val;
    result.push(val);
  }

  result.push(remain);
  return shuffle(result);
};

// Randomize array order
const shuffle = <T>(arr: T[]): T[] => {
  for (let i = arr.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};
