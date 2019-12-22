export const PENDING = "PENDING";
export const REQUEST = "REQUEST";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const SET = "SET";
export const UNSET = "UNSET";
export const WEBSOCKET_STATE = 'websocketState';
export const WEBSOCKET_OPENED = 'WEBSOCKET_OPENED';
export const WEBSOCKET_CLOSED = 'WEBSOCKET_CLOSED';
export const WEBSOCKET_MESSAGE_RECEIVED = 'WEBSOCKET_MESSAGE_RECEIVED';
export const WEBSOCKET_ERROR_THROWN = 'WEBSOCKET_ERROR_THROWN';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const createRequestTypes = base => {
  return [PENDING, REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
};

export const createFlagTypes = base => {
  return [SET, UNSET, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
};

