import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = `https://petly-site-back.up.railway.app`;

export const fetchUser = createAsyncThunk('/user', async (_, { thunkAPI }) => {
  try {
    const response = await axios.get('/user/about');
    return response.data.data.user;
  } catch (error) {
    console.log('fetchUserError:', error.message);
    return thunkAPI(error.message);
  }
});

export const uploadAvatar = createAsyncThunk(
  'user/changeAvatar',
  async (file, { thunkAPI }) => {
    try {
      const formData = new FormData();
      formData.append('avatarUrl', file);
      const response = await axios.put('/auth/change', formData);
      return response.data;
    } catch (error) {
      return thunkAPI(error.message);
    }
  },
);

export const uploadUser = createAsyncThunk(
  'user/change',
  async (formData, { thunkAPI }) => {
    try {
      const response = await axios.put('/auth/change', formData);
      return response.data;
    } catch (error) {
      return thunkAPI(error.message);
    }
  },
);
