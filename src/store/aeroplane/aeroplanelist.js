import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE_URL = 'https://aeroplane-find.onrender.com';

export const fetchAirplanes = createAsyncThunk('aeroplanes/fetchAirplanes', async (_, { rejectWithValue }) => {
  try {
    const authToken = localStorage.getItem('authToken');
    const response = await fetch(`${API_BASE_URL}/aeroplanes`, {
      method: 'GET',
      headers: {
        Authorization: `${authToken}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return rejectWithValue(errorData);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  airplanes: [],
  status: 'idle',
  error: null,
};

const aeroplaneslistSlice = createSlice({
  name: 'aeroplanes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAirplanes.pending, (state) => (
        { ...state, status: 'loading', error: null }))
      .addCase(fetchAirplanes.fulfilled, (state, action) => ({
        ...state,
        status: 'succeed',
        airplanes: action.payload,
      }))
      .addCase(fetchAirplanes.rejected, (state, action) => (
        { ...state, status: 'failed', error: action.error.message }));
  },
});

export default aeroplaneslistSlice.reducer;
