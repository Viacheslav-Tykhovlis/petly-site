import axios from 'axios';

const BASE_URL = `https://petly-site-back.up.railway.app`;

export async function postRegisterUser(user) {
  const url = `${BASE_URL}/auth/signup`;

  try {
    const response = await axios.post(url, user);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}
