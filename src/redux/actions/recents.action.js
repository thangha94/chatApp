import * as types from '../types';
export const setRecentList = (data) => ({
  type: types.SET_RECENT,
  payload: data,
});
