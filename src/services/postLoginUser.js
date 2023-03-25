import axios from 'axios';

const BASE_URL = `https://petly-site-back.up.railway.app`;

export async function postLoginUser(user) {
  const url = `${BASE_URL}/auth/login`;

  const { data } = await axios.post(url, user);
  console.log(data);
  return data;
}
