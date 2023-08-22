import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  user: null,
  token: null,
};

export const loginAsync = createAsyncThunk('login/loginAsync', async (credentials) => {
  const res = await fetch('http://127.0.0.1:4000/login', {
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
  const user = data.data;

  if (authToken) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('authToken', authToken);
  }
  return { data };
});

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => (
        { ...state, loading: true, error: null }))
      .addCase(loginAsync.fulfilled, (state, action) => (
        { ...state, loading: false, token: action.payload.data }))
      .addCase(loginAsync.rejected, (state, action) => (
        { ...state, loading: false, error: action.error.message }));
  },
});

export default loginSlice.reducer;
