import {
  SEND_SOCKET,
  JOIN_ROOM,
  LEAVE_ROOM,
  ON_ROOM_ACCEPT,
  ON_ROOM_DENY,
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
        payload: {
          action: 'joinRoom',
          data: getState().router.params.roomId,
        },
      },
    });
  };
}

export function leaveRoom() {
  return (dispatch) => {
    return dispatch({
      [SEND_SOCKET]: {
        type: LEAVE_ROOM,
        payload: {
          action: 'leaveRoom',
        },
      },
    });
  };
}

export function onRoomAccept(roomId) {
  return (dispatch, getState) => {
    return dispatch({
      [SEND_SOCKET]: {
        type: ON_ROOM_ACCEPT,
        payload: {
          action: 'initializeMe',
          data: {
            roomId,
          },
        },
      },
    });
  };
}

export function onRoomDeny() {
  return (dispatch) => {
    return dispatch({
      [SEND_SOCKET]: {
        type: ON_ROOM_DENY,
      },
    });
  };
}

export default {
  gotoRoom,
  joinRoom,
  leaveRoom,
  onRoomAccept,
  onRoomDeny,
};
