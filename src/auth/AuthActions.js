import AuthActionTypes from './AuthActionTypes';

export const authLoginSubmitted = ({ username, password, history }) => ({
  type: AuthActionTypes.AUTH_LOGIN_SUBMITTED,
  payload: {
    history,
    auth: { username, password },
  },
});

export const authLoginSucceeded = ({ username, password }) => ({
  type: AuthActionTypes.AUTH_LOGIN_SUCCEEDED,
  payload: {
    auth: { username, password },
  },
});

export const authLogoutSubmitted = ({ history }) => ({
  type: AuthActionTypes.AUTH_LOGOUT_SUBMITTED,
  payload: { history },
});
