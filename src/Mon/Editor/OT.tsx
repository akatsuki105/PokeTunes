import { FormControl, FormLabel, NumberInputField, SimpleGrid, Spacer } from '@chakra-ui/react';
import { t } from 'i18next';
import { decodeNames, encodeNames, Game, isGB } from 'pksav';
import { Ot } from 'pksav/pkm/types';
import { useDispatch } from 'react-redux';
import { NumberInput, StringInput } from 'src/components';
import { otnameChanged } from 'src/stores/pkm';

export const OT: React.FC<{ game: Game; ot: Ot }> = ({ game, ot }) => {
  const dispatch = useDispatch();
  const [decode, encode] = [decodeNames[game[0]], encodeNames[game[0]]];
  const str = decode(game[1], new Uint8Array(ot.name));

  return (
    <>
      <FormControl>
        <FormLabel fontSize='sm'>{t('ot.name')}</FormLabel>
        <StringInput
          value={str}
          onChange={(s) => {
            const otname = Array.from(encode(game[1], s));
            dispatch(otnameChanged(otname));
          }}
        />
      </FormControl>

      <Spacer h={4} />

      <OTID game={game} id={ot.id} />
    </>
  );
};

const OTID: React.FC<{ game: Game; id: number }> = ({ game, id }) => {
  if (isGB(game[0])) {
    return (
      <FormControl>
        <FormLabel fontSize='sm'>ID</FormLabel>
        <NumberInput value={id} min={0} max={65535} isReadOnly>
          <NumberInputField />
        </NumberInput>
      </FormControl>
    );
  }

  const [tid, sid] = [id & 0xFFFF, (id >> 16) & 0xFFFF];
  return (
    <SimpleGrid columns={2} spacing={4}>
      <FormControl>
        <FormLabel fontSize='sm'>TID</FormLabel>
        <NumberInput value={tid} min={0} max={65535} isReadOnly>
          <NumberInputField />
        </NumberInput>
      </FormControl>
      <FormControl>
        <FormLabel fontSize='sm'>SID</FormLabel>
        <NumberInput value={sid} min={0} max={65535} isReadOnly>
          <NumberInputField />
        </NumberInput>
      </FormControl>
    </SimpleGrid>
  );
};
