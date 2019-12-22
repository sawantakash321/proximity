import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

import logger from "redux-logger";
import createRootReducer from "./reducers";
import rootSaga from "./sagas";

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();
  const routersMiddleware = routerMiddleware(history);
  const middlewares = [logger, sagaMiddleware, routersMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);


  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composedEnhancers
  );


  sagaMiddleware.run(rootSaga);

  return store;
}
