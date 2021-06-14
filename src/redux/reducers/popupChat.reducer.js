import * as types from '../types';
const initialState = {};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case types.CHANGE_POPUP_CHAT:
      return action.payload;
    default:
      return state;
  }
}
