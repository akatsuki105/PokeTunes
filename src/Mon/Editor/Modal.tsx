import { CheckIcon, WarningTwoIcon } from '@chakra-ui/icons';
import { Box, Button, Divider, List, ListIcon, ListItem, Spacer, Text } from '@chakra-ui/react';
import { Lang, PKM, PKMFunc } from 'pksav';
import { Problem, toString } from 'pksav/pkm/func/legal/illegal';
import { useTranslation } from 'react-i18next';
import { useLang } from 'src/hooks';
import { download } from 'utils';
import { Preview } from '../Preview';

export const Detail: React.FC<{ p: PKM }> = ({ p }) => {
  const { t } = useTranslation();
  const lang = useLang();
  const problems = PKMFunc.Problems(p);

  return (
    <Box>
      <Preview p={p} />
      {problems?.length > 0 && (
        <>
          <Spacer h={4} />
          <Box maxH='lg' overflow='scroll' borderWidth='1px' borderRadius='lg' p={4}>
            <Text as='b'>{t('legality_problem')}</Text>
            <Spacer h={2} />
            <Legality problems={problems} />
          </Box>
          <Divider my={6} />
        </>
      )}
      <Button
        color='white'
        colorScheme='brand'
        w='100%'
        onClick={() => exportPKM(p, lang)}
        disabled={PKMFunc.IsDummy(p)}
      >
        Export PKM
      </Button>
      <Spacer h={2} />
    </Box>
  );
};

const Legality: React.FC<{ problems: Problem[] }> = ({ problems }) => {
  const lang = useLang();

  return (
    <List spacing={3}>
      {problems.map((problem, i) => {
        const Icon = problem.severity === 'fatal' ? CheckIcon : WarningTwoIcon;
        const color = problem.severity === 'fatal' ? 'red.500' : 'yellow.500';
        return (
          <ListItem key={i}>
            <ListIcon as={Icon} color={color} />
            {toString(lang, problem.msg)}
          </ListItem>
        );
      })}
    </List>
  );
};

const exportPKM = (p: PKM, lang: Lang) => {
  const buf = PKMFunc.Export(p);
  const blob = new Blob([buf], { 'type': 'application/octet-stream' });

  let ext = 'pkm';
  switch (p.ver) {
    case 'RB':
    case 'YW':
      ext = 'pk1';
      break;

    case 'GS':
    case 'C':
      ext = 'pk2';
      break;

    case 'RS':
    case 'FR':
    case 'LG':
    case 'E':
      ext = 'pk3';
      break;
  }
  download(`${PKMFunc.Specie(p, lang)}.${ext}`, blob);
};
