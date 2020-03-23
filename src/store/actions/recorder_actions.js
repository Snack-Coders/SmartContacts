import {RECORDER_START, RECORDER_STOP} from 'actions/action_types';

export const recorderStart = () => {
  return {
    type: RECORDER_START,
  };
};

export const recorderStop = () => {
  return {
    type: RECORDER_STOP,
  };
};
