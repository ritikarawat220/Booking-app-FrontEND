import { configureStore } from '@reduxjs/toolkit';
import productDescriptionReducer from './productDescription/productDescriptionSlice';
import loginReducer from './authentication/login';
import signupReducer from './authentication/signup';
import aeroplaneReucer from './aeroplane/aeroplane';
import productDetailsReducer from './productDetails/productDetailsSlice';

const store = configureStore({
  reducer: {
    productDetails: productDetailsReducer,
    productDescription: productDescriptionReducer,
    login: loginReducer,
    signup: signupReducer,
    aeroplane: aeroplaneReucer,
    productDetails: productDetailsReducer,
  },
});

export default store;
