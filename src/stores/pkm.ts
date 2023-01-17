import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { dummyPKM, isPK3, PKM, PKMFunc, Ribbon3, Status } from 'pksav';
import { Move } from 'pksav/pkm/types';

const initialState: PKM = dummyPKM;

export const PKMSlice = createSlice({
  name: 'pkm',
  initialState,
  reducers: {
    replaced: (state, action: PayloadAction<PKM>) => {
      return action.payload;
    },
    nickChanged: (state, action: PayloadAction<number[]>) => {
      state.nickname = action.payload;
      return state;
    },
    moveChanged: (state, action: PayloadAction<[number, Move]>) => {
      const [idx, move] = action.payload;
      state.moves[idx] = move;
      return state;
    },
    lvChanged: (state, action: PayloadAction<[number, number]>) => {
      const [lv, exp] = action.payload;
      state.lv = lv;
      state.exp = exp;
      return state;
    },
    ivChanged: (state, action: PayloadAction<Status>) => {
      state.ivs = { ...action.payload };
      return state;
    },
    evChanged: (state, action: PayloadAction<Status>) => {
      state.evs = { ...action.payload };
      return state;
    },
    itemChanged: (state, action: PayloadAction<number>) => {
      state.item = action.payload;
      return state;
    },
    pidChanged: (state, action: PayloadAction<number>) => {
      if (PKMFunc.IsPKMA(state)) state.pid = action.payload;
      return state;
    },
    abilityChanged: (state, action: PayloadAction<number>) => {
      if (PKMFunc.IsPKMA(state)) state.ability = action.payload;
      return state;
    },
    ribbon3Changed: (state, action: PayloadAction<Ribbon3>) => {
      if (isPK3(state)) state.ribbons = action.payload;
      return state;
    },
    otnameChanged: (state, action: PayloadAction<number[]>) => {
      state.ot.name = action.payload;
      return state;
    },
  },
});

export const {
  replaced,
  nickChanged,
  moveChanged,
  lvChanged,
  ivChanged,
  evChanged,
  itemChanged,
  pidChanged,
  abilityChanged,
  ribbon3Changed,
  otnameChanged,
} = PKMSlice.actions;
