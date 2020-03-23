/**
 * @format
 * @flow
 */

import {AppRegistry} from 'react-native';

import ApplicationWrapper from './src/AppWrapper';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ApplicationWrapper);
