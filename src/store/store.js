import { configureStore } from '@reduxjs/toolkit';
import productDetailsReducer from './productDetails/productDetailsSlice';
import productDescriptionReducer from './productDescription/productDescriptionSlice';

const store = configureStore({
  reducer: {
    productDetails: productDetailsReducer,
    productDescription: productDescriptionReducer,
  },
});

export default store;
