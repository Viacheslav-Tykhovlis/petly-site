import { createSlice } from '@reduxjs/toolkit';
import {
  fetchUser,
  uploadAvatar,
  // addContact, deleteContact
} from './operations';

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
      .addCase(uploadAvatar.rejected, rejectedReducer);
  },
  // extraReducers: {
  //   [fetchUser.pending]: handlePending,
  //   [fetchUser.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   [fetchUser.rejected]: handleRejected,

  // [addContact.pending]: handlePending,
  // [addContact.fulfilled](state, action) {
  //   state.isLoading = false;
  //   state.error = null;
  //   state.items.push(action.payload);
  // },
  // [addContact.rejected]: handleRejected,

  // [deleteContact.pending]: handlePending,
  // [deleteContact.fulfilled](state, action) {
  //   state.isLoading = false;
  //   state.error = null;
  //   const { items } = state;
  //   const index = items.findIndex(
  //     contact => contact.id === action.payload.id,
  //   );
  //   items.splice(index, 1);
  // },
  // [deleteContact.rejected]: handleRejected,
  //   },
});

export const userReducer = userSlice.reducer;
