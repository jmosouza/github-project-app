import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/store';
import { configureAxios } from './config/axios';

configureAxios();

const { persistor, store } = configureStore();

const app = (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
