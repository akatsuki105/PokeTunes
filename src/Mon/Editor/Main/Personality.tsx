import React from 'react';
import { Box, Center, Flex, FormControl, FormLabel, Spacer, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Ability, Locale, Nature, PersonalInfo3, PKMA, PKMData, PKMFunc } from 'pksav';
import { uint32 } from 'utils';
import { HexInput, NumberSelect, Select, StringSelect } from 'src/components';
import { useGender, useLang } from 'src/hooks';
import { useDispatch } from 'react-redux';
import { abilityChanged, pidChanged, replaced } from 'src/stores/pkm';
import { ChangeEvent } from 'react';

export const Personality: React.FC<{ p: PKMA }> = ({ p }) => {
  return (
    <Box>
      <PID p={p} />
      <Spacer h={4} />
      <NatureSelect p={p} />
      <Spacer h={4} />
      <AbilitySelect p={p} />
      <Spacer h={4} />
      <LocaleSelect p={p} />
    </Box>
  );
};

const PID: React.FC<{ p: PKMA }> = React.memo(({ p }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const gender = PKMFunc.Gender(p);

  const onChange = (pid: number) => {
    dispatch(pidChanged(uint32(pid)));
  };

  const GenderMark: React.FC<{ g: 'male' | 'female' }> = ({ g }) => {
    const [mark, color] = useGender(g);
    return (
      <Center w={7} h={7} ml={2} mt={'0.3rem'} borderRadius='sm' bg={color}>
        <Text color='white'>{mark}</Text>
      </Center>
    );
  };

  return (
    <FormControl>
      <FormLabel fontSize='sm'>{t('pid')}</FormLabel>
      <Flex>
        <HexInput w='auto' value={p.pid} onChange={onChange} />
        {gender !== 'unknown' && <GenderMark g={gender} />}
      </Flex>
    </FormControl>
  );
});

const NatureSelect: React.FC<{ p: PKMA }> = ({ p }) => {
  const { t } = useTranslation();
  const lang = useLang();
  const dispatch = useDispatch();
  const names = Nature.Name[lang];
  const boost = Nature.BoostName[lang] ?? Nature.BoostName.en;

  const onChange = (n: number) => {
    p = PKMFunc.ChangeNature(p, n);
    dispatch(replaced(p));
  };

  const options = names.map((name, i) => <option key={i} value={i} selected={p.pid % 25 === i}>{`${name} (${boost[i]})`}</option>);

  return (
    <FormControl>
      <FormLabel fontSize='sm'>{t('nature')}</FormLabel>
      <NumberSelect onChange={onChange}>{options}</NumberSelect>
    </FormControl>
  );
};

const AbilitySelect: React.FC<{ p: PKMA }> = ({ p }) => {
  const { t } = useTranslation();
  const lang = useLang();
  const dispatch = useDispatch();

  const idx = p.ability;
  const pi = PKMData.PI[p.ver][PKMFunc.DexNo(p)] as PersonalInfo3;

  const options = [...new Set(pi.ability)].map((id, i) => {
    return <option key={i} value={i} selected={idx === i}>{Ability.Name[lang][id]}</option>;
  });

  return (
    <FormControl>
      <FormLabel fontSize='sm'>{t('ability')}</FormLabel>
      <NumberSelect onChange={(n) => dispatch(abilityChanged(n))}>{options}</NumberSelect>
    </FormControl>
  );
};

const LocaleSelect: React.FC<{ p: PKMA }> = React.memo(({ p }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onChange = (loc: Locale) => {
    if (loc !== p.loc) {
      dispatch(replaced(PKMFunc.SetLocale(p, loc)));
    }
  };

  return (
    <FormControl>
      <FormLabel fontSize='sm'>{t('locale.locale')}</FormLabel>
      <StringSelect<Locale> onChange={onChange}>
        <option value='ja' selected={p.loc === 'ja'}>🇯🇵 {t('locale.ja')}</option>
        <option value='en' selected={p.loc === 'en'}>🇺🇸 {t('locale.en')}</option>
      </StringSelect>
    </FormControl>
  );
});
