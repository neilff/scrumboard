import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import {
  ON_INIT_ROOMMATES,
  ON_USER_JOIN,
  ON_USER_LEAVE,
} from '../../shared';

const INITIAL_STATE = fromJS({});

const initRoommates = (state, payload) => {
  const userMap = payload.reduce((acc, i) => {
    acc[i.sid] = i;

    return acc;
  }, {});

  return state.merge(fromJS(userMap));
};

const userAdd = (state, payload) => state.setIn([payload.sid], fromJS(payload));
const userRemove = (state, payload) => state.filterNot(i => i.get('sid') === payload.sid);

const usersReducer = handleActions({
  [ON_INIT_ROOMMATES]: (state, { payload }) => initRoommates(state, payload),
  [ON_USER_JOIN]: (state, { payload }) => userAdd(state, payload),
  [ON_USER_LEAVE]: (state, { payload }) => userRemove(state, payload),
}, INITIAL_STATE);

export default usersReducer;
