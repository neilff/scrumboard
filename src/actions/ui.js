import {
  SHOW_MANAGE_PROFILE,
  HIDE_MANAGE_PROFILE,
  SHOW_ROOM_SETTINGS,
  HIDE_ROOM_SETTINGS,
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

export default {
  toggleProfileModal,
  toggleRoomSettings,
};
