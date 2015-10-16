import {
  SEND_SOCKET,
  ON_CONNECTED,
  ON_DISCONNECTED,
} from '../constants';

import {
  INIT_SESSION,
} from '../../shared';

import {
  onInitializeUsers,
  onUserJoin,
  onUserLeave,
  onProfileChange,
} from './users';

import {
  onInitCards,
  onMoveCard,
  onCreateCard,
  onEditCard,
  onDeleteCard,
  onAddSticker,
} from './cards';

import {
  onInitColumns,
  onUpdateColumns,
} from './columns';

import {
  onRoomAccept,
  onRoomDeny,
} from './room';

import { onSetBoardSize } from './board';
import { onChangeSettings } from './settings';

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
  const actions = {
    ['roomAccept']: onRoomAccept,
    ['roomDeny']: onRoomDeny,
    ['moveCard']: onMoveCard,
    ['initCards']: onInitCards,
    ['createCard']: onCreateCard,
    ['deleteCard']: onDeleteCard,
    ['editCard']: onEditCard,
    ['initColumns']: onInitColumns,
    ['updateColumns']: onUpdateColumns,
    ['settingsChange']: onChangeSettings,
    ['join-announce']: onUserJoin,
    ['leave-announce']: onUserLeave,
    ['initialUsers']: onInitializeUsers,
    ['profileChange']: onProfileChange,
    ['addSticker']: onAddSticker,
    ['setBoardSize']: onSetBoardSize,
  };

  return actions[action] ?
    actions[action](data) :
    console.error('Invalid action provided from server.', action, data);
}

export default {
  onConnected,
  onDisconnected,
  onMessage,
};
