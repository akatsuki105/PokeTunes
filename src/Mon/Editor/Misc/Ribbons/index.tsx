import { isPK3, PKMA } from 'pksav';
import { useTranslation } from 'react-i18next';
import { Ribbons3 } from './Ribbons3';

export const Ribbons: React.FC<{ p: PKMA }> = ({ p }) => {
  const { t } = useTranslation();

  if (isPK3(p)) return <Ribbons3 r={p.ribbons} />;

  return <></>;
};
