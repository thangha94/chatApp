import { combineReducers } from 'redux';
import popupChatReducer from './popupChat.reducer';
import userList from './users.reducer';
import messageList from './messages.reducer';
import roomList from './rooms.reducer';

export const reducers = combineReducers({
  popupChat: popupChatReducer,
  userList,
  messageList,
  roomList,
});
