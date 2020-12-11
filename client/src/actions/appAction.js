import Axios from 'axios';
import { push } from 'connected-react-router'
import _ from 'lodash'
import { setAuthorizationToken } from '../helpers/setAuthorizationToken';
import {
  LOG_OUT, LOGIN_ERROR, LOGIN_SUCCESS, SET_CURRENT_USER,
} from '../actionTypes/appTypes';
 
export const Login = credentials => dispatch => { 
  return Axios.post('/auth/login', credentials)
  .then((response) => {
    if (response.data.success) {
      setAuthorizationToken(response.data.token);
      localStorage.setItem('userData', JSON.stringify(response.data))
      dispatch({ type: LOGIN_SUCCESS, loginCredentials: response.data });
      return response.data;
    }
    const { type } = response.data;
    const message = type ? response.data.message : 'The system is down, please try later or contact administrator.';
    const data = {
      ...response.data,
      unknown: true,
      message,
    };
    return data;
  })
  .catch((response) => {
    dispatch({ type: LOGIN_ERROR, loginError: response.data });
    const data = {
      success: false,
      unknown: true,
      message: 'The system is down, please try later or contact administrator.',
    };
    localStorage.removeItem('userData')
    localStorage.removeItem('jwtToken')
    delete Axios.defaults.headers.common.Authorization
    return data;
  });
}

export const logOutUserAndRedirect = () => (dispatch) => {
    localStorage.removeItem('userData')
    localStorage.removeItem('jwtToken')
    delete Axios.defaults.headers.common.Authorization
    dispatch(push('/login'))
    dispatch({ type: LOG_OUT });
};

export const setUser = payload => ({
  type: SET_CURRENT_USER,
  payload,
});
export const sendRecoveryEmail = email => () => new Promise((resolve, reject) => {
  Axios.post('/api/auth/forgot-password', { email })
    .then((response) => {
      if (response.data.success) {
        resolve();
      } else {
        reject(response.data);
      }
    })
    .catch((error) => {
      reject(error.response.data || error);
    });
});

export const getErrorMessage = (err) => {
  let newError = '';
  if (err.response) {
    const { error } = err.response.data;
    if (!error) {
      const { statusText } = err.response;
      if (statusText) {
        newError = statusText;
      } else {
        newError = '';
      }
    } else {
      newError = error;
    }
  } else {
    newError = err.toString();
  }
  const networError = 'Network Error';
  const isPossibleNetworkIssue = newError.toLowerCase().includes(networError.toLocaleLowerCase());
  if (isPossibleNetworkIssue) {
    newError = 'Trying to connect… please check your internet connection.';
  }
  return {
    message: newError,
    type: isPossibleNetworkIssue ? 'noFormat' : 'error',
  };
};
