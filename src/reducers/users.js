import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import {
  ON_INIT_USERS,
  ON_USER_JOIN,
  ON_USER_LEAVE,
  ON_PROFILE_CHANGE,
} from '../constants';

const INITIAL_STATE = fromJS({});

const initializeUsers = (state, payload) => {
  const userMap = payload.users.reduce((acc, i) => {
    acc[i.sid] = i;

    return acc;
  }, {});

  return state.merge(fromJS(userMap));
};

const userAdd = (state, payload) => state.setIn([payload.user.sid], fromJS(payload.user));
const userRemove = (state, payload) => state.filterNot(i => i.get('sid') === payload.user.sid);
const userUpdate = (state, payload) => state.mergeIn([payload.user.sid], fromJS(payload.user));

const usersReducer = handleActions({
  [ON_INIT_USERS]: (state, { payload }) => initializeUsers(state, payload),
  [ON_USER_JOIN]: (state, { payload }) => userAdd(state, payload),
  [ON_USER_LEAVE]: (state, { payload }) => userRemove(state, payload),
  [ON_PROFILE_CHANGE]: (state, { payload }) => userUpdate(state, payload),
}, INITIAL_STATE);

export default usersReducer;
