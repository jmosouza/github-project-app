import { connect } from 'react-redux';
import AuthForm from '../components/AuthForm';
import * as AuthActions from '../AuthActions';

const mapStateToProps = state => ({
  loading: state.auth.login.loading,
  valid: state.auth.login.valid,
});

const mapDispatchToProps = {
  handleSubmit: AuthActions.authLoginSubmitted,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthForm);
