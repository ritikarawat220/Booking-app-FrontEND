import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://aeroplane-find.onrender.com/';

export const fetchProductDetails = createAsyncThunk(
  'Products/fetchProductDetails',
  async () => {
    const authToken = localStorage.getItem('authToken');
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${authToken}`,
      },
    };

    const resp = await fetch(`${baseUrl}aeroplanes/`, requestOptions);
    const data = await resp.json();
    return data;
  },
);

const initialState = {
  products: [],
  isLoading: true,
  error: '',
  aeroplaneSelected: false,
};

export const productDetailsSlice = createSlice({
  name: 'aeroplanes',
  initialState,
  reducers: {
    selectAeroplane: (state, action) => {
      const aeroplaneSelected = action.payload;
      const updatedAeroplanes = state.aeroplanes.map((aeroplane) => {
        if (aeroplane.id === action.payload.id) {
          return { ...aeroplane, reserved: true };
        }
        return aeroplane;
      });
      return {
        ...state,
        aeroplanes: updatedAeroplanes,
        aeroplaneSelected,
      };
    },

    aeroplaneRemove: (state, { payload }) => {
      const aeroplanesFiltered = state.aeroplanes.filter((aeroplane) => aeroplane.id !== payload);
      return {
        ...state,
        aeroplanes: aeroplanesFiltered,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchProductDetails.fulfilled, (state, action) => ({
        ...state,
        aeroplanes: action.payload.map((aeroplane) => ({ ...aeroplane, reserved: false })),
        isLoading: false,
      }))

      .addCase(fetchProductDetails.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: 'Something went wrong',
      }));
  },
});

export const { selectAeroplane, aeroplaneRemove } = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
