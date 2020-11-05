import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const TrailsSlice = createSlice({
  name: 'trails',
  initialState,
  actions: {
    addTrails: (payload) => ({ type: 'trails/addTrails', payload }),
  },
  reducers: {
    addTrails(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { addTrails } = TrailsSlice.actions;
export default TrailsSlice.reducer;
