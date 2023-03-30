import { API, authToken } from '../../API';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { notifySettings } from '../../utils/notifySettings';

export const logIn = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const { data } = await API.post('/auth/login', userData);
      authToken.set(data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      Notiflix.Notify.success(
        `Радо вітаємо, ${data.user.email}!`,
        notifySettings,
      );
      return data;
    } catch (error) {
      Notiflix.Notify.failure('Щось пішло не так...', notifySettings);
      return thunkAPI.rejectWithValue(error.request.status);
    }
  },
);

export const logOut = createAsyncThunk('logout', async (_, thunkAPI) => {
  try {
    await API.get('/auth/logout');
    authToken.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
