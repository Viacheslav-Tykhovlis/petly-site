import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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

// export const fetchNoticeById = createAsyncThunk(
//   'notices/fetchById',
//   async (noticeId, thunkAPI) => {
//     const url = `/notices/noticeId/${noticeId}`;
//     try {
//       const result = await axios.get(url);
//       return result.data.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );
