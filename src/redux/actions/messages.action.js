import * as types from '../types';
export const setMessageList = (data) => ({
  type: types.SET_MESSAGE,
  payload: data,
});
export const addMessageToList = (data) => ({
  type: types.ADD_MESSAGE,
  payload: data,
});
