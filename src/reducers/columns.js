import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import { ON_INIT_COLUMNS } from '../../shared';

const INITIAL_STATE = fromJS([]);

const columnsReducer = handleActions({
  [ON_INIT_COLUMNS]: (state) => state,
}, INITIAL_STATE);

export default columnsReducer;
