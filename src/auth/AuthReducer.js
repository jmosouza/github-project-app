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

const authCredentials = (credentials = {}, action) => {
  switch (action.type) {
    case AuthActionTypes.AUTH_LOGIN_SUCCEEDED:
      return { ...action.payload.auth };
    case AuthActionTypes.AUTH_LOGOUT_SUCCEEDED:
      return {};
    default:
      return credentials;
  }
};

export default combineReducers({
  login: authLogin,
  credentials: authCredentials,
});
