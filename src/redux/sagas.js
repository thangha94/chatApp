import {
  put,
  takeEvery,
  all,
  takeLatest,
  call,
  take,
  race,
} from 'redux-saga/effects';
import * as types from './types';

export function* changePopupChat(action) {
  yield put({
    type: types.CHANGE_POPUP_CHAT,
    payload: action.payload,
  });
}

export function* watchChangePopupChat() {
  yield takeLatest(types.CHANGE_POPUP_CHAT_SAGA, changePopupChat);
}

export default function* rootSaga() {
  yield all([watchChangePopupChat()]);
}
