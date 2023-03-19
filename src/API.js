import axios from 'axios';

const API = axios.create({
  //   baseURL: 'http://185.233.118.244:8080',
  baseURL: 'http://localhost:8080',
});

const authToken = {
  set(token) {
    API.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    API.defaults.headers.common.Authorization = '';
  },
};

const getAllNews = async () => {
  return await API.get(`/news`);
};

API.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');
      console.log(refreshToken);
      try {
        const { data } = await API.post('/auth/users/refresh', {
          refreshToken,
        });
        if (data.accessToken) {
          authToken.set(data.accessToken);
          localStorage.setItem('refreshToken', data.refreshToken);
        }
        return API(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);
export { API, authToken, getAllNews };
