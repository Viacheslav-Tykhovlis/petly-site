import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = `https://petly-site-back.up.railway.app`;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = ``;
// };

export const logIn = createAsyncThunk(
  '/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/auth/login', credentials);
      // console.log(response.data.data.user);
      
      setAuthHeader(response.data.data.accessToken);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
