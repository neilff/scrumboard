import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import {
  ON_INIT_SESSION,
} from '../constants';

const INITIAL_STATE = fromJS({
  id: null,
  sid: null,
  displayName: null,
  photos: null,
});

const sessionReducer = handleActions({
  [ON_INIT_SESSION]: (state, { payload }) => state.merge(payload),
}, INITIAL_STATE);

export default sessionReducer;
