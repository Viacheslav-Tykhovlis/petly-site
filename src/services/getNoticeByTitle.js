import axios from 'axios';

const BASE_URL = `https://petly-site-back.up.railway.app`;

export async function fetchNoticeByTitle(title) {
  const url = `${BASE_URL}/notices/title/${title}`;

  const { data } = await axios.get(url);
  return data;
}
