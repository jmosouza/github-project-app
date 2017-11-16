import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native
import { combineReducers } from 'redux';
import auth from '../auth/AuthReducer';
import dashboard from '../dashboard/DashboardReducer';

const persistConfig = {
  key: 'root',
  storage,
  debug: true,
};

// Persist redux state to storage
// https://www.npmjs.com/package/redux-persist
const persistReducer = persistCombineReducers(persistConfig, {
  auth,
  dashboard,
});

export default persistReducer;
