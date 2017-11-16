import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import { getUsername } from '../../auth/AuthSelectors';
import { getAllProjects, getAllProjectsLoading } from '../DashboardSelectors';
import * as AuthActions from '../../auth/AuthActions';
import * as DashboardActions from '../DashboardActions';

const mapStateToProps = state => ({
  authenticated: getUsername(state) != null,
  projects: getAllProjects(state),
  projectsLoading: getAllProjectsLoading(state),
});

const mapDispatchToProps = {
  handleLogout: AuthActions.authLogoutSubmitted,
  getProjects: DashboardActions.dashboardProjectsGetAllSubmitted,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
