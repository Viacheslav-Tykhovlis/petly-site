import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = `https://petly-site-back.up.railway.app`;

export async function fetchFriends() {
  const url = `${BASE_URL}/servicessidebar`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error.data);
    toast.error(error.response.data.message);
  }
}
