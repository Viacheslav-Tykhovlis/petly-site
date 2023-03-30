import axios from 'axios';
import Notiflix from 'notiflix';
import { notifySettings } from './utils/notifySettings';

const API = axios.create({
  // baseURL: 'https://petly-site-back.up.railway.app',
  baseURL: 'http://localhost:3002',
});

const authToken = {
  set(token) {
    API.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    API.defaults.headers.common.Authorization = '';
  },
};


API.interceptors.response.use(
  response => response,
  async error => {
    // eslint-disable-next-line
    if (error.response.status == 401) {
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        console.log(refreshToken);
        const { data } = await API.post('/user/refresh', { refreshToken });
        authToken.set(data.accessToken);
        console.log(data.accessToken);
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        console.log(data.refreshToken);
        return API(error.config);
      } catch (error) {
         Notiflix.Notify.failure('interceptors catch', notifySettings);
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);
export { API, authToken };
