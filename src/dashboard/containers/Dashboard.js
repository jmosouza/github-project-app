import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import * as AuthActions from '../../auth/AuthActions';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  handleLogout: AuthActions.authLogoutSubmitted,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
