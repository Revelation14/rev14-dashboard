/* eslint-disable no-param-reassign */

import axios from 'axios';

const http = axios.create({
  baseURL: 'https://grace.fly.dev/api/v1',
  headers: {
    Authorization: '',
    'Content-Type': 'application/json',
  },
});

http.defaults.withCredentials = false;
http.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (config.headers) {
    config.headers.Authorization = token ? `${token}` : '';
  }
  return config;
});

export default http;
