import { combineReducers } from 'redux';
import auth from '../auth/AuthReducer';
import dashboard from '../dashboard/DashboardReducer';

export default combineReducers({
  auth,
  dashboard,
});
