import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthForm from './auth/containers/AuthForm';
import Dashboard from './dashboard/containers/Dashboard';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={AuthForm} />
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  </BrowserRouter>
);

export default App;
