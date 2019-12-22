import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { WEBSOCKET_STATE } from '../actions/actiontypes'
import entities, * as Entities from "./entities";
import { websocketReducer } from './websocket'

export default history => {
  return combineReducers({
    router: connectRouter(history),
    entities: entities(),
    [WEBSOCKET_STATE]: websocketReducer
  });
};
