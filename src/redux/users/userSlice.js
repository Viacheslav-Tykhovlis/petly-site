import { createSlice } from '@reduxjs/toolkit';
import { fetchUser, uploadAvatar, uploadUser } from './operations';

const pendingReducer = state => {
  state.isLoading = true;
};

const fetchUserSucceesReducer = (state, action) => {
  state.items = action.payload;
  state.isLoading = false;
};

const rejectedReducer = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const userSlice = createSlice({
  name: 'users',
  initialState: {
    items: {},
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, pendingReducer)
      .addCase(fetchUser.fulfilled, fetchUserSucceesReducer)
      .addCase(fetchUser.rejected, rejectedReducer)
      .addCase(uploadAvatar.pending, pendingReducer)
      .addCase(uploadAvatar.fulfilled, fetchUserSucceesReducer)
      .addCase(uploadAvatar.rejected, rejectedReducer)
      .addCase(uploadUser.pending, pendingReducer)
      .addCase(uploadUser.fulfilled, fetchUserSucceesReducer)
      .addCase(uploadUser.rejected, rejectedReducer);
  },
});

export const userReducer = userSlice.reducer;
