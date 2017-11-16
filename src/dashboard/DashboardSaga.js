import axios from 'axios';
import { put, take } from 'redux-saga/effects';
import DashboardActionTypes from './DashboardActionTypes';
import { dashboardProjectsGetAllAppendOne } from './DashboardActions';

export default function* dashboardSaga() {
  while (true) {
    yield take(DashboardActionTypes.DASHBOARD_PROJECTS_GET_ALL_SUBMITTED);

    // Summary:
    // 1. Get all user's repos
    // 2. Get each repo's projects
    // 3. Get each project's columns
    // 4. Get each columns's cards
    // 5. Append project to state

    /* eslint-disable no-shadow, no-continue, no-restricted-syntax */
    try {
      // Get repositories
      const response = yield axios.get('/user/repos');
      const repositories = response.data;
      for (const repository of repositories) {
        if (!repository.has_projects) continue;
        const owner = repository.owner.login;
        const repo = repository.name;
        const projectsURL = `/repos/${owner}/${repo}/projects`;
        // Get projects
        const response = yield axios.get(projectsURL);
        for (const project of response.data) {
          project.columns = [];
          project.repository = repository;
          // Get columns
          const response = yield axios.get(project.columns_url);
          for (const column of response.data) {
            // Get cards
            const response = yield axios.get(column.cards_url);
            column.cards = response.data;
            project.columns.push(column);
          }
          yield put(dashboardProjectsGetAllAppendOne({ project }));
        }
      }
    } catch (e) {
      yield put({ type: DashboardActionTypes.DASHBOARD_PROJECTS_GET_ALL_FAILED });
      continue;
    }
    /* eslint-enable */

    yield put({ type: DashboardActionTypes.DASHBOARD_PROJECTS_GET_ALL_SUCCEEDED });
  }
}
