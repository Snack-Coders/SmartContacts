/**
 * Smart Contacts App
 *
 * Store: Recorder actions
 *
 * @flow
 */

import type { Action } from 'types/action.type';
import { RECORDER_START, RECORDER_STOP } from 'types/action.type';

export const recorderStart: Action = () => {
  return {
    type: RECORDER_START,
  };
};

export const recorderStop: Action = () => {
  return {
    type: RECORDER_STOP,
  };
};
