import { Image, ImageProps } from '@chakra-ui/react';
import { PKHEX } from 'src/constants';

const RANKS = ['', '', 'super', 'hyper', 'master'] as const;

const ROOT = `${PKHEX.ROOT}/${PKHEX.RIBBON}`;

const CoolG3: React.FC<ImageProps & { rank: number }> = ({ rank, ...props }) => {
  return <Image w='36px' h='36px' src={`${ROOT}/ribbong3cool${RANKS[rank]}.png`} {...props} />;
};

const BeautyG3: React.FC<ImageProps & { rank: number }> = ({ rank, ...props }) => {
  return <Image w='36px' h='36px' src={`${ROOT}/ribbong3beauty${RANKS[rank]}.png`} {...props} />;
};

const CuteG3: React.FC<ImageProps & { rank: number }> = ({ rank, ...props }) => {
  return <Image w='36px' h='36px' src={`${ROOT}/ribbong3cute${RANKS[rank]}.png`} {...props} />;
};

const SmartG3: React.FC<ImageProps & { rank: number }> = ({ rank, ...props }) => {
  return <Image w='36px' h='36px' src={`${ROOT}/ribbong3smart${RANKS[rank]}.png`} {...props} />;
};

const ToughG3: React.FC<ImageProps & { rank: number }> = ({ rank, ...props }) => {
  return <Image w='36px' h='36px' src={`${ROOT}/ribbong3tough${RANKS[rank]}.png`} {...props} />;
};

const ChampionG3: React.FC<ImageProps> = (props) => {
  return <Image w='36px' h='36px' src={`${ROOT}/ribbonchampiong3.png`} {...props} />;
};

const Winning: React.FC<ImageProps> = (props) => {
  return <Image w='36px' h='36px' src={`${ROOT}/ribbonwinning.png`} {...props} />;
};

const Victory: React.FC<ImageProps> = (props) => {
  return <Image w='36px' h='36px' src={`${ROOT}/ribbonvictory.png`} {...props} />;
};

const Artist: React.FC<ImageProps> = (props) => {
  return <Image w='36px' h='36px' src={`${ROOT}/ribbonartist.png`} {...props} />;
};

const Effort: React.FC<ImageProps> = (props) => {
  return <Image w='36px' h='36px' src={`${ROOT}/ribboneffort.png`} {...props} />;
};

const Country: React.FC<ImageProps> = (props) => {
  return <Image w='36px' h='36px' src={`${ROOT}/ribboncountry.png`} {...props} />;
};

const Earth: React.FC<ImageProps> = (props) => {
  return <Image w='36px' h='36px' src={`${ROOT}/ribbonearth.png`} {...props} />;
};

const World: React.FC<ImageProps> = (props) => {
  return <Image w='36px' h='36px' src={`${ROOT}/ribbonworld.png`} {...props} />;
};

export const Ribbon = {
  CoolG3,
  BeautyG3,
  CuteG3,
  SmartG3,
  ToughG3,
  ChampionG3,
  Winning,
  Victory,
  Artist,
  Effort,
  Country,
  Earth,
  World,
};
