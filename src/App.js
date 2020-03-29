/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import RecorderScreen from 'containers/Recorder.screen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <RecorderScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
