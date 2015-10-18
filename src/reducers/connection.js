import {
  ON_CONNECTED,
  ON_DISCONNECTED,
} from '../../shared';

import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

const INITIAL_STATE = false;

const connectionReducer = handleActions({
  [ON_CONNECTED]: () => true,
  [ON_DISCONNECTED]: () => false,
}, INITIAL_STATE);

export default connectionReducer;
