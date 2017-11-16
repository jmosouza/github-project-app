import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import * as AuthActions from '../../auth/AuthActions';
import * as DashboardActions from '../DashboardActions';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  handleLogout: AuthActions.authLogoutSubmitted,
  projectsGetAll: DashboardActions.dashboardProjectsGetAllSubmitted,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
