import {
  JOIN_ROOM,
  LEAVE_ROOM,
} from '../../shared';

import socket from '../socket';

const ROUTER_CHANGE = '@@reduxReactRouter/routerDidChange';

const roomMiddleware = ({dispatch, getState}) => next => action => {
  if (action.type !==  ROUTER_CHANGE) {
    return next(action);
  }

  const leavingRoom = getState().router ?
    getState().router.params.roomId :
    null;

  const joiningRoom = action.payload.params ?
    action.payload.params.roomId :
    null;

  if (leavingRoom) {
    socket.json.send({
      action: LEAVE_ROOM,
      data: leavingRoom,
    });

    dispatch({
      type: LEAVE_ROOM,
      payload: leavingRoom,
    });
  }

  if (joiningRoom) {
    socket.json.send({
      action: JOIN_ROOM,
      data: joiningRoom,
    });

    dispatch({
      type: JOIN_ROOM,
      payload: joiningRoom,
    });
  }

  return next(action);
};

export default roomMiddleware;
