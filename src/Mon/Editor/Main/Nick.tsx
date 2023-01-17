import React from 'react';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { StringInput } from 'src/components';
import { encodeNames, PKM, PKMFunc } from 'pksav';
import { useDispatch } from 'react-redux';
import { nickChanged } from 'src/stores/pkm';

export const Nick: React.FC<{ p: PKM }> = React.memo(({ p }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const setNN = (n: string) => {
    const encode = encodeNames[p.ver];
    const nn = Array.from(encode(p.loc, n));
    dispatch(nickChanged(nn));
  };

  return (
    <FormControl>
      <FormLabel fontSize='sm'>{t('nickname')}</FormLabel>
      <StringInput type='text' value={PKMFunc.Nickname(p)} onChange={(s) => setNN(s)} />
    </FormControl>
  );
});
