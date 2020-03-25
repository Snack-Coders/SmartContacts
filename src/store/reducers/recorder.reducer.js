import { RECORDER_START, RECORDER_STOP } from 'actions/actionTypes';

const initialState = {
  recording: false,
};

const recorderReducer = (state = initialState, action) => {
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
