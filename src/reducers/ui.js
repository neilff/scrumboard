import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import {
  HIDE_MENUS,
  SHOW_MANAGE_PROFILE,
  HIDE_MANAGE_PROFILE,
  SHOW_ROOM_SETTINGS,
  HIDE_ROOM_SETTINGS,
  SHOW_ROOM_USERS,
  HIDE_ROOM_USERS,
} from '../constants';

const INITIAL_STATE = fromJS({
  manageProfileVisible: false,
  manageRoomSettingsVisible: false,
  currentUsersVisible: false,
});

const uiReducer = handleActions({
  [HIDE_MENUS]: (state) => state.map(() => false),
  [SHOW_MANAGE_PROFILE]: (state) => state.set('manageProfileVisible', true),
  [HIDE_MANAGE_PROFILE]: (state) => state.set('manageProfileVisible', false),
  [SHOW_ROOM_SETTINGS]: (state) => state.set('manageRoomSettingsVisible', true),
  [HIDE_ROOM_SETTINGS]: (state) => state.set('manageRoomSettingsVisible', false),
  [SHOW_ROOM_USERS]: (state) => state.set('currentUsersVisible', true),
  [HIDE_ROOM_USERS]: (state) => state.set('currentUsersVisible', false),
}, INITIAL_STATE);

export default uiReducer;
