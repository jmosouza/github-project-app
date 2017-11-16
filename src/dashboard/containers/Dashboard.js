import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import { getUsername } from '../../auth/AuthSelectors';
import * as AuthActions from '../../auth/AuthActions';
import * as DashboardActions from '../DashboardActions';

const mapStateToProps = state => ({
  authenticated: getUsername(state) != null,
});

const mapDispatchToProps = {
  handleLogout: AuthActions.authLogoutSubmitted,
  projectsGetAll: DashboardActions.dashboardProjectsGetAllSubmitted,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
