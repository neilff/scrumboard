import {
  ON_SET_BOARD_SIZE
} from '../../../shared';

import { DB } from '../index';

const scrub = require('../../utils').scrub;
const getRoom = require('../serverActions').getRoom;
const broadcastToRoommates = require('../serverActions').broadcastToRoommates;

function onSetBoardSize(client, data) {
  const size = {
    width: scrub(data.width),
    height: scrub(data.height)
  };

  getRoom(client, (room) => {
    DB.setBoardSize(room, size);
  });

  broadcastToRoommates(client, {
    action: ON_SET_BOARD_SIZE,
    data: size
  });
}

module.exports = onSetBoardSize;
