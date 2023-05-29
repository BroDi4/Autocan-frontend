import axios from 'axios';

export const axiosQuery = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 8000,
});
