import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./configureStore";
import * as serviceWorker from "./serviceWorker";
import BigNumber from 'bignumber.js';


const store = configureStore();
BigNumber.config({ EXPONENTIAL_AT: 1000 });


const renderApp = () =>
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>

        <App />
      </ConnectedRouter>

    </Provider>,
    document.getElementById("root")
  );



renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();





