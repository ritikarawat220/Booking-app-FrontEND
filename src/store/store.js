import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './authentication/login';

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;
