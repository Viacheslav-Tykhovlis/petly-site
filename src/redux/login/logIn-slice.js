import { createSlice } from '@reduxjs/toolkit';
import { logIn } from './logIn-operations';

const logInSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null, _id: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(logIn.pending, (state, action) => state)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
        state.token = action.payload.data.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => state),
});
export const logInReducer = logInSlice.reducer;
