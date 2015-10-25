import {
  SHOW_MANAGE_PROFILE,
  HIDE_MANAGE_PROFILE,
  SHOW_ROOM_SETTINGS,
  HIDE_ROOM_SETTINGS,
  SHOW_ROOM_USERS,
  HIDE_ROOM_USERS,
} from '../constants';

export function toggleProfileModal() {
  return (dispatch, getState) => {
    return dispatch({
      type: getState().ui.get('manageProfileVisible') ?
        HIDE_MANAGE_PROFILE :
        SHOW_MANAGE_PROFILE,
    });
  };
}

export function toggleRoomSettings() {
  return (dispatch, getState) => {
    return dispatch({
      type: getState().ui.get('manageRoomSettingsVisible') ?
        HIDE_ROOM_SETTINGS :
        SHOW_ROOM_SETTINGS,
    });
  };
}

export function toggleCurrentUsers() {
  return (dispatch, getState) => {
    return dispatch({
      type: getState().ui.get('currentUsersVisible') ?
        HIDE_ROOM_USERS :
        SHOW_ROOM_USERS,
    });
  };
}

export default {
  toggleProfileModal,
  toggleRoomSettings,
  toggleCurrentUsers,
};
