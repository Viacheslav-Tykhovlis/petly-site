import { createSlice } from '@reduxjs/toolkit';
import { fetchUser, uploadAvatar, currenthUser } from './operations';

const pendingReducer = state => {
  state.isLoading = true;
};

const fetchUserSucceesReducer = (state, action) => {
  state.items = action.payload;
  state.isLoading = true;
};

const currenthUserSucceesReducer = (state, action) => {
  console.log(action.payload);
  state.user = action.payload.data.user;
  state.token = action.payload.data.user.accessToken;
  state.isLoggedIn = true;
};

const rejectedReducer = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const userSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
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
      .addCase(currenthUser.pending, pendingReducer)
      .addCase(currenthUser.fulfilled, currenthUserSucceesReducer)
      .addCase(currenthUser.rejected, rejectedReducer);
  },
});

export const userReducer = userSlice.reducer;
