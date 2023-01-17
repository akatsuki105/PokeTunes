import { Image, ImageProps } from '@chakra-ui/react';
import { hmGen4IDs, tmGen4IDs, TMHMFunc } from 'pksav';
import { useSmallerScreen } from 'src/hooks';

const ITEM_ROOT = '/images/items';

export const ItemIconURL = (gen4ID: number) => {
  const tmNo = tmGen4IDs.indexOf(gen4ID);
  if (tmNo >= 0) {
    const TMIconURL = (tmNo: number) => {
      const movetype = TMHMFunc.TMType(tmNo);
      return `${ITEM_ROOT}/tm/${movetype}.png`;
    };
    return TMIconURL(tmNo);
  }

  const hmNo = hmGen4IDs.indexOf(gen4ID);
  if (hmNo >= 0) {
    const HMIconURL = (hmNo: number) => {
      const movetype = TMHMFunc.HMType(hmNo);
      return `${ITEM_ROOT}/tm/${movetype}.png`;
    };
    return HMIconURL(hmNo);
  }

  return `${ITEM_ROOT}/bitem_${gen4ID}.png`;
};

export const ItemIcon: React.FC<{ itemID4: number } & Omit<ImageProps, 'p'>> = ({ itemID4, ...props }) => {
  const isMobile = useSmallerScreen('sm');

  const size = isMobile ? '16px' : 'auto';
  return <Image src={ItemIconURL(itemID4)} width={size} {...props} />;
};
