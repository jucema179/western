import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import 'babel-polyfill'
import { Provider } from 'react-redux'
import { LocaleProvider } from 'antd';
import { ConnectedRouter } from 'connected-react-router'

import App from './App'
import './index.css'
import { getServerUrl } from './helpers/urlAPI'
import { store, history } from './store/store'
import { checkToken } from './helpers/checkToken';
import {
  ALREADY_LOGGED, SET_CURRENT_USER
} from './actionTypes/appTypes';
import {
  logOutUserAndRedirect
} from './actions/appAction'

axios.defaults.baseURL = `${getServerUrl()}api`;

axios.interceptors.response.use(
  null,
  (error) => {
    const status = error.response.data.statusCode;
    if (status === 401) {
      store.dispatch(logOutUserAndRedirect())
    }
    return Promise.reject(error)
  },
)

checkToken()
  .then(({ user }) => {
    store.dispatch({ type: ALREADY_LOGGED });
    store.dispatch({ type: SET_CURRENT_USER, payload: user });

    ReactDOM.render(
      <Provider store={store}>
        <LocaleProvider>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </LocaleProvider>
      </Provider>,
      document.getElementById('root'),
    );
})
.catch(() => {

  ReactDOM.render(
    <Provider store={store}>
      <LocaleProvider>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </LocaleProvider>
    </Provider>,
    document.getElementById('root'),
  );
});

