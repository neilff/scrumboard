import { combineReducers } from 'redux';
import { routerStateReducer  } from 'redux-router';

import cards from './cards';
import columns from './columns';
import connection from './connection';
import session from './session';
import settings from './settings';
import ui from './ui';
import users from './users';

const rootReducer = combineReducers({
  cards,
  columns,
  connection,
  router: routerStateReducer,
  session,
  settings,
  ui,
  users,
});

export default rootReducer;
