import {
  SEND_SOCKET,
} from '../constants';

import {
  ON_CONNECTED,
  ON_DISCONNECTED,
} from '../../shared';

export function onConnected() {
  return {
    type: ON_CONNECTED,
  };
}

export function onDisconnected() {
  return {
    type: ON_DISCONNECTED,
  };
}

export function onMessage({action, data}) {
  return {
    type: action,
    payload: data,
  };
}

export default {
  onConnected,
  onDisconnected,
  onMessage,
};
