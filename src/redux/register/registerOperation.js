// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// const BASE_URL = `https://petly-site-back.up.railway.app`;

// export const register = createAsyncThunk(
//   'auth/register',
//   async (credentials, thunkAPI) => {
//     const url = `${BASE_URL}/auth/signup`;
//     try {
//       const response = await axios.post(url, credentials);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );
