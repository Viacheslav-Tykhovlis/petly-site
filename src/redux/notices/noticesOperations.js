import { API } from '../../API';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import Notiflix from 'notiflix';
// import { notifySettings } from '../../utils/notifySettings';



export const fetchNoticesByCategory = createAsyncThunk(
  'notices/fetchByCategory',
  async (category, thunkAPI) => {
    const url = `/notices/category/${category}`;
    try {
      const result = await API.get(url);
      return result.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchNoticesByTitle = createAsyncThunk(
  'notices/fetchByTitle',
  async (title, thunkAPI) => {
    const url = `/notices/title/${title}`;
    try {
      const result = await API.get(url);
      return result.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchNoticesByOwner = createAsyncThunk(
  'notices/fetchByOwner',
  async (_, thunkAPI) => {
    const url = `/notices/userNotices`;
    try {
      const result = await API.get(url);
      return result.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (newNotice, thunkAPI) => {
    try {
      const response = await API.post('/notices/create', newNotice);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteNotice = createAsyncThunk(
  'notices/deleteNotice',
  async (noticeId, thunkAPI) => {
    try {
      const response = await API.delete(`/notices/delete/${noticeId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchFavoriteNotices = createAsyncThunk(
  'notices/fetchFavorite',
  async (_, thunkAPI) => {
    const url = `/notices/getFavorite`;
    try {
      const result = await API.get(url);
      return result.data.data[0].userLikePets;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addToFavorite = createAsyncThunk(
  'notices/addFavorite',
  async (noticeId, thunkAPI) => {
    const url = `/notices/addFavorite/${noticeId}`;
    try {
      const result = await API.patch(url);
      console.log(result.data.data);
      return result.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteFromFavorite = createAsyncThunk(
  'notices/deleteFavorite',
  async (noticeId, thunkAPI) => {
    const url = `/notices/delFavorite/${noticeId}`;
    try {
      const result = await API.patch(url);
      console.log(result.data.data);
      return result.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
