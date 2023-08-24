import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://aeroplane-find.onrender.com/';

const initialState = {
  products: [],
  isLoading: false,
  error: '',
};

export const fetchProductDetails = createAsyncThunk(
  'Products/fetchProductDetails',
  async () => {
    try {
      const response = await axios.get(`${url}api/products`, {
        headers: {
          Authorization: localStorage.getItem('authToken'),
        },
      });
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
);

export const productDetailsSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.isLoading = true;
        state.error = ''; // Clear any previous errors
      })
      .addCase(fetchProductDetails.fulfilled, (state, { payload }) => {
        state.products = payload;
        state.isLoading = false;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Set the error message
      });
  },
});

export default productDetailsSlice.reducer;
