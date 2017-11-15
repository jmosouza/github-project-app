import axios from 'axios';
import { put, take } from 'redux-saga/effects';
import AuthActionTypes from './AuthActionTypes';

export default function* authSaga() {
  while (true) {
    const action = yield take(AuthActionTypes.AUTH_LOGIN_SUBMITTED);
    axios.defaults.auth = action.payload;

    try {
      yield axios.get('/');
      yield put({ type: AuthActionTypes.AUTH_LOGIN_SUCCEEDED });
    } catch (e) {
      yield put({ type: AuthActionTypes.AUTH_LOGIN_FAILED });
      continue;
    }

    yield take(AuthActionTypes.AUTH_LOGOUT_SUBMITTED);
    axios.defaults.auth = null;
    yield put({ type: AuthActionTypes.AUTH_LOGOUT_SUCCEEDED });
  }
}
