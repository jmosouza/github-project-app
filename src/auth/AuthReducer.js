import { combineReducers } from 'redux';
import AuthActionTypes from './AuthActionTypes';

const authLoginLoading = (loading = false, action) => {
  switch (action.type) {
    case AuthActionTypes.AUTH_LOGIN_SUBMITTED:
      return true;
    case AuthActionTypes.AUTH_LOGIN_SUCCEEDED:
    case AuthActionTypes.AUTH_LOGIN_FAILED:
      return false;
    default:
      return loading;
  }
};

const authLoginValid = (valid = true, action) => {
  switch (action.type) {
    case AuthActionTypes.AUTH_LOGIN_SUBMITTED:
      return true;
    case AuthActionTypes.AUTH_LOGIN_FAILED:
      return false;
    default:
      return valid;
  }
};

const authLogin = combineReducers({
  loading: authLoginLoading,
  valid: authLoginValid,
});

const authUsername = (username = null, action) => {
  switch (action.type) {
    case AuthActionTypes.AUTH_LOGIN_SUCCEEDED:
      return action.payload.auth.username;
    case AuthActionTypes.AUTH_LOGOUT_SUCCEEDED:
      return null;
    default:
      return username;
  }
};

export default combineReducers({
  login: authLogin,
  username: authUsername,
});
