import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { showToastInfo } from 'utils/showTost';

axios.defaults.baseURL = `https://petly-site-back.up.railway.app`;

export const fetchNoticesByCategory = createAsyncThunk(
  'notices/fetchByCategory',
  async (category, thunkAPI) => {
    const url = `/notices/category/${category}`;
    try {
      const result = await axios.get(url);
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
      const result = await axios.get(url);
      if (!result.data.data.length) {
        showToastInfo('Sorry, no pets by this title');
      }
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
      const result = await axios.get(url);
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
      const response = await axios.post('/notices/create', newNotice);
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
      const response = await axios.delete(`/notices/delete/${noticeId}`);
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
      const result = await axios.get(url);
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
      const result = await axios.patch(url);
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
      const result = await axios.patch(url);
      return result.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
