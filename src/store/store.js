import { configureStore } from '@reduxjs/toolkit';
<<<<<<<<< Temporary merge branch 1
import productDetailsReducer from './productDetails/productDetailsSlice';

const store = configureStore({
  reducer: {
    productDetails: productDetailsReducer,
=========
import loginReducer from './authentication/login';
import signupReducer from './authentication/signup';
import productDetailsReducer from './productDetails/productDetailsSlice';

const store = configureStore({
  reducer: {
    productDetails: productDetailsReducer,
    productDescription: productDescriptionReducer,
    login: loginReducer,
    signup: signupReducer,
>>>>>>>>> Temporary merge branch 2
  },
});

export default store;
