#!/usr/bin/env deno run --allow-read --allow-net --allow-write

import { Command } from 'https://deno.land/x/cliffy@v0.25.4/command/mod.ts';
import * as imagescript from 'https://deno.land/x/imagescript@1.2.15/mod.ts';

type Mode = 'FindTransparentRow' | 'FindNotTransparent';

// crop transparent region from asset icon
const main = async () => {
  const { options: { outline }, args } = await new Command()
    .name('itemcrop.ts')
    .version('1.0.0')
    .description('crop (and set outline)')
    .option('-o, --outline', 'set outline', { default: false })
    .arguments('<path> <gen4ID>')
    .usage('pokesprite/icons/key-item/pass.png 480')
    .parse(Deno.args);

  const path = args[0];
  const gen4ID = Number(args[1]) as number;
  if (!gen4ID) {
    console.log('gen4ID');
    return;
  }

  const bin = Deno.readFileSync(path);
  const img = (await imagescript.decode(bin)) as imagescript.Image;

  let [x0, y0, x1, y1] = [0, 0, img.width - 1, img.height - 1];
  let mode: Mode = 'FindNotTransparent';
  let done = false;

  for (let y = 0; y < img.height; y++) {
    if (done) break;

    let allTransparent = true;
    for (let x = 0; x < img.width; x++) {
      const pixel = img.getRGBAAt(x + 1, y + 1);

      // 最初に透明でない行を探す
      if (pixel[3] !== 0x00) {
        allTransparent = false;

        if (mode === 'FindNotTransparent') {
          // 下端の切り取りを探すモードに
          mode = 'FindTransparentRow';
          y0 = y;
          if (outline) y0--;
          break;
        }
      }
    }

    if (allTransparent && mode === 'FindTransparentRow') {
      y1 = y;
      if (outline) y1++;
      done = true;
    }
  }

  mode = 'FindNotTransparent';
  done = false;
  for (let x = 0; x < img.width; x++) {
    if (done) break;

    let allTransparent = true;
    for (let y = y0; y < y1; y++) {
      const pixel = img.getRGBAAt(x + 1, y + 1);

      // 最初に透明でない列を探す
      if (pixel[3] !== 0x00) {
        allTransparent = false;

        if (mode === 'FindNotTransparent') {
          // 下端の切り取りを探すモードに
          mode = 'FindTransparentRow';
          x0 = x;
          if (outline) x0--;
          break;
        }
      }
    }

    if (allTransparent && mode === 'FindTransparentRow') {
      x1 = x;
      if (outline) x1++;
      done = true;
    }
  }

  img.crop(x0, y0, x1 - x0, y1 - y0);

  // 輪郭生成
  if (outline) {
    for (let y = 1; y < img.height - 1; y++) {
      for (let x = 1; x < img.width - 1; x++) {
        // 上下
        const [X, Y] = [x + 1, y + 1];
        const [r, g, b, a] = img.getRGBAAt(X, Y);
        if (r + g + b === 96 && a > 0) {
          const up = img.getRGBAAt(X, Y - 1);
          if (up[3] === 0) img.setPixelAt(X, Y - 1, 0xFFFFFFFF);

          const down = img.getRGBAAt(X, Y + 1);
          if (down[3] === 0) img.setPixelAt(X, Y + 1, 0xFFFFFFFF);

          const left = img.getRGBAAt(X - 1, Y);
          if (left[3] === 0) img.setPixelAt(X - 1, Y, 0xFFFFFFFF);

          const right = img.getRGBAAt(X + 1, Y);
          if (right[3] === 0) img.setPixelAt(X + 1, Y, 0xFFFFFFFF);
        }
      }
    }

    let excluded: [number, number][] = [];
    const isExcluded = (x: number, y: number): boolean => {
      for (const point of excluded) {
        if (point[0] === x && point[1] === y) return true;
      }
      return false;
    };

    for (let y = 0; y < img.height; y++) {
      for (let x = 0; x < img.width; x++) {
        const [X, Y] = [x + 1, y + 1];

        // 上下
        const pixel = img.getRGBAAt(X, Y);
        if (pixel[3] === 0x00) {
          let white = 0;

          if (y > 0) {
            const up = img.getPixelAt(X, Y - 1);
            if (up === 0xFFFFFFFF && !isExcluded(X, Y - 1)) {
              white++;
            }
          }

          if (y < img.height - 1) {
            const down = img.getPixelAt(X, Y + 1);
            if (down === 0xFFFFFFFF && !isExcluded(X, Y + 1)) white++;
          }

          if (x > 0) {
            const left = img.getPixelAt(X - 1, Y);
            if (left === 0xFFFFFFFF && !isExcluded(X - 1, Y)) white++;
          }

          if (x < img.width - 1) {
            const right = img.getPixelAt(X + 1, Y);
            if (right === 0xFFFFFFFF && !isExcluded(X + 1, Y)) white++;
          }

          if (white >= 2) {
            img.setPixelAt(X, Y, 0xFFFFFFFF);
            excluded.push([X, Y]);
          }
        }
      }
    }
  }

  console.log(Deno.cwd());
  const output = `${Deno.cwd()}/public/images/items/bitem_${gen4ID}.png`;
  try {
    Deno.statSync(output);
  } catch (e) {
    Deno.writeFileSync(output, await img.encode(0));
  }
};

main();
