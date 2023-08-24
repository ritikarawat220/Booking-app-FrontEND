import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './authentication/login';
import signupReducer from './authentication/signup';
import aeroplaneReucer from './aeroplane/aeroplane';
import aeroplaneslistReducer from './aeroplaneList/aeroplaneListSlice';
import selectedAirplaneSliceReducer from './aeroplaneList/selectedAirplaneSlice';

const store = configureStore({
  reducer: {

    login: loginReducer,
    signup: signupReducer,
    aeroplane: aeroplaneReucer,
    aeroplaneslist: aeroplaneslistReducer,
    selectedAirplane: selectedAirplaneSliceReducer,
  },
});

export default store;
