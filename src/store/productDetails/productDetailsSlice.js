import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  productDetails: [],
  isLoading: false,
};

export const fetchProductDetails = createAsyncThunk(
  'productDetails/fetchProductDetails',
  async () => {
    const response = await axios.get(
      'https://aeroplane-find.onrender.com/aeroplanes',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('authToken'),
        },
      },
    );
    return response.data;
  },
);

export const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        const newProducts = [];
        action.payload.map((element) => newProducts.push({
          id: element.id,
          name: element.name,
          image: element.image,
          description: element.description,
          model: element.model,
          price: element.price,
        }));
        return {
          ...state,
          isLoading: false,
          productDetails: newProducts,
        };
      })
      .addCase(fetchProductDetails.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default productDetailsSlice.reducer;
