import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import {
  ON_SET_CONFIG,
} from '../../shared';

import {
  SET_CONFIG ,
} from '../constants';

const INITIAL_STATE = fromJS({
  theme: 'default',
  pokerMode: false,
});

const settingsReducer = handleActions({
  [SET_CONFIG]: (state, { payload }) => state.merge(payload.data),
  [ON_SET_CONFIG]: (state, { payload }) => state.merge(payload),
}, INITIAL_STATE);

export default settingsReducer;
