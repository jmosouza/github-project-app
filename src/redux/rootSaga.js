import { all } from 'redux-saga/effects';
import authSaga from '../auth/AuthSaga';
import dashboardSaga from '../dashboard/DashboardSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    dashboardSaga(),
  ]);
}
