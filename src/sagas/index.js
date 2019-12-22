/* eslint-disable no-constant-condition */
import { all, call, put, fork, takeEvery } from "redux-saga/effects";
import { websocketManager } from "../services/websocket"
import { WEBSOCKET_MESSAGE_RECEIVED, RECEIVE_MESSAGE } from "../actions/actiontypes";
import { websocketMessage } from '../actions'


function* messagesSaga(action) {
  const data = JSON.parse(action.data);

  if (data.type === RECEIVE_MESSAGE) {
    yield put(websocketMessage.receiveMessage(data));
  }
}

// we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    fork(websocketManager, { url: 'wss://api.delta.exchange:2096' }),
    takeEvery(WEBSOCKET_MESSAGE_RECEIVED, messagesSaga),
  ])
}






