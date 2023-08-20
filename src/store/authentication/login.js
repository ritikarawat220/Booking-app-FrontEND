import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  // somevalue
};

const login = createAsyncThunk();
console.log('login', login);

const loginSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {},
});

export default loginSlice.reducer;
