import { API } from '../define';
import qs from 'qs';
export const getAllUser = async () => {
  let result = await API().get('/user/allUsers');
  return result.data;
};
export const getRoomByUsers = async (users) => {
  let result = await API().get(`/room/getByUsers?${qs.stringify(users)}`);
  return result.data;
};
export const getMessagesByRoom = async (data) => {
  let result = await API().get(
    `/message/getMessagesByRoom?${qs.stringify(data)}`
  );
  return result.data;
};
export const getAllRoomByUser = async (data) => {
  let result = await API().get(`/room/getAllRoomByUser?${qs.stringify(data)}`);
  return result.data;
};
export const getRecentRooms = async (data) => {
  let result = await API().get(`/room/getRecentRooms?${qs.stringify(data)}`);
  return result.data;
};
export const createRoom = async (data) => {
  let result = await API().post(`/room/createNewRoom`, data);
  return result.data;
};
