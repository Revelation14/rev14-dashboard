/* eslint-disable no-param-reassign */

import axios from 'axios';

import { getFromLocalStorage } from './helper';

const http = axios.create({
  // All dashboard traffic goes to the Supabase `dashboard` edge function,
  // which mirrors the old NestJS route paths.
  baseURL: `${
    process.env.NEXT_PUBLIC_SUPABASE_URL ??
    'https://rzqklwfhwqmviintncqh.supabase.co'
  }/functions/v1/dashboard`,
  headers: {
    Authorization: '',
    'Content-Type': 'application/json',
  },
});

http.defaults.withCredentials = false;
http.interceptors.request.use((config) => {
  const token = JSON.parse(getFromLocalStorage('token'));
  if (config.headers) {
    config.headers.Authorization = token ? `${token}` : '';
  }
  return config;
});

export default http;
