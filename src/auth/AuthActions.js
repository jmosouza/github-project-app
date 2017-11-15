import AuthActionTypes from './AuthActionTypes';

export const authLoginSubmitted = ({ username, password, history }) => ({
  type: AuthActionTypes.AUTH_LOGIN_SUBMITTED,
  payload: {
    history,
    auth: { username, password },
  },
});

export const authLogoutSubmitted = () => ({
  type: AuthActionTypes.AUTH_LOGOUT_SUBMITTED,
});
