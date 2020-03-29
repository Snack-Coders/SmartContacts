/**
 * Smart Contacts App
 *
 * Recorder Screen
 *
 * @flow
 */

import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RecorderButton from 'components/RecorderButton.component';
import type { Action } from 'types/action.type';
import { recorderStart, recorderStop } from 'actions/recorder.actions';
import { isRecordingSelector } from 'selectors/index';

const RecorderScreen = () => {
  const dispatch = useDispatch();
  const toggleRecording: Action = isRecording =>
    isRecording ? recorderStop() : recorderStart();
  const isRecording: boolean = useSelector(isRecordingSelector);
  const toggleRecordingCallback = useCallback(
    () => dispatch(toggleRecording(isRecording)),
    [dispatch, isRecording],
  );

  return (
    <RecorderButton
      isRecording={isRecording}
      onPress={toggleRecordingCallback}
    />
  );
};

export default RecorderScreen;
