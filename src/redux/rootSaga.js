import { all } from 'redux-saga/effects';
import authSaga from '../auth/AuthSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
  ]);
}
