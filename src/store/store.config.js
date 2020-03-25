import { combineReducers, createStore } from 'redux';

import recorderReducer from 'reducers/recorder.reducer';

const rootReducer = combineReducers({
  recorder: recorderReducer,
});

const configStore = () => {
  return createStore(rootReducer);
};

export default configStore;
