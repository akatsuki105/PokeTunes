import {
  BoxProps,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { t } from 'i18next';
import { Ribbon3 } from 'pksav';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { ribbon3Changed } from 'src/stores/pkm';
import { Ribbon } from './Icons';

type RibbonSetter = (name: keyof Ribbon3, val: boolean | number) => void;

export const Ribbons3: React.FC<{ r: Ribbon3 }> = ({ r }) => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const hover = useColorModeValue('blackAlpha.400', 'whiteAlpha.400');

  const setRibbon = <T extends keyof Ribbon3>(name: T, val: Ribbon3[T]) => {
    const rib = { ...r };
    rib[name] = val;
    dispatch(ribbon3Changed(rib as Ribbon3));
  };

  return (
    <>
      <RibbonContainer3
        r={r}
        gap={6}
        borderWidth='1px'
        borderRadius='lg'
        px={4}
        py={2}
        _hover={{ backgroundColor: hover, borderColor: 'brand.200' }}
        cursor='pointer'
        flexWrap='wrap'
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose} size='xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t('ribbon')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RibbonEditor3 r={r} setRibbon={setRibbon} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const RibbonContainer3: React.FC<{ r: Ribbon3 } & BoxProps> = ({ r, ...props }) => {
  return (
    <Flex
      gap={4}
      minH='54px'
      {...props}
    >
      {r.cool > 0 && <Ribbon.CoolG3 rank={r.cool} />}
      {r.beauty > 0 && <Ribbon.BeautyG3 rank={r.beauty} />}
      {r.cute > 0 && <Ribbon.CuteG3 rank={r.cute} />}
      {r.smart > 0 && <Ribbon.SmartG3 rank={r.smart} />}
      {r.tough > 0 && <Ribbon.ToughG3 rank={r.tough} />}
      {r.champion && <Ribbon.ChampionG3 />}
      {r.winning && <Ribbon.Winning />}
      {r.victory && <Ribbon.Victory />}
      {r.artist && <Ribbon.Artist />}
      {r.effort && <Ribbon.Effort />}
      {r.country && <Ribbon.Country />}
      {r.earth && <Ribbon.Earth />}
      {r.world && <Ribbon.World />}
    </Flex>
  );
};

const RibbonEditor3: React.FC<{ r: Ribbon3; setRibbon: RibbonSetter }> = ({ r, setRibbon }) => {
  const opacity = 0.33;
  const toggleRibbon = <T extends keyof Ribbon3>(name: T) => {
    const old = r[name];
    if (typeof old === 'boolean') {
      setRibbon(name, !old);
    }
  };
  const toggleContestRibbon = <T extends keyof Ribbon3>(name: T, rank: number) => {
    const old = r[name];
    if (typeof old === 'number') {
      if (old === rank) {
        setRibbon(name, 0);
      } else {
        setRibbon(name, rank);
      }
    }
  };

  return (
    <Flex py={4} gap={4} flexWrap='wrap'>
      <Ribbon.ChampionG3 opacity={r.champion ? 1 : opacity} cursor='pointer' onClick={() => toggleRibbon('champion')} />
      <Ribbon.CoolG3 rank={1} opacity={r.cool > 0 ? 1 : opacity} cursor='pointer' onClick={() => toggleContestRibbon('cool', 1)} />
      <Ribbon.CoolG3 rank={2} opacity={r.cool > 1 ? 1 : opacity} cursor='pointer' onClick={() => toggleContestRibbon('cool', 2)} />
      <Ribbon.CoolG3 rank={3} opacity={r.cool > 2 ? 1 : opacity} cursor='pointer' onClick={() => toggleContestRibbon('cool', 3)} />
      <Ribbon.CoolG3 rank={4} opacity={r.cool > 3 ? 1 : opacity} cursor='pointer' onClick={() => toggleContestRibbon('cool', 4)} />
      <Ribbon.BeautyG3 rank={1} opacity={r.beauty > 0 ? 1 : opacity} cursor='pointer' onClick={() => toggleContestRibbon('beauty', 1)} />
      <Ribbon.BeautyG3 rank={2} opacity={r.beauty > 1 ? 1 : opacity} cursor='pointer' onClick={() => toggleContestRibbon('beauty', 2)} />
      <Ribbon.BeautyG3 rank={3} opacity={r.beauty > 2 ? 1 : opacity} cursor='pointer' onClick={() => toggleContestRibbon('beauty', 3)} />
      <Ribbon.BeautyG3 rank={4} opacity={r.beauty > 3 ? 1 : opacity} cursor='pointer' onClick={() => toggleContestRibbon('beauty', 4)} />
      <Ribbon.CuteG3 rank={1} opacity={r.cute > 0 ? 1 : opacity} cursor='pointer' onClick={() => toggleContestRibbon('cute', 1)} />
      <Ribbon.CuteG3 rank={2} opacity={r.cute > 1 ? 1 : opacity} cursor='pointer' onClick={() => toggleContestRibbon('cute', 2)} />
      <Ribbon.CuteG3 rank={3} opacity={r.cute > 2 ? 1 : opacity} cursor='pointer' onClick={() => toggleContestRibbon('cute', 3)} />
      <Ribbon.CuteG3 rank={4} opacity={r.cute > 3 ? 1 : opacity} cursor='pointer' onClick={() => toggleContestRibbon('cute', 4)} />
      <Ribbon.SmartG3 rank={1} opacity={r.smart > 0 ? 1 : opacity} cursor='pointer' onClick={() => toggleContestRibbon('smart', 1)} />
      <Ribbon.SmartG3 rank={2} opacity={r.smart > 1 ? 1 : opacity} cursor='pointer' onClick={() => toggleContestRibbon('smart', 2)} />
      <Ribbon.SmartG3 rank={3} opacity={r.smart > 2 ? 1 : opacity} cursor='pointer' onClick={() => toggleContestRibbon('smart', 3)} />
      <Ribbon.SmartG3 rank={4} opacity={r.smart > 3 ? 1 : opacity} cursor='pointer' onClick={() => toggleContestRibbon('smart', 4)} />
      <Ribbon.ToughG3 rank={1} opacity={r.tough > 0 ? 1 : opacity} cursor='pointer' onClick={() => toggleContestRibbon('tough', 1)} />
      <Ribbon.ToughG3 rank={2} opacity={r.tough > 1 ? 1 : opacity} cursor='pointer' onClick={() => toggleContestRibbon('tough', 2)} />
      <Ribbon.ToughG3 rank={3} opacity={r.tough > 2 ? 1 : opacity} cursor='pointer' onClick={() => toggleContestRibbon('tough', 3)} />
      <Ribbon.ToughG3 rank={4} opacity={r.tough > 3 ? 1 : opacity} cursor='pointer' onClick={() => toggleContestRibbon('tough', 4)} />
      <Ribbon.Winning opacity={r.winning ? 1 : opacity} cursor='pointer' onClick={() => toggleRibbon('winning')} />
      <Ribbon.Victory opacity={r.victory ? 1 : opacity} cursor='pointer' onClick={() => toggleRibbon('victory')} />
      <Ribbon.Artist opacity={r.artist ? 1 : opacity} cursor='pointer' onClick={() => toggleRibbon('artist')} />
      <Ribbon.Effort opacity={r.effort ? 1 : opacity} cursor='pointer' onClick={() => toggleRibbon('effort')} />
      <Ribbon.Country opacity={r.country ? 1 : opacity} cursor='pointer' onClick={() => toggleRibbon('country')} />
      <Ribbon.Earth opacity={r.earth ? 1 : opacity} cursor='pointer' onClick={() => toggleRibbon('earth')} />
      <Ribbon.World opacity={r.world ? 1 : opacity} cursor='pointer' onClick={() => toggleRibbon('world')} />
    </Flex>
  );
};
