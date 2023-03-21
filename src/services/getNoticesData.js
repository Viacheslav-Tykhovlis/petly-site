import axios from 'axios';

// const BASE_URL = 'https://petly-site-back.up.railway.app/notices';

const BASE_URL = 'https://petly-site-back.up.railway.app/news';

export async function fetchNoticeByCategory() {
  //   const url = `${BASE_URL}/noticesByCategory`;

  const { data } = await axios.get(BASE_URL);
  return data;
}
