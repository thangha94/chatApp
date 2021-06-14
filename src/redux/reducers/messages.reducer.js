import * as types from '../types';
const initialState = [];

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_MESSAGE:
      return action.payload;
    case types.ADD_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
}
