import { eventChannel } from 'redux-saga';
import { take, call, put, fork } from 'redux-saga/effects';
import ReconnectingWebSocket from 'reconnecting-websocket';
import { SEND_MESSAGE } from '../actions/actiontypes'
import {
  websocket,
} from '../actions';

const createWebsocketChannel = ws =>
  eventChannel(emitter => {
    ws.addEventListener('message', message => {
      emitter(websocket.messageReceived(message.data));
    });

    ws.addEventListener('open', () => {
      emitter(websocket.opened());
    });

    ws.addEventListener('error', () => {
      emitter(websocket.errorThrown());
    });

    ws.addEventListener('close', () => {
      emitter(websocket.closed());
    });

    return () => ws.close();
  });

function* websocketMessageSender(ws) {
  while (true) {
    const action = yield take(SEND_MESSAGE);
    ws.send(JSON.stringify(action.data));
  }
}

export function* websocketManager({ url }) {
  const ws = new ReconnectingWebSocket(url, '');
  const wsChannel = yield call(createWebsocketChannel, ws);
  yield fork(websocketMessageSender, ws);

  while (true) {
    const action = yield take(wsChannel);
    yield put(action);
  }
}
