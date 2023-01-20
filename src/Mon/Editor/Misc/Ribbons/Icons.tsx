import { Image, ImageProps, Tooltip } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { PKHEX } from 'src/constants';

const RANKS = ['', '', 'super', 'hyper', 'master'] as const;

const ROOT = `${PKHEX.ROOT}/${PKHEX.RIBBON}`;

const CoolG3: React.FC<ImageProps & { rank: number }> = ({ rank, ...props }) => {
  const { t } = useTranslation();
  return (
    <Tooltip label={t(`ribbon.g3cool.${RANKS[rank]}`)} bg='brand.200' color='white'>
      <Image w='36px' h='36px' src={`${ROOT}/ribbong3cool${RANKS[rank]}.png`} {...props} />
    </Tooltip>
  );
};

const BeautyG3: React.FC<ImageProps & { rank: number }> = ({ rank, ...props }) => {
  const { t } = useTranslation();
  return (
    <Tooltip label={t(`ribbon.g3beauty.${RANKS[rank]}`)} bg='brand.200' color='white'>
      <Image w='36px' h='36px' src={`${ROOT}/ribbong3beauty${RANKS[rank]}.png`} {...props} />
    </Tooltip>
  );
};

const CuteG3: React.FC<ImageProps & { rank: number }> = ({ rank, ...props }) => {
  const { t } = useTranslation();
  return (
    <Tooltip label={t(`ribbon.g3cute.${RANKS[rank]}`)} bg='brand.200' color='white'>
      <Image w='36px' h='36px' src={`${ROOT}/ribbong3cute${RANKS[rank]}.png`} {...props} />
    </Tooltip>
  );
};

const SmartG3: React.FC<ImageProps & { rank: number }> = ({ rank, ...props }) => {
  const { t } = useTranslation();
  return (
    <Tooltip label={t(`ribbon.g3smart.${RANKS[rank]}`)} bg='brand.200' color='white'>
      <Image w='36px' h='36px' src={`${ROOT}/ribbong3smart${RANKS[rank]}.png`} {...props} />
    </Tooltip>
  );
};

const ToughG3: React.FC<ImageProps & { rank: number }> = ({ rank, ...props }) => {
  const { t } = useTranslation();
  return (
    <Tooltip label={t(`ribbon.g3tough.${RANKS[rank]}`)} bg='brand.200' color='white'>
      <Image w='36px' h='36px' src={`${ROOT}/ribbong3tough${RANKS[rank]}.png`} {...props} />
    </Tooltip>
  );
};

const ChampionG3: React.FC<ImageProps> = (props) => {
  const { t } = useTranslation();
  return (
    <Tooltip label={t('ribbon.championg3')} bg='brand.200' color='white'>
      <Image w='36px' h='36px' src={`${ROOT}/ribbonchampiong3.png`} {...props} />
    </Tooltip>
  );
};

const Winning: React.FC<ImageProps> = (props) => {
  const { t } = useTranslation();
  return (
    <Tooltip label={t('ribbon.winning')} bg='brand.200' color='white'>
      <Image w='36px' h='36px' src={`${ROOT}/ribbonwinning.png`} {...props} />
    </Tooltip>
  );
};

const Victory: React.FC<ImageProps> = (props) => {
  const { t } = useTranslation();
  return (
    <Tooltip label={t('ribbon.victory')} bg='brand.200' color='white'>
      <Image w='36px' h='36px' src={`${ROOT}/ribbonvictory.png`} {...props} />
    </Tooltip>
  );
};

const Artist: React.FC<ImageProps> = (props) => {
  const { t } = useTranslation();
  return (
    <Tooltip label={t('ribbon.artist')} bg='brand.200' color='white'>
      <Image w='36px' h='36px' src={`${ROOT}/ribbonartist.png`} {...props} />
    </Tooltip>
  );
};

const Effort: React.FC<ImageProps> = (props) => {
  const { t } = useTranslation();
  return (
    <Tooltip label={t('ribbon.effort')} bg='brand.200' color='white'>
      <Image w='36px' h='36px' src={`${ROOT}/ribboneffort.png`} {...props} />
    </Tooltip>
  );
};

const Country: React.FC<ImageProps> = (props) => {
  const { t } = useTranslation();
  return (
    <Tooltip label={t('ribbon.country')} bg='brand.200' color='white'>
      <Image w='36px' h='36px' src={`${ROOT}/ribboncountry.png`} {...props} />
    </Tooltip>
  );
};

const Earth: React.FC<ImageProps> = (props) => {
  const { t } = useTranslation();
  return (
    <Tooltip label={t('ribbon.earth')} bg='brand.200' color='white'>
      <Image w='36px' h='36px' src={`${ROOT}/ribbonearth.png`} {...props} />
    </Tooltip>
  );
};

const World: React.FC<ImageProps> = (props) => {
  const { t } = useTranslation();
  return (
    <Tooltip label={t('ribbon.world')} bg='brand.200' color='white'>
      <Image w='36px' h='36px' src={`${ROOT}/ribbonworld.png`} {...props} />
    </Tooltip>
  );
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
