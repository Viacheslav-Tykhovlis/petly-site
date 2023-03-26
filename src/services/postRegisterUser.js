import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { postLoginUser } from './postLoginUser';
// import { logIn } from '../redux/login/logIn-operations';

const BASE_URL = `https://petly-site-back.up.railway.app`;

export async function postRegisterUser(user) {
  const url = `${BASE_URL}/auth/signup`;

  try {
    const response = await axios.post(url, user);
    console.log(response.data);
    console.log(response.data.code);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}
