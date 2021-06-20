import axios from 'axios';

export const SERVER_URL =
  window.location.hostname == 'localhost'
    ? 'http://localhost:8080'
    : 'http://api1.hathang.online';
export const GOOGLE_CLIENT_ID =
  '550467040202-papd023rtkrv64nkq62s6t4l9gshsr1t.apps.googleusercontent.com';
export const API = () =>
  axios.create({
    baseURL: SERVER_URL,
    withCredentials: true,
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('tokenId'), //the token is a variable which holds the token
    },
  });

console.log();
