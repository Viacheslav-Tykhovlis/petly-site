import axios from 'axios';

const BASE_URL = `https://petly-site-back.up.railway.app`;

export async function postRegisterUser(user) {
  const url = `${BASE_URL}/auth/signup`;
  console.log(user);
  // need authoraized user

  const { email, password } = user;
  const response = await axios
    .post(url, { email, password })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log('Сработал cath');
      console.log(error);
    });
  return response.data;
}
