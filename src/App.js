import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCredentials, getAuthenticated } from './auth/AuthSelectors';
import { BrowserRouter, Route } from 'react-router-dom';
import { setCredentials } from './config/axios';
import AuthForm from './auth/containers/AuthForm';
import Dashboard from './dashboard/containers/Dashboard';

class App extends Component {
  componentDidMount() {
    const { authenticated, credentials } = this.props;
    if (authenticated) setCredentials({ ...credentials });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={AuthForm} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: getAuthenticated(state),
  credentials: getCredentials(state),
});

export default connect(mapStateToProps)(App);
