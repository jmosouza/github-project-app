import DashboardActionTypes from './DashboardActionTypes';

export const dashboardProjectsGetAllSubmitted = () => ({
  type: DashboardActionTypes.DASHBOARD_PROJECTS_GET_ALL_SUBMITTED,
});

export const dashboardProjectsGetAllAppendOne = ({ project }) => ({
  type: DashboardActionTypes.DASHBOARD_PROJECTS_GET_ALL_APPEND_ONE,
  payload: { project },
});
