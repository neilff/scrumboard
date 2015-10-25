import {
  SEND_SOCKET,
} from '../constants';

import {
  SET_CONFIG,
  CLEAR_ROOM,
} from '../../shared';


export function changeSettings(data) {
  return (dispatch) => {
    return dispatch({
      [SEND_SOCKET]: {
        type: SET_CONFIG,
        payload: data,
      },
    });
  };
}

export function clearRoom() {
  return (dispatch) => {
    return dispatch({
      [SEND_SOCKET]: {
        type: CLEAR_ROOM,
      },
    });
  };
}

export default {
  changeSettings,
  clearRoom,
};
