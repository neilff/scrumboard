import {
  SEND_SOCKET,
  ON_SETTINGS_CHANGE,
  SETTINGS_CHANGE,
} from '../constants';

export function onChangeSettings(data) {
  return {
    type: ON_SETTINGS_CHANGE,
    payload: data,
  };
}

export function changeSettings(data) {
  return (dispatch) => {
    return dispatch({
      [SEND_SOCKET]: {
        type: SETTINGS_CHANGE,
        payload: {
          action: 'settingsChange',
          data: data,
        },
      },
    });
  };
}

export default {
  onChangeSettings,
  changeSettings,
};
