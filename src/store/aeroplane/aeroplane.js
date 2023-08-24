import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';

const API_BASE_URL = 'http://your-api-base-url.com';

const initialState = {
  airplanes: [],
  status: 'idle',
  error: null,
};

const getTokenFromLocalStorage = () => localStorage.getItem('token');

export const addAeroplane = createAsyncThunk('aeroplanes/addAeroplane', async (aeroplaneData, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/aeroplanes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
      },
      body: JSON.stringify(aeroplaneData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return rejectWithValue(errorData);
    }

    return response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const deleteAeroplane = createAsyncThunk('aeroplanes/deleteAeroplane', async (aeroplaneId, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/aeroplanes/${aeroplaneId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return rejectWithValue(errorData);
    }

    return { id: aeroplaneId };
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const selectAirplanes = (state) => state.aeroplane.airplanes;

export const selectAeroplanes = createSelector(
  [selectAirplanes],
  (airplanes) => airplanes,
);

const aeroplaneSlice = createSlice({
  name: 'aeroplanes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addAeroplane.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addAeroplane.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.airplanes.push(action.payload);
      })
      .addCase(addAeroplane.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(deleteAeroplane.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteAeroplane.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.airplanes = state.airplanes.filter((plane) => plane.id !== action.payload.id);
      })
      .addCase(deleteAeroplane.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default aeroplaneSlice.reducer;
