import axios from 'axios';

const BASE_URL = `https://petly-site-back.up.railway.app`;

export async function postCreatedNotice(userId, payload) {
  const url = `${BASE_URL}/notices/create/${userId}`;

  // need authoraized user

  const { data } = await axios.post(url, payload);
  console.log(data);
  return data;
}
