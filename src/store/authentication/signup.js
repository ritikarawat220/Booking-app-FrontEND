import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  user: null,
  error: null,
  token: null,
};

export const signupAsync = createAsyncThunk('signup/signupAsync', async (userData) => {
  const res = await fetch('https://aeroplane-find.onrender.com/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        password_confirmation: userData.password_confirmation,
      },
    }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message);
  }

  const data = await res.json();
  return data;
});

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupAsync.pending, (state) => ({
        ...state, loading: true, error: null,
      }))
      .addCase(signupAsync.fulfilled, (state, action) => ({
        ...state, loading: false, token: action.payload.token, user: action.payload.user,
      }))
      .addCase(signupAsync.rejected, (state, action) => ({
        ...state, loading: false, error: action.error.message,
      }));
  },
});

export default signupSlice.reducer;
