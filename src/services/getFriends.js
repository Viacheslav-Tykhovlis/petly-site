import axios from 'axios';

const BASE_URL = `https://petly-site-back.up.railway.app`;

export async function fetchFriends() {
  const url = `${BASE_URL}/servicessidebar`;

  const { data } = await axios.get(url);
  return data;
}
