/**
 * Smart Contacts App
 *
 * Types: action
 *
 * @flow
 */

export const RECORDER_START = 'RECORDER_START';
export const RECORDER_STOP = 'RECORDER_STOP';

export type Action = { type: RECORDER_START } | { type: RECORDER_STOP };
