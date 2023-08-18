import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  productDetails: [],
  isLoading: false,
};

export const fetchProductDetails = createAsyncThunk('productDetails/fetchProductDetails', async () => {
  try {
    const response = await axios.get('http://localhost:4000/aeroplanes/index');
    return response.data;
  } catch (error) {
    throw error;
  }
});

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
        // console.log(action.payload);
        action.payload.map((element) => (
          newProducts.push({
            id: element.id,
            name: element.name,
            image: element.image,
            description: element.description,
            model: element.model,
            price: element.price,
          })
        ));
        return ({
          ...state,
          isLoading: false,
          productDetails: newProducts,
        });
      })
      .addCase(fetchProductDetails.rejected, (state) => ({
        ...state,
        isLoading: false,
        // isError: true,
      }));
  },
});

export default productDetailsSlice.reducer;
