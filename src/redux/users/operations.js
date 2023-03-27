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
  'user/change',
  async (file, { thunkAPI }) => {
    try {
      console.log(file);
      const formData = new FormData();
      formData.append('file', file);
      const response = await axios.patch('/auth/change', formData);
      return response.data.data.user;
    } catch (error) {
      return thunkAPI(error.message);
    }
  },
);

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, { thunkAPI }) => {
//     try {
//       const response = await axios.delete(`/contacts/${id}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI(error.message);
//     }
//   },
// );
