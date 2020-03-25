/**
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';

import App from './App';
import configStore from 'store/store.config';

const store = configStore();

const ApplicationWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ApplicationWrapper;
