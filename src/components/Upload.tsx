import { Box, Center, Flex, Text, VisuallyHiddenInput } from '@chakra-ui/react';
import React, { useRef } from 'react';

let title = '';

type Props = {
  id: string;
  load: (title: string, data: Uint8Array) => void;
};

export const Upload: React.FC<Props> = React.memo(({ id, load }) => {
  const ref = useRef<HTMLInputElement>(null);

  const r = new FileReader();

  r.onloadend = () => {
    const bytes = new Uint8Array(r.result as ArrayBuffer);
    load(title, bytes);
  };

  const upload = () => {
    const input = document.getElementById(id)! as HTMLInputElement;
    const file = input.files![0];
    title = file.name;
    if (title.endsWith('.sav')) {
      r.readAsArrayBuffer(file);
    }
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    title = file.name;
    if (title.endsWith('.sav')) {
      r.readAsArrayBuffer(file);
    }
  };

  return (
    <Center
      onDrop={onDrop}
      onDragOver={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
      onDragEnter={(e) => {
        e.stopPropagation();
      }}
      w='100%'
      h='100%'
      border='2px'
      borderRadius='lg'
      borderColor='gray.500'
    >
      <Box>
        <Flex>
          <Box as='label' htmlFor={id} cursor='pointer'>
            <Text fontWeight='600' color='brand.text'>Upload your Savfile</Text>
            <VisuallyHiddenInput
              id={id}
              name={id}
              type='file'
              accept='.sav'
              onChange={upload}
              ref={ref}
            />
          </Box>
          <Text pl={2}>or drag and drop</Text>
        </Flex>

        <Text fontSize='xs' color='gray.500'>It is not over the network.</Text>
      </Box>
    </Center>
  );
});
