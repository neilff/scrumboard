import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import { ON_SETTINGS_CHANGE, SETTINGS_CHANGE } from '../constants';

const INITIAL_STATE = fromJS({
  theme: 'default',
  pokerMode: false,
});

const settingsReducer = handleActions({
  [SETTINGS_CHANGE]: (state, { payload }) => state.merge(payload.data),
  [ON_SETTINGS_CHANGE]: (state, { payload }) => state.merge(payload),
}, INITIAL_STATE);

export default settingsReducer;
