import AuthActionTypes from './AuthActionTypes';

export const authLoginSubmitted = ({ username, password }) => ({
  type: AuthActionTypes.AUTH_LOGIN_SUBMITTED,
  payload: { username, password },
});
