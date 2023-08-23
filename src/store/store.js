import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './authentication/login';
import signupReducer from './authentication/signup';
import productDetailsReducer from './productDetails/productDetailsSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    productDetails: productDetailsReducer,
  },
});

export default store;
