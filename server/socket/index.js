import {
  MOVE_CARD,
  CREATE_CARD,
  DELETE_CARD,
  EDIT_CARD,
  JOIN_ROOM,
  LEAVE_ROOM,
  SET_CONFIG,
  SET_BOARD_SIZE,
  CREATE_COLUMN,
  DELETE_COLUMN,
  UPDATE_COLUMNS,
  VOTE_UP,
  VOTE_DOWN,
  CLEAR_ROOM,
} from '../../shared';

import sys from 'sys';
import { scrub } from '../utils';
import serverActions from './serverActions';
import clientActions from './clientActions';

import { db } from '../lib/data';
export const DB = new db(() => console.log('DB is online.'));

function configureSocket(io) {
  io.on('connection', (socket, data) => {
    const userProfile = socket.request.user;

    socket.id = userProfile.id;
    socket.displayName = userProfile.displayName;
    socket.photos = userProfile.photos;

    socket.emit('connected', { displayName: userProfile.displayName });

    console.log('Socket.io User Info ::', {
      id: userProfile.id,
      displayName: userProfile.displayName,
    });

    socket.on('message', ({action, data}) => {
      console.log(action + ' -- ' + sys.inspect(data));

      if (!action)  {
        return;
      }

      const actionMap = {
        [JOIN_ROOM]: () => clientActions.onJoinRoom(socket, data),
        [LEAVE_ROOM]: () => serverActions.leaveRoom(socket, data),
        [MOVE_CARD]: () => clientActions.onMoveCard(socket, data),
        [CREATE_CARD]: () => clientActions.onCreateCard(socket, data),
        [EDIT_CARD]: () => clientActions.onEditCard(socket, data),
        [DELETE_CARD]: () => clientActions.onDeleteCard(socket, data),
        [CREATE_COLUMN]: () => clientActions.onCreateColumn(socket, data),
        [DELETE_COLUMN]: () => clientActions.onDeleteColumn(socket, data),
        [UPDATE_COLUMNS]: () => clientActions.onUpdateColumns(socket, data),
        [SET_CONFIG]: () => clientActions.onChangeSettings(socket, data),
        [VOTE_UP]: () => clientActions.onUpdateVotes(socket, data, 'inc'),
        [VOTE_DOWN]: () => clientActions.onUpdateVotes(socket, data, 'dec'),
        [SET_BOARD_SIZE]: () => clientActions.onSetBoardSize(socket, data),
        [CLEAR_ROOM]: () => clientActions.onClearRoom(socket, data),
      };

      return actionMap[action] ?
        actionMap[action]() :
        console.log('Invalid action type provided', action);
    });

    socket.on('disconnect', () => {
      serverActions.leaveAllRooms(socket);
    });
  });
}

export default configureSocket;
