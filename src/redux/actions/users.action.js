import * as types from '../types';
export const setUserList = (data) => ({
  type: types.SET_USERS,
  payload: data,
});
