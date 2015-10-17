import socket from '../socket';
import { SEND_SOCKET } from '../constants';

const socketMiddleware = ({dispatch}) => next => action => {
  const socketAction = action[SEND_SOCKET];

  if (typeof socketAction === 'undefined' || socketAction === null) {
    return next(action);
  }

  socket.json.send({
    action: socketAction.type,
    data: socketAction.payload,
  });

  return dispatch(socketAction);
};

export default socketMiddleware;
