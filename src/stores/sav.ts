import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { DefaultSAV, EventVal, GameVersion, isSAV3, PKM, Pouch, SAV } from 'pksav';

const initialState: SAV = DefaultSAV;

export const savSlice = createSlice({
  name: 'sav',
  initialState,
  reducers: {
    savReplaced: (state, action: PayloadAction<SAV>) => {
      return action.payload;
    },
    verReplaced: (state, action: PayloadAction<GameVersion>) => {
      state.game[0] = action.payload;
      if (isSAV3(state)) state.shouldGameSelect = false;
      return state;
    },
    monReplaced: (state, action: PayloadAction<[number, number, PKM]>) => {
      const [box, idx, mon] = action.payload;
      if (box === -1) {
        state.party[idx] = mon;
        return state;
      }
      state.boxes[box].mons[idx] = mon;
      return state;
    },
    pouchReplaced: (state, action: PayloadAction<Pouch>) => {
      const pouch = action.payload;
      state.bag[pouch.name] = { ...pouch };
      return state;
    },
    eventReplaced: (state, action: PayloadAction<{ id: string; val: EventVal }>) => {
      const { id, val } = action.payload;
      for (let i = 0; i < state.events.length; i++) {
        const e = state.events[i];
        if (e.id === id) {
          state.events[i].val = val;
          break;
        }
      }
      return state;
    },
  },
});

export const { savReplaced, verReplaced, monReplaced, pouchReplaced, eventReplaced } = savSlice.actions;
