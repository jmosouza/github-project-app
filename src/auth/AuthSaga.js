import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import AuthActionTypes from './AuthActionTypes';
import { authLoginSucceeded } from './AuthActions';

function* authLoginSaga(action) {
  try {
    axios.defaults.auth = action.payload.auth;
    yield axios.get('/');
    yield put(authLoginSucceeded({ ...action.payload.auth }));
    action.payload.history.push('/dashboard');
  } catch (e) {
    yield put({ type: AuthActionTypes.AUTH_LOGIN_FAILED });
  }
}

function* authLogoutSaga(action) {
  axios.defaults.auth = {};
  action.payload.history.push('/');
  yield put({ type: AuthActionTypes.AUTH_LOGOUT_SUCCEEDED });
}

export default function* authSaga() {
  yield takeLatest(AuthActionTypes.AUTH_LOGIN_SUBMITTED, authLoginSaga);
  yield takeLatest(AuthActionTypes.AUTH_LOGOUT_SUBMITTED, authLogoutSaga);
}
