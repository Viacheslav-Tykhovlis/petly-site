import { API, authToken } from '../../API';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { notifySettings } from '../../utils/notifySettings';

export const fetchUser = createAsyncThunk('/user', async (_, { thunkAPI }) => {
  try {
    const response = await API.get('/user/about');
    return response.data.data.user;
  } catch (error) {
    return thunkAPI(error.message);
  }
});

export const uploadAvatar = createAsyncThunk(
  'user/change',
  async (file, { thunkAPI }) => {
    try {
      console.log(file);
      const formData = new FormData();
      formData.append('file', file);
      const response = await API.patch('/auth/change', formData);
      return response.data.data.user;
    } catch (error) {
      return thunkAPI(error.message);
    }
  },
);
export const currenthUser = createAsyncThunk(
  'user/current',
  async (_, { thunkAPI }) => {
    try {
      const { data } = await API.post('/user/current');
      authToken.set(data.data.user.accessToken);
      console.log(data);
      Notiflix.Notify.success(
        `З поверненням, ${data.user.email}!`,
        notifySettings,
      );
      return data;
    } catch (error) {
      return thunkAPI(error.message);
    }
  },
);
