#!/usr/bin/env deno run --allow-read

import { loadU16LE, loadU32LE } from "./common.ts";

export const parseBinLinkerAccessor = (bin: Uint8Array) => {
  const magic = [bin[0], bin[1]];
  const length = loadU16LE(bin, 2);
  const entries: Uint8Array[] = [];
  for (let i = 0; i < length; i++) {
    const ofs = 4 + (4 * i);
    const start = loadU32LE(bin, ofs);
    const end = loadU32LE(bin, ofs + 4);
    const entry = bin.slice(start, end);
    entries.push(entry);
  }

  return entries;
};
