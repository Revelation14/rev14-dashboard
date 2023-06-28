import axios from 'axios';

const http = axios.create({
  baseURL: 'https://grace.fly.dev/api/v1',
});

export default http;
