import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import { roomSettings } from '../../shared/settings';

import {
  ON_SET_CONFIG,
  SET_CONFIG,
} from '../../shared';

const defaultRoomSettings = roomSettings.reduce((acc, i) => {
  acc[i.id] = i.defaultValue;
  return acc;
}, {});

const INITIAL_STATE = fromJS(defaultRoomSettings);

const settingsReducer = handleActions({
  [SET_CONFIG]: (state, { payload }) => state.merge(fromJS(payload)),
  [ON_SET_CONFIG]: (state, { payload }) => state.merge(payload),
}, INITIAL_STATE);

export default settingsReducer;
