import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://aeroplane-find.onrender.com';
// const baseUrl = 'http://localhost:4000';

export const postReservation = createAsyncThunk(
  'aeroplane/reservations',
  async (reserve) => {
    const authToken = localStorage.getItem('authToken');
    try {
      const response = await axios.post(
        `${baseUrl}/aeroplanes/${reserve.id}/reservations/create`,
        reserve,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: authToken,
          },
        },
      );
      return response.data;
    } catch (error) {
      if (error && error.response && error.response.data.error) {
        throw new Error(error.response.data.error);
      } else {
        throw new Error('Failed to post reservation');
      }
    }
  },
);

export const getReservations = createAsyncThunk(
  'aeroplanes/reservations',
  async () => {
    const authToken = localStorage.getItem('authToken');
    try {
      const resp = await axios.get(`${baseUrl}/reservations`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken,
        },
      });
      return resp.data;
    } catch (error) {
      if (error && error.resp && error.resp.data.error) {
        throw new Error(error.resp.data.error);
      } else {
        throw new Error('Failed to get reservations');
      }
    }
  },
);

const initialState = {
  reservations: [],
  isLoading: false,
  error: null,
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postReservation.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(postReservation.fulfilled, (state, { payload }) => ({
      ...state,
      isLoading: false,
      reservations: payload,
    }));
    builder.addCase(postReservation.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error.message,
    }));
    builder.addCase(getReservations.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getReservations.fulfilled, (state, { payload }) => ({
      ...state,
      isLoading: false,
      reservations: payload,
    }));
    builder.addCase(getReservations.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error.message,
    }));
  },
});

export default reservationSlice.reducer;
