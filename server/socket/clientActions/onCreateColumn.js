import {
  ON_CREATE_COLUMN,
} from '../../../shared';

import { DB } from '../index';

const scrub = require('../../utils').scrub;
const getRoom = require('../serverActions').getRoom;
const broadcastToRoommates = require('../serverActions').broadcastToRoommates;

function onCreateColumn(client, data) {
  const cleanMessage = {
    action: ON_CREATE_COLUMN,
    data: scrub(data)
  };

  getRoom(client, (room) => {
    DB.createColumn(room, cleanMessage.data, () => {});
  });

  broadcastToRoommates(client, cleanMessage);
}

module.exports = onCreateColumn;
