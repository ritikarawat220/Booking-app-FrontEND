import { configureStore } from '@reduxjs/toolkit';
import productDetailsReducer from './productDetails/productDetailsSlice';

const store = configureStore({
  reducer: {
    productDetails: productDetailsReducer,
  },
});

export default store;
