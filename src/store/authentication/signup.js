import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  user: null,
  error: null,
  token: null,
};

export const signupAsync = createAsyncThunk('signup/signupAsync', async (userData) => {
  const res = await fetch('http://127.0.0.1:4000/signup/sign_up', {
    method: 'POST',
    headers: {
      'Contenet-Type': 'applicatiom/json',
    },
    body: JSON.stringify(userData),
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
    builder.addCase(signupAsync.pending, (state) => ({
      ...state, loading: true, error: null,
    }));
    builder.addcase(signupAsync.fulfilled, (state, action) => ({
      ...state, loading: false, token: action.payload.token, user: action.payload.user,
    }));
    builder.addCase(signupAsync.rejected, (state, action) => ({
      ...state, loading: false, error: action.error.message,
    }));
  },
});

export default signupSlice.reducer;
