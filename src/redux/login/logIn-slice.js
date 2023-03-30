import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut } from './logIn-operations';

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
        state.user = action.payload.data.userUpdated;
        state.token = action.payload.data.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => state)
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      }),
});
export const logInReducer = logInSlice.reducer;
