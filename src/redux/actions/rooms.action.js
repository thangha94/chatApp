import * as types from '../types';
export const setRoomList = (data) => ({
  type: types.SET_ROOMS,
  payload: data,
});
