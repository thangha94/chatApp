import { API } from '../define';

export const getAllUser = async () => {
  let result = await API.get('/user/allUsers');
  return result.data;
};
