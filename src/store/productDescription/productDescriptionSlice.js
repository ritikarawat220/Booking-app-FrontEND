import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

const url = 'https://aeroplane-find.onrender.com/';
const initialState = {
  productDescription: [],
  isLoading: false,
};

export const fetchProductDescription = createAsyncThunk('productDescription/fetchProductDescription', async (AeroplaneData, { rejectWithValue }) => {
  try {
    const authToken = localStorage.getItem('authToken');
    console.log('token in aeroplane desc', authToken);
    const response = await fetch(`${url}/aeroplanes/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${authToken}`,
      },
      body: JSON.stringify(AeroplaneData),
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
});

export const productDescriptionSlice = createSlice({
  name: 'Products',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDescription.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchProductDescription.fulfilled, (state, { payload }) => {
        const newDescription = [];
        newDescription.push(payload);
        return {
          ...state,
          isLoading: false,
          productDescription: newDescription,
        };
      })
      .addCase(fetchProductDescription.rejected, (state) => ({
        ...state,
        isLoading: false,
        // isError: true,
      }));
  },
});

export default productDescriptionSlice.reducer;
