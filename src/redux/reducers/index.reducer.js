import { combineReducers } from 'redux';
import popupChatReducer from './popupChat.reducer';
import userList from './users.reducer';
import messageList from './messages.reducer';

export const reducers = combineReducers({
  popupChat: popupChatReducer,
  userList,
  messageList,
});
