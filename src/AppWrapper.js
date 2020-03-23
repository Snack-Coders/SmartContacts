/**
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';

import App from './App';
import configStore from 'store/config_store';

const store = configStore();

const ApplicationWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ApplicationWrapper;
