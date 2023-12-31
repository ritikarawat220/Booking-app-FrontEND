import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './authentication/login';
import signupReducer from './authentication/signup';
import aeroplaneReucer from './aeroplane/aeroplane';
import aeroplanesListReducer from './aeroplaneList/aeroplaneListSlice';
import selectedAirplaneSliceReducer from './aeroplaneList/selectedAirplaneSlice';
import aeroplanelistReducer from './aeroplane/aeroplanelist';
import reservationReducer from './reservations/reservationSlice';
import productDetailsReducer from './productDetails/productDetailsSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    aeroplane: aeroplaneReucer,
    productDetails: productDetailsReducer,
    reservations: reservationReducer,
    aeroplanesList: aeroplanesListReducer,
    selectedAirplane: selectedAirplaneSliceReducer,
    aeroplaneslist: aeroplanelistReducer,
  },
});

export default store;
