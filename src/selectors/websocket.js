import { WEBSOCKET_STATE } from '../actions/actiontypes';
import * as R from 'ramda'
import { createSelector } from 'reselect';


export const isWebsocketConnected = state => state[WEBSOCKET_STATE].connected;

export const isWebsocketDisconnected = state =>
  state[WEBSOCKET_STATE].disconnected;

export const getBuys = state => {
  return R.path(['entities', 'orderbook', 'buy'], state)
}

export const getSells = state => {
  return R.path(['entities', 'orderbook', 'sell'], state)

}