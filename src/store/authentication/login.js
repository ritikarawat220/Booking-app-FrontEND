import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  user: null,
  token: null,
  message: null,
};

export const loginAsync = createAsyncThunk('login/loginAsync', async (credentials) => {
  const res = await fetch('https://aeroplane-find.onrender.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        email: credentials.email,
        password: credentials.password,
      },
    }),
  });

  if (!res.ok) {
    const errData = await res.json();
    throw new Error(errData.message);
  }

  const data = await res.json();
  const authToken = res.headers.get('Authorization');
  const { user } = data;

  console.log(user);

  if (authToken) {
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('user', JSON.stringify(user));
  }
  return { data };
});

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout: (state) => {
      const newState = {
        ...state,
        user: null,
        token: null,
      };

      localStorage.removeItem('user');
      localStorage.removeItem('authToken');
      localStorage.removeItem('aeroplaneState');

      return newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => (
        { ...state, loading: true, error: null }))
      .addCase(loginAsync.fulfilled, (state, action) => (
        { ...state, loading: false, message: action.payload.data }))
      .addCase(loginAsync.rejected, (state, action) => (
        { ...state, loading: false, error: action.error.message }));
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
