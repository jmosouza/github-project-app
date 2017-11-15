import axios from 'axios';
import { put, take } from 'redux-saga/effects';
import AuthActionTypes from './AuthActionTypes';

export default function* authSaga() {
  while (true) {
    const action = yield take(AuthActionTypes.AUTH_LOGIN_SUBMITTED);
    axios.defaults.auth = action.payload.auth;

    try {
      yield axios.get('/');
      yield put({ type: AuthActionTypes.AUTH_LOGIN_SUCCEEDED });
      action.payload.history.push('/dashboard')
    } catch (e) {
      yield put({ type: AuthActionTypes.AUTH_LOGIN_FAILED });
      continue;
    }

    yield take(AuthActionTypes.AUTH_LOGOUT_SUBMITTED);
    axios.defaults.auth = null;
    action.payload.history.push('/')
    yield put({ type: AuthActionTypes.AUTH_LOGOUT_SUCCEEDED });
  }
}
