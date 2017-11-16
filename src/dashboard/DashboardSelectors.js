export const getAllProjects = state => Object.values(state.dashboard.projects.all);

export const getAllProjectsLoading = state => state.dashboard.projects.loading;
