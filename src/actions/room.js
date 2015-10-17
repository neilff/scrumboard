import {
  JOIN_ROOM,
  LEAVE_ROOM,
} from '../../shared';

import {
  SEND_SOCKET,
} from '../constants';

import { pushState } from 'redux-router';

export function gotoRoom(roomName) {
  if (!roomName || roomName.length <= 0) {
    return false;
  }

  return pushState(null, `/room/${ roomName }`);
}

export function joinRoom() {
  return (dispatch, getState) => {
    return dispatch({
      [SEND_SOCKET]: {
        type: JOIN_ROOM,
        payload: getState().router.params.roomId,
      },
    });
  };
}

export function leaveRoom() {
  return (dispatch) => {
    return dispatch({
      [SEND_SOCKET]: {
        type: LEAVE_ROOM,
      },
    });
  };
}

export default {
  gotoRoom,
  joinRoom,
  leaveRoom,
};
