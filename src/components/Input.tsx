import { Input as ChakraInput, InputProps, NumberInput as ChakraNumberInput, NumberInputProps } from '@chakra-ui/react';
import React, { ChangeEvent } from 'react';

export const Input: React.FC<InputProps> = (props) => {
  return (
    <ChakraInput
      focusBorderColor='brand.200'
      _hover={{
        borderColor: 'brand.200',
      }}
      {...props}
    />
  );
};

export const StringInput: React.FC<{ onChange?: (s: string) => void } & Omit<InputProps, 'onChange'>> = (props) => {
  return <Input {...props} onChange={(e) => props.onChange?.(e.target.value)} />;
};

export const NumberInput: React.FC<NumberInputProps> = (props) => {
  return (
    <ChakraNumberInput
      focusBorderColor='brand.200'
      w='100%'
      {...props}
    />
  );
};

type Props = {
  value: number;
  onChange: (val: number) => void;
} & Omit<InputProps, 'onChange'>;

export const HexInput: React.FC<Props> = ({ value, onChange, ...props }) => {
  const hex = value.toString(16).toUpperCase();

  const handleChnage = (e: ChangeEvent<HTMLInputElement>) => {
    const result = parseInt(e.target.value, 16);
    if (!Number.isNaN(result)) onChange(result);
  };

  return <Input type='text' value={hex} onChange={handleChnage} {...props} />;
};
