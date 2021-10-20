import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://back-sandbox.herokuapp.com/api',
});

instance.interceptors.request.use( config => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export { instance };