import * as types from '../types';
const initialState = [];

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_RECENT:
      return action.payload;
    default:
      return state;
  }
}
