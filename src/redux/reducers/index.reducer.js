import { combineReducers } from 'redux';
import popupChatReducer from './popupChat.reducer';
import userList from './users.reducer';
import messageList from './messages.reducer';
import roomList from './rooms.reducer';
import recentList from './recents.reducer';

export const reducers = combineReducers({
  popupChat: popupChatReducer,
  userList,
  messageList,
  roomList,
  recentList,
});
