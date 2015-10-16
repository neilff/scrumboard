import { combineReducers } from 'redux';
import { routerStateReducer  } from 'redux-router';

import cards from './cards';
import columns from './columns';
import users from './users';
import settings from './settings';
import session from './session';
import ui from './ui';

const rootReducer = combineReducers({
  router: routerStateReducer,
  cards,
  columns,
  users,
  settings,
  session,
  ui,
});

export default rootReducer;
