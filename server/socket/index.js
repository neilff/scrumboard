import sys from 'sys';
import { scrub } from '../utils';
import serverActions from './serverActions';
import clientActions from './clientActions';

function configureSocket(io) {
  io.on('connection', (socket, data) => {
    socket.emit('connected', { username: socket.request.user.displayName });
    console.log('Socket.io User Info ::', socket.request.user);

    socket.on('message', ({action, data}) => {
      console.log(action + ' -- ' + sys.inspect(data));

      if (!action)  {
        return;
      }

      const actionMap = {
        ['initializeMe']: () => serverActions.initClient(socket, data),
        ['joinRoom']: () => clientActions.onJoinRoom(socket, data),
        ['leaveRoom']: () => serverActions.leaveRoom(socket, data),
        ['moveCard']: () => clientActions.onMoveCard(socket, data),
        ['createCard']: () => clientActions.onCreateCard(socket, data),
        ['editCard']: () => clientActions.onEditCard(socket, data),
        ['deleteCard']: () => clientActions.onDeleteCard(socket, data),
        ['createColumn']: () => clientActions.onCreateColumn(socket, data),
        ['deleteColumn']: () => clientActions.onDeleteColumn(socket, data),
        ['updateColumns']: () => clientActions.onUpdateColumns(socket, data),
        ['settingsChange']: () => clientActions.onChangeSettings(socket, data),
        ['setProfile']: () => clientActions.onSetProfile(socket, data),
        ['addSticker']: () => clientActions.onAddSticker(socket, data),
        ['setBoardSize']: () => clientActions.onSetBoardSize(socket, data),
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
