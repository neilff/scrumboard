import {
  SEND_SOCKET,
} from '../constants';

import {
  SET_CONFIG,
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

export default {
  changeSettings,
};
