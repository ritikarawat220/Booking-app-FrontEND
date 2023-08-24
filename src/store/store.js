import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './authentication/login';
import signupReducer from './authentication/signup';
import aeroplaneReucer from './aeroplane/aeroplane';

const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    aeroplane: aeroplaneReucer,
  },
});

export default store;
