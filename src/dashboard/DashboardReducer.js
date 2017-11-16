/* eslint-disable no-case-declarations */
import { combineReducers } from 'redux';
import AuthActionTypes from '../auth/AuthActionTypes';
import DashboardActionTypes from './DashboardActionTypes';

const dashboardProjectsAll = (all = {}, action) => {
  switch (action.type) {
    case DashboardActionTypes.DASHBOARD_PROJECTS_GET_ALL_APPEND_ONE:
      const { project } = action.payload;
      return {
        ...all,
        [project.id]: project,
      };
    case AuthActionTypes.AUTH_LOGOUT_SUCCEEDED:
      return {};
    default:
      return all;
  }
};

const dashboardProjects = combineReducers({
  all: dashboardProjectsAll,
});

export default combineReducers({
  projects: dashboardProjects,
});
