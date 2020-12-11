import {
    LOG_OUT, LOGIN_SUCCESS, LOGIN_ERROR, ALREADY_LOGGED, SET_CURRENT_USER, UPDATE_CURRENT_USER,
  } from '../actionTypes/appTypes';
  
  const initialState = {
    loginCredentials: {},
    loginError: {},
    logged: false,
    user: {},
  };
  
  const AppReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return { ...state, loginCredentials: action.loginCredentials, logged: true };
      case LOGIN_ERROR:
        return { ...state, loginError: action.loginError };
      case ALREADY_LOGGED: {
        return { ...state, logged: true };
      }
      case LOG_OUT: {
        return initialState;
      }
      case SET_CURRENT_USER: {
        return { ...state, user: action.payload };
      }
      case UPDATE_CURRENT_USER: {
        return { ...state, user: { ...state.user, ...action.payload } };
      }
      default:
        return state;
    }
  };
  
  export default AppReducer;
  