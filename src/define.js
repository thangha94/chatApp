import axios from 'axios';

export const SERVER_URL = 'http://localhost:8080';
export const GOOGLE_CLIENT_ID =
  '550467040202-papd023rtkrv64nkq62s6t4l9gshsr1t.apps.googleusercontent.com';
export const API = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
});
