import { createSlice } from '@reduxjs/toolkit';
import {
  addNotice,
  deleteNotice,
  // fetchNoticeById,
  fetchNoticesByCategory,
  fetchNoticesByOwner,
  fetchNoticesByTitle,
} from './noticesOperations';

const noticesInitialState = {
  noticesList: [],
  isLoading: false,
  searchBtnIsActive: true,
  error: null,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState: noticesInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchNoticesByCategory.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.searchBtnIsActive = true;
      })
      .addCase(fetchNoticesByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.noticesList = action.payload;
        state.searchBtnIsActive = true;
      })
      .addCase(fetchNoticesByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.searchBtnIsActive = true;
      })

      .addCase(fetchNoticesByTitle.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.searchBtnIsActive = false;
      })
      .addCase(fetchNoticesByTitle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.noticesList = action.payload;
        state.searchBtnIsActive = false;
      })
      .addCase(fetchNoticesByTitle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.searchBtnIsActive = true;
      })

      .addCase(fetchNoticesByOwner.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.searchBtnIsActive = false;
      })
      .addCase(fetchNoticesByOwner.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.noticesList = action.payload;
        state.searchBtnIsActive = false;
      })
      .addCase(fetchNoticesByOwner.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.searchBtnIsActive = true;
      })

      .addCase(addNotice.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addNotice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.noticesList.push(action.payload);
      })
      .addCase(addNotice.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(deleteNotice.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteNotice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const { noticesList } = state;
        const index = noticesList.findIndex(
          notice => notice.id === action.payload.id,
        );
        noticesList.splice(index, 1);
      })
      .addCase(deleteNotice.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    //  .addCase(fetchNoticeById.pending, state => {
    //   state.isLoading = true;
    //   state.error = null;
    // })
    // .addCase(fetchNoticeById.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.noticesList = action.payload;
    // })
    // .addCase(fetchNoticeById.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // })
  },
});

export const noticesReducer = noticesSlice.reducer;
