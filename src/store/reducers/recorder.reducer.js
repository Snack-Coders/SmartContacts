/**
 *  Smart Contacts App
 *
 *  Store: Recorder reducer
 *
 *  @flow
 */

import type { RecorderState, Action } from 'types/index';
import { RECORDER_START, RECORDER_STOP } from 'types/index';

const initialState = {
  recording: false,
};

const recorderReducer: RecorderState = (
  state: RecorderState = initialState,
  action: Action,
) => {
  switch (action.type) {
    case RECORDER_START:
      return {
        ...state,
        recording: true,
      };
    case RECORDER_STOP:
      return {
        ...state,
        recording: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default recorderReducer;
