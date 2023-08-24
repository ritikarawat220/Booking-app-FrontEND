import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './authentication/login';
import signupReducer from './authentication/signup';
import aeroplaneReucer from './aeroplane/aeroplane';
import productDetailsReducer from './productDetails/productDetailsSlice';
import reservationReducer from './reservations/reservationSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    aeroplane: aeroplaneReucer,
    productDetails: productDetailsReducer,
    reservations: reservationReducer,
  },
});

export default store;
