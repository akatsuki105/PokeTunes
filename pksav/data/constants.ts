import { Condition, Status } from './types';

export const ZeroStatus = (): Status => {
  return {
    hp: 0,
    atk: 0,
    def: 0,
    spa: 0,
    spd: 0,
    spe: 0,
  };
};

export const ZeroCondition = (): Condition => {
  return {
    cool: 0,
    beauty: 0,
    cute: 0,
    smart: 0,
    tough: 0,
    sheen: 0,
  };
};
