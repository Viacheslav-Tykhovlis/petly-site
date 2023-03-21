import axios from 'axios';

const BASE_URL = `https://petly-site-back.up.railway.app`;

export async function fetchNoticesByCategory(category) {
  const url = `${BASE_URL}/notices/category/${category}`;

  const { data } = await axios.get(url);
  return data;
}
