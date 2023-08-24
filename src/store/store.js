import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './authentication/login';
import signupReducer from './authentication/signup';
import aeroplaneReucer from './aeroplane/aeroplane';
import productDetailsReducer from './productDetails/productDetailsSlice';
import aeroplanelistReducer from './aeroplane/aeroplanelist';

const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    aeroplane: aeroplaneReucer,
    productDetails: productDetailsReducer,
    aeroplaneslist: aeroplanelistReducer,
  },
});

export default store;
