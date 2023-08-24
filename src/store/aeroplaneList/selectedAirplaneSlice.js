import { createSlice } from '@reduxjs/toolkit';

const selectedAirplaneSlice = createSlice({
  name: 'selectedAirplane',
  initialState: {
    model: '',
    description: '',
    image: '',
    id: null,
    name: '',
    price: 0,
    booking_price: 0,
  },
  reducers: {
    storeSelectedAirplane: (state, action) => action.payload,
  },
});

export const { storeSelectedAirplane } = selectedAirplaneSlice.actions;

export default selectedAirplaneSlice.reducer;
