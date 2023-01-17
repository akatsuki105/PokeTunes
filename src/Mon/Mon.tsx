import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  SimpleGrid,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react';
import { NumberSelect } from 'src/components';
import { Game, newDummyMon, PKM, PKMFunc } from 'pksav';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSmallerScreen } from 'src/hooks';
import { RootState } from 'src/main';
import { IconContainer } from 'src/Mon/Container';
import { replaced } from 'src/stores/pkm';
import { monReplaced } from 'src/stores/sav';
import { PKMEditor } from './Editor';
import { PKMIcon } from './Icon';
import { Preview } from './Preview';

export const Mon: React.FC = () => {
  const sav = useSelector((state: RootState) => state.sav);
  const mon = useSelector((state: RootState) => state.pkm);
  const isTablet = useSmallerScreen('xl');
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [region, setRegion] = useState<'Box' | 'Party'>('Box'); // Current Pokemon modal mode
  const [box, _setBox] = useState<number>(0); // Box No 0~11
  const [idx, setIdx] = useState<number>(0); // Box entry idx: 0~29
  const containerSize = useContainerSize();

  const regionMons = region === 'Box' ? sav.boxes[box].mons : sav.party;

  // Write current pokemon into Savedata struct
  const flashMon = (p: PKM) => {
    const boxidx = region === 'Box' ? box : -1;
    dispatch(monReplaced([boxidx, idx, p]));
  };

  const setBox = (newBox: number) => {
    if (newBox >= sav.boxes.length) {
      newBox = 0;
    }
    if (newBox < 0) {
      newBox = sav.boxes.length - 1;
    }
    _setBox(newBox);
  };

  // 現在のスロットに反映
  const setMon = (p: PKM) => {
    dispatch(replaced(p));
  };

  const PreviewModal: React.FC = () => {
    const p = regionMons[idx];

    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />

          <ModalBody>
            <Preview p={p} />
          </ModalBody>

          <ModalFooter>
            <Flex gap={2}>
              <Button
                onClick={() => {
                  onClose();
                  setMon(p);
                }}
                disabled={PKMFunc.IsDummy(p)}
              >
                View
              </Button>

              <Button
                onClick={() => {
                  onClose();
                  setMon(mon);
                  flashMon(mon);
                }}
              >
                Set
              </Button>

              <Button
                onClick={() => {
                  onClose();
                  const boxidx = region === 'Box' ? box : -1;
                  dispatch(monReplaced([boxidx, idx, newDummyMon(sav.game)]));
                }}
                disabled={PKMFunc.IsDummy(p)}
              >
                Delete
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };

  return (
    <>
      {isTablet
        ? (
          <Box>
            <Box>
              <Spacer h={3} />
              <Box p={4}>
                <Center>
                  <Party
                    game={sav.game}
                    mons={sav.party}
                    onClick={(idx) => {
                      setRegion('Party');
                      setIdx(idx);
                      onOpen();
                    }}
                  />
                </Center>
              </Box>

              <Spacer h={3} />

              <Box p={4}>
                <Center px={8}>
                  <Button onClick={() => setBox(box - 1)}>◀︎</Button>

                  <NumberSelect value={box} onChange={setBox} mx={4}>
                    {[...Array(sav.boxes.length)].map((_, i) => {
                      const name = sav.boxes[i].name;
                      return <option key={`${name}_${i}`} value={i} selected={box == i}>{name}</option>;
                    })}
                  </NumberSelect>

                  <Button onClick={() => setBox(box + 1)}>▶︎</Button>
                </Center>

                <Center>
                  <Box pt={3}>
                    <PCBox
                      game={sav.game}
                      mons={sav.boxes[box].mons}
                      onClick={(idx) => {
                        if (idx < sav.boxes[box].capacity) {
                          setRegion('Box');
                          setIdx(idx);
                          onOpen();
                        }
                      }}
                    />
                  </Box>
                </Center>
              </Box>
            </Box>
            <Box p={6}>
              <PKMEditor />
            </Box>
          </Box>
        )
        : (
          <Flex>
            <Box w='50%'>
              <Spacer h={8} />
              <Box px={4}>
                <Center>
                  <Party
                    game={sav.game}
                    mons={sav.party}
                    onClick={(idx) => {
                      setRegion('Party');
                      setIdx(idx);
                      onOpen();
                    }}
                  />
                </Center>
              </Box>

              <Spacer h={16} />

              <Box px={4}>
                <Center>
                  <Button onClick={() => setBox(box - 1)}>◀︎</Button>

                  <NumberSelect value={box} onChange={setBox} mx={4} w={`${containerSize * 5}px`}>
                    {[...Array(sav.boxes.length)].map((_, i) => {
                      const name = sav.boxes[i].name;
                      const count = sav.boxes[i].mons.filter((p) => !PKMFunc.IsDummy(p)).length;
                      const capacity = sav.boxes[i].capacity;
                      return <option key={`${name}_${i}`} value={i} selected={box == i}>{`${name} (${count}/${capacity})`}</option>;
                    })}
                  </NumberSelect>

                  <Button onClick={() => setBox(box + 1)}>▶︎</Button>
                </Center>
                <Spacer h={8} />

                <Center>
                  <Box>
                    <PCBox
                      game={sav.game}
                      mons={sav.boxes[box].mons}
                      onClick={(idx) => {
                        if (idx < sav.boxes[box].capacity) {
                          setRegion('Box');
                          setIdx(idx);
                          onOpen();
                        }
                      }}
                    />
                  </Box>
                </Center>
              </Box>
            </Box>

            <Box h='calc(100vh - 5rem)' py={6}>
              <Divider orientation='vertical' />
            </Box>

            <Box w='50%' h='calc(100vh - 5rem)' overflowY='scroll' p={6}>
              <PKMEditor />
            </Box>
          </Flex>
        )}

      <PreviewModal />
    </>
  );
};

const useContainerSize = () => {
  const isDisplay = !useSmallerScreen('2xl');
  const isMobile = useSmallerScreen('sm');
  const size = isMobile ? 50 : (isDisplay ? 96 : 72);
  return size;
};

const Party: React.FC<{ game: Game; mons: PKM[]; onClick: (idx: number) => void }> = ({ game, mons, onClick }) => {
  const isDisplay = !useSmallerScreen('2xl');
  const isMobile = useSmallerScreen('sm');
  const size = isMobile ? '50px' : (isDisplay ? '96px' : '72px');
  const spacing = isMobile ? 2 : (isDisplay ? 6 : 4);

  return (
    <SimpleGrid columns={6} spacing={spacing}>
      {mons.map((mon, i) => {
        return (
          <IconContainer
            key={i}
            onClick={() => onClick(i)}
            borderRadius='lg'
            minH={size}
            w={size}
          >
            {isDisplay
              ? (
                <Box position='relative' top='12px' transform={'scale(1.5)'}>
                  <PKMIcon p={mon} />
                </Box>
              )
              : <PKMIcon p={mon} />}
          </IconContainer>
        );
      })}
    </SimpleGrid>
  );
};

const PCBox: React.FC<{ game: Game; mons: PKM[]; onClick: (idx: number) => void }> = ({ game, mons, onClick }) => {
  const isDisplay = !useSmallerScreen('2xl');
  const dummy = newDummyMon(game);
  const isMobile = useSmallerScreen('sm');
  const size = isMobile ? '50px' : (isDisplay ? '96px' : '72px');
  const spacing = isMobile ? 2 : (isDisplay ? 6 : 4);

  if (mons.length < 30) {
    mons = [...mons];
  }
  while (mons.length < 30) {
    mons.push(dummy);
  }

  return (
    <SimpleGrid columns={6} spacing={spacing}>
      {mons.map((mon, i) => {
        return (
          <IconContainer
            key={i}
            onClick={() => onClick(i)}
            borderRadius='lg'
            h={size}
            w={size}
          >
            {isDisplay
              ? (
                <Box position='relative' top='12px' transform={'scale(1.5)'}>
                  <PKMIcon p={mon} />
                </Box>
              )
              : <PKMIcon p={mon} />}
          </IconContainer>
        );
      })}
    </SimpleGrid>
  );
};
