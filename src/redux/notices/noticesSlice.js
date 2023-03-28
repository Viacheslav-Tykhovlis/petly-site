import { createSlice } from '@reduxjs/toolkit';
import {
  addNotice,
  addToFavorite,
  deleteFromFavorite,
  deleteNotice,
  fetchFavoriteNotices,
  fetchNoticesByCategory,
  fetchNoticesByOwner,
  fetchNoticesByTitle,
} from './noticesOperations';

const noticesInitialState = {
  noticesList: [],
  ownList: [],
  favoriteList: [],
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

      // notices by title
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

      // notices by owner
      .addCase(fetchNoticesByOwner.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.searchBtnIsActive = false;
      })
      .addCase(fetchNoticesByOwner.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ownList = action.payload;
        state.searchBtnIsActive = false;
      })
      .addCase(fetchNoticesByOwner.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.searchBtnIsActive = true;
      })

      // add new notice
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

      // delete notice
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
      })

      // favorite notices
      .addCase(fetchFavoriteNotices.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.searchBtnIsActive = false;
      })
      .addCase(fetchFavoriteNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.favoriteList = action.payload;
        state.searchBtnIsActive = false;
      })
      .addCase(fetchFavoriteNotices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.searchBtnIsActive = true;
      })

      // add to favorite
      .addCase(addToFavorite.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.searchBtnIsActive = false;
      })
      .addCase(addToFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.favoriteList.push(action.payload);
        state.searchBtnIsActive = false;
      })
      .addCase(addToFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.searchBtnIsActive = true;
      })

      // delete from favorite
      .addCase(deleteFromFavorite.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.searchBtnIsActive = false;
      })
      .addCase(deleteFromFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const { favoriteList } = state;
        const index = favoriteList.findIndex(
          notice => notice.id === action.payload.id,
        );
        favoriteList.splice(index, 1);
        state.searchBtnIsActive = true;
      })
      .addCase(deleteFromFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.searchBtnIsActive = true;
      });
  },
});

export const noticesReducer = noticesSlice.reducer;
