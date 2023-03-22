import axios from 'axios';

const BASE_URL = `https://petly-site-back.up.railway.app`;

export async function deleteNoticeById(noticeId) {
  const url = `${BASE_URL}/notices/delete/${noticeId}`;

  const { data } = await axios.delete(url);
  return data;
}
