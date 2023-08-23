import { configureStore } from '@reduxjs/toolkit';
import productDetailsReducer from './productDetails/productDetailsSlice';
import productDescriptionReducer from './productDescription/productDescriptionSlice';
import loginReducer from './authentication/login';
import signupReducer from './authentication/signup';

const store = configureStore({
  reducer: {
    productDetails: productDetailsReducer,
    productDescription: productDescriptionReducer,
    login: loginReducer,
    signup: signupReducer,
  }
});

export default store;
