import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import {
  SHOW_MANAGE_PROFILE,
  HIDE_MANAGE_PROFILE,
  SHOW_ROOM_SETTINGS,
  HIDE_ROOM_SETTINGS,
} from '../constants';

const INITIAL_STATE = fromJS({
  manageProfileVisible: false,
  manageRoomSettingsVisible: false,
});

const uiReducer = handleActions({
  [SHOW_MANAGE_PROFILE]: (state) => state.set('manageProfileVisible', true),
  [HIDE_MANAGE_PROFILE]: (state) => state.set('manageProfileVisible', false),
  [SHOW_ROOM_SETTINGS]: (state) => state.set('manageRoomSettingsVisible', true),
  [HIDE_ROOM_SETTINGS]: (state) => state.set('manageRoomSettingsVisible', false),
}, INITIAL_STATE);

export default uiReducer;
