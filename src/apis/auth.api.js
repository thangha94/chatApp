import { API } from '../define';

export const signupServer = async (data) => {
  let result = await API().post(`/auth/signup`, data);
  return result.data;
};
export const signinServer = async (data) => {
  let result = await API().post(`/auth/signin`, data);
  return result.data;
};
export const checkToken = async (data) => {
  let result = await API().post(`/auth/checkToken`, data);
  return result.data;
};
