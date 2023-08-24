import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://aeroplane-find.onrender.com/';
const initialState = {
  Products: [],
  isLoading: false,
  messages: '',
};

export const fetchProductDetails = createAsyncThunk(
  'Products/fetchProductDetails',
  async (aeroplaneData, { rejectWithValue }) => {
    try {
      const authToken = localStorage.getItem('authToken');
      console.log('token for aeroplane detail', authToken);
      const response = await fetch(`${url}/aeroplanes/`, {
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
      console.log('data aeroplane', newData);
      return newData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteProduct = createAsyncThunk(
  'Products/deleteProduct',
  async (aeroplaneData, { rejectWithValue }) => {
    try {
      const authToken = localStorage.getItem('authToken'); // Obtain authToken here
      const response = await fetch(`${url}/aeroplanes/`, {
        method: 'DELETE',
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
      console.log('data aeroplane', newData);
      return newData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const productDetailsSlice = createSlice({
  name: 'Products',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductDetails.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.Products = payload;
      })
      .addCase(fetchProductDetails.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.messages = action.payload;
      });
  },
});

export default productDetailsSlice.reducer;
