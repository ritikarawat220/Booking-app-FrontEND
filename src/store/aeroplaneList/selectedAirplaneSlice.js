import { createSlice } from '@reduxjs/toolkit';

const selectedAirplaneSlice = createSlice({
  name: 'selectedAirplane',
  initialState: {},
  reducers: {
    storeSelectedAirplane: (state, action) => action.payload
    ,
  },
});

export const { storeSelectedAirplane } = selectedAirplaneSlice.actions;

export default selectedAirplaneSlice.reducer;
