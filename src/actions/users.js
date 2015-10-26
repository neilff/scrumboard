import {
  KICK_USER,
  KICK_ALL_USERS,
} from '../../shared';

import {
  SEND_SOCKET,
} from '../constants';

export function kickUser(id) {
  return {
    [SEND_SOCKET]: {
      type: KICK_USER,
      payload: {
        id,
      },
    },
  };
}

export function kickAllUsers() {
  return {
    [SEND_SOCKET]: {
      type: KICK_ALL_USERS,
    },
  };
}

export default {
  kickUser,
  kickAllUsers,
};
