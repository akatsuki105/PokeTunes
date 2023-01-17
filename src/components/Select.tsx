import { Box, Select as ChakraSelect, SelectProps } from '@chakra-ui/react';
import { useLang } from 'src/hooks';

type Props = {
  children?: string | React.ReactNode;
  onClick?: () => void;
};

// 見た目は Select だけど onClickを改造
export const SelectBox: React.FC<Props> = ({ children, onClick }) => {
  const lang = useLang();
  const pt = lang === 'ja' ? '0.32rem' : '0.32rem';

  return (
    <ChakraSelect
      as={Box}
      cursor='pointer'
      focusBorderColor='brand.200'
      _hover={{
        borderColor: 'brand.200',
      }}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      <Box pt={pt}>{children}</Box>
    </ChakraSelect>
  );
};

export const Select: React.FC<SelectProps> = (props) => {
  return (
    <ChakraSelect
      keepWithinRange
      focusBorderColor='brand.200'
      _hover={{
        borderColor: 'brand.200',
      }}
      {...props}
    />
  );
};

export const NumberSelect: React.FC<{ onChange: (n: number) => void } & Omit<SelectProps, 'onChange'>> = ({ onChange, ...props }) => {
  return <Select {...props} onChange={(e) => onChange(Number(e.target.value))} />;
};

type StringSelectProps<T> = { onChange: (n: T) => void } & Omit<SelectProps, 'onChange'>;

export const StringSelect = <T extends string>(props: StringSelectProps<T>) => {
  return <Select {...props} onChange={(e) => props.onChange(e.target.value as T)} />;
};
