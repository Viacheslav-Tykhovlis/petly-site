import axios from 'axios';

const BASE_URL = `https://petly-site-back.up.railway.app`;

export async function fetchNoticeById(noticeId) {
  const url = `${BASE_URL}/notices/noticeId/${noticeId}`;

  const { data } = await axios.get(url);
  return data;
}
