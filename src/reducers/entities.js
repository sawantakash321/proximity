import { combineReducers } from "redux";
import { Map, List } from 'immutable';
import { RECEIVE_MESSAGE, WEBSOCKET_MESSAGE_RECEIVED } from '../actions/actiontypes'

// const initialOrderbook = Map({
//   buy: List(),
//   sell: List()
// });

const intialState = {
  last_sequence_no: null,
  product_id: null,
  type: '',
  symbol: '',
  timestamp: null,
  buy: [],
  sell: []
}
const entities = () => {

  const orderbookReducer = (state = intialState, action) => {
    switch (action.type) {
      case WEBSOCKET_MESSAGE_RECEIVED:
        const { last_sequence_no, product_id, type, symbol, timestamp, buy, sell } = JSON.parse(action.data)
        let newMessage = {
          last_sequence_no,
          product_id,
          type,
          symbol,
          timestamp,
          buy,
          sell
        }
        return Object.assign({}, state, newMessage);
      default:
        return state;
    }
  }

  return combineReducers({
    orderbook: orderbookReducer
  });
};

export default entities;
