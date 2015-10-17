import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

const INITIAL_STATE = fromJS({
  id: null,
  sid: null,
  displayName: null,
  photos: null,
});

const sessionReducer = handleActions({}, INITIAL_STATE);

export default sessionReducer;
