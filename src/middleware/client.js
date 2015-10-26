import {
  ON_KICK_USER,
  ON_KICK_ALL_USERS,
} from '../../shared';

import history from '../config/history';

const clientMiddleware = ({dispatch}) => next => action => {
  if (action.type === ON_KICK_ALL_USERS || action.type === ON_KICK_USER) {
    history.replaceState(null, '/');
  } else {
    return next(action);
  }
};

export default clientMiddleware;
