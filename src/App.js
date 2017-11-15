import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AuthForm from './auth/containers/AuthForm';

const App = () => (
  <Provider store={store}>
    <AuthForm />
  </Provider>
);

export default App;
