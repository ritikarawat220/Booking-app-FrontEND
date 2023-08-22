import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './authentication/login';
import signupReducer from './authentication/signup';

const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
  },
});

export default store;
