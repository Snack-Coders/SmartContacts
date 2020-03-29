/**
 * Smart Contacts App
 *
 * Recorder button
 *
 * @flow
 */

import React from 'react';
import { Button } from 'react-native';

const RecorderButton = ({ boolean: isRecording, function: onPress }) => (
  <Button
    title={isRecording ? 'RECORDING' : 'START RECORDING'}
    onPress={onPress}
  />
);

export default RecorderButton;
