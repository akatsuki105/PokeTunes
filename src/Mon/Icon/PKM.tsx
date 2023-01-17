import { Box, Image, ImageProps } from '@chakra-ui/react';
import { isPK1, isPK2, ItemData, PKM, PKMFunc } from 'pksav';
import { useSmallerScreen } from 'src/hooks';
import { ItemIcon } from 'src/components';
import { PKHEX, POKEAPI } from 'src/constants';

const PKM_ROOT = `${PKHEX.ROOT}/${PKHEX.PKM_SPRITE}`;
const PKM_SPR_ROOT = `${POKEAPI.ROOT}/${POKEAPI.PKM_SPRITE}`;

export const PKMIconURL = (id: string, isShiny = false): string => {
  const dir = isShiny ? PKHEX.PKM_SPRITE_DIR : PKHEX.PKM_SHINY_SPRITE_DIR;
  return `${PKM_ROOT}/${dir}/b_${id}.png`;
};

export const PKMIcon: React.FC<{ p: PKM }> = ({ p }) => {
  if (PKMFunc.IsDummy(p)) return <Image src={`/images/dummy.png`} />;

  const shiny = PKMFunc.IsShiny(p);
  const id = `${PKMFunc.UniqueID(p)}${shiny ? 's' : ''}`;
  const src = PKMIconURL(id, shiny);

  return (
    <Box position='relative'>
      <Image src={src} />
      <Overlay p={p} />
    </Box>
  );
};

export const PKMSprite: React.FC<{ p: PKM } & Omit<ImageProps, 'p'>> = ({ p, ...props }) => {
  let dir = 'generation-v/black-white';
  switch (true) {
    case isPK1(p):
      dir = 'generation-i/red-blue/transparent';
      break;
    case isPK2(p):
      dir = 'generation-ii/crystal/transparent';
      break;
  }

  const url = `${PKM_SPR_ROOT}/${dir}/${PKMFunc.DexNo(p)}.png`;
  return <Image src={url} {...props} />;
};

// Item and Egg icon
const Overlay: React.FC<{ p: PKM }> = ({ p }) => {
  const shiny = PKMFunc.IsShiny(p);
  const itemID = ItemData.Gen4ID[p.ver][p.item];

  const problems = PKMFunc.Problems(p);
  const fatals = problems.filter((problem) => problem.severity === 'fatal').length > 0;
  const warns = problems.filter((problem) => problem.severity === 'warn').length > 0;

  return (
    <Box>
      {(shiny) && <Image src={`/images/rare_icon.png`} style={{ position: 'absolute', top: '12px', left: '12px' }} />}
      {(!fatals && warns) && <Image src={`/images/hint.png`} style={{ position: 'absolute', top: '38px', left: '8px' }} />}
      {(fatals) && <Image src={`/images/warn.png`} style={{ position: 'absolute', top: '38px', left: '8px' }} />}
      {(itemID > 0 && !isPK1(p)) && <ItemOverlay itemID4={itemID} />}
      {(p.isEgg) && <Image src={`/images/egg.png`} style={{ position: 'absolute', top: '38px', right: '8px' }} />}
    </Box>
  );
};

const ItemOverlay: React.FC<{ itemID4: number }> = ({ itemID4 }) => {
  const isMobile = useSmallerScreen('sm');

  const style = (isMobile ? { top: '28px', right: '4px' } : { top: '36px', right: '4px' });
  return (
    <Box style={{ position: 'absolute', ...style }}>
      <ItemIcon itemID4={itemID4} />
    </Box>
  );
};
