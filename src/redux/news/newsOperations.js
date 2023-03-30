import { API } from '../../API';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import Notiflix from 'notiflix';
// import { notifySettings } from '../../utils/notifySettings';


export const fetchNews = createAsyncThunk(
  '/news',
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get('/news');
      return response.data;
    } catch (e) {
      console.log('fetchNewsErr:', e.message);
      return rejectWithValue(e.message);
    }
  },
);
