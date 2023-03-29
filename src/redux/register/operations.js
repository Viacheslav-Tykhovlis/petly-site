import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = `https://petly-site-back.up.railway.app`;

export const register = createAsyncThunk(
  '/auth/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/signup', credentials);
      return data;
    } catch (e) {
      toast.error(e.response.data.message);
      return rejectWithValue(e.message);
    }
  },
);
