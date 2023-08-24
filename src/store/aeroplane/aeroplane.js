import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';

const API_BASE_URL = 'https://aeroplane-find.onrender.com';

const initialState = {
  airplanes: [],
  status: 'idle',
  error: null,
  loading: false,
};

const getTokenFromLocalStorage = () => localStorage.getItem('authToken');

export const addAeroplane = createAsyncThunk('aeroplanes/addAeroplane', async (aeroplaneData, { rejectWithValue }) => {
  try {
    const authToken = localStorage.getItem('authToken');
    console.log('token in aeroplane slice', authToken);
    const response = await fetch(`${API_BASE_URL}/aeroplanes/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${authToken}`,
      },
      body: JSON.stringify(aeroplaneData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return rejectWithValue(errorData);
    }

    const newData = await response.json();
    console.log('data aeplane', newData);
    return newData;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const deleteAeroplane = createAsyncThunk('aeroplanes/deleteAeroplane', async (aeroplaneId, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/aeroplanes/${aeroplaneId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `${getTokenFromLocalStorage()}`,
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
      .addCase(addAeroplane.pending, (state) => (
        { ...state, loading: true, error: null }))
      .addCase(addAeroplane.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        airplanes: [...state.airplanes, action.payload],
      }))
      .addCase(addAeroplane.rejected, (state, action) => (
        { ...state, loading: false, error: action.error.message }));
    // .addCase(deleteAeroplane.pending, (state) => (
    //     { ...state, loading: true, error: null }));
    // .addCase(deleteAeroplane.pending, (state) => {
    //   state.status = 'loading';
    // })
    // .addCase(deleteAeroplane.fulfilled, (state, action) => {
    //   state.status = 'succeeded';
    //   state.airplanes = state.airplanes.filter((plane) => plane.id !== action.payload.id);
    // })
    // .addCase(deleteAeroplane.rejected, (state, action) => {
    //   state.status = 'failed';
    //   state.error = action.payload;
    // });
  },
});

export default aeroplaneSlice.reducer;
