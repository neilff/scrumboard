import {
  SEND_SOCKET,
  SET_CONFIG,
} from '../constants';


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
