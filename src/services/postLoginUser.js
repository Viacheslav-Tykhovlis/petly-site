import axios from 'axios';
import { authToken } from '../API';

const BASE_URL = `https://petly-site-back.up.railway.app`;

export async function postLoginUser(user) {
  const url = `${BASE_URL}/auth/login`;

  const response = await axios
    .post(url, user)
    .then(function (response) {
      console.log(response);
      console.log(response.data.data.accessToken);
      authToken.set(response.data.data.accessToken);
    })
    .catch(function (error) {
      console.log(error);
    });
  return response.data;
}
