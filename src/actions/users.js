import {
  ON_INIT_USERS,
  ON_USER_JOIN,
  ON_USER_LEAVE,
  ON_PROFILE_CHANGE,
} from '../constants';

export function onInitializeUsers(data) {
  return {
    type: ON_INIT_USERS,
    payload: {
      users: data,
    },
  };
}

export function onUserJoin(data) {
  return {
    type: ON_USER_JOIN,
    payload: {
      user: data,
    },
  };
}

export function onUserLeave(data) {
  return {
    type: ON_USER_LEAVE,
    payload: {
      user: data,
    },
  };
}

export function onProfileChange(data) {
  return {
    type: ON_PROFILE_CHANGE,
    payload: {
      user: data,
    },
  };
}

export default {
  onInitializeUsers,
  onUserJoin,
  onUserLeave,
  onProfileChange,
};
