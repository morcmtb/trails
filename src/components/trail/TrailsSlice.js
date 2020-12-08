import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const TrailsSlice = createSlice({
  name: 'trails',
  initialState,
  actions: {
    addTrails: (payload) => ({ type: 'trails/addTrails', payload }),
    followTrail: (payload) => ({ type: 'trail/followTrail', payload }),
  },
  reducers: {
    addTrails(state, action) {
      action.payload.forEach((trail) => {
        state.push(trail);
      });
    },
    followTrail(state, action) {
      const trail = state.find((t) => t.trailId === action.payload.trailId);
      trail.follow = !trail.follow;
    },
  },
});

export const { addTrails, followTrail } = TrailsSlice.actions;
export default TrailsSlice.reducer;
