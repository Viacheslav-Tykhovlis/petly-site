import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = `https://petly-site-back.up.railway.app`;

export const fetchNews = createAsyncThunk(
  '/news',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/news');
      return response.data;
    } catch (e) {
      console.log('fetchNewsErr:', e.message);
      return rejectWithValue(e.message);
    }
  },
);
