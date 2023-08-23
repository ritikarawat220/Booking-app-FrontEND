import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';
import App from './App';

// // Check if user data is in localStorage
// const storedUser = JSON.parse(localStorage.getItem('user'));

// // Dispatch an action to set the user in the Redux store
// if (storedUser) {
//   store.dispatch({ type: 'login/loginAsync.fulfilled', payload: storedUser });
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
