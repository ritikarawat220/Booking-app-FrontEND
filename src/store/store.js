import { configureStore } from '@reduxjs/toolkit';
import productDetailsReducer from './productDetails/productDetailsSlice';
import reservationReducer from './reservations/reservationSlice';

const store = configureStore({
  reducer: {
    productDetails: productDetailsReducer,
    reservations: reservationReducer,
  },
});

export default store;
