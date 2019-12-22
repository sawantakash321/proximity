import * as actions from "./actiontypes";

const {
  WEBSOCKET_OPENED,
  WEBSOCKET_CLOSED,
  WEBSOCKET_MESSAGE_RECEIVED,
  WEBSOCKET_ERROR_THROWN,
  PENDING,
  REQUEST,
  SUCCESS,
  FAILURE,
  SET,
  UNSET,
  SEND_MESSAGE,
  RECEIVE_MESSAGE
} = actions;


export const action = (type, payload = {}) => {
  return { type, ...payload };
};



export const websocket = {
  opened: data => action(WEBSOCKET_OPENED, { data }),
  closed: data => action(WEBSOCKET_CLOSED, { data }),
  messageReceived: data => action(WEBSOCKET_MESSAGE_RECEIVED, { data }),
  errorThrown: data => action(WEBSOCKET_ERROR_THROWN, { data })
};

export const websocketMessage = {
  sendMessage: data => action(SEND_MESSAGE, { data }),
  receiveMessage: data => action(RECEIVE_MESSAGE, { data }),

};




export const actionTypes = {
  ...actions
};
