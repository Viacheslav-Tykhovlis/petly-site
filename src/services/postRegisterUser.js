import axios from 'axios';
import { postLoginUser } from './postLoginUser';

const BASE_URL = `https://petly-site-back.up.railway.app`;

export async function postRegisterUser(user) {
  const url = `${BASE_URL}/auth/signup`;

  const { data } = await axios
    .post(url, user)
    .then(function (response) {
      console.log(response);
      const { email, password } = response.data.user;
      postLoginUser({ email, password });
    })
    .catch(function (error) {
      console.log(error);
    });
  console.log(data);
  return data;
}
