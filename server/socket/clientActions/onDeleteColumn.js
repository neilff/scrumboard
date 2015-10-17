import {
  ON_DELETE_COLUMN,
} from '../../../shared';

import { DB } from '../index';

const getRoom = require('../serverActions').getRoom;
const broadcastToRoommates = require('../serverActions').broadcastToRoommates;

function onDeleteColumn(client, data) {
  getRoom( client, (room) => {
    DB.deleteColumn(room);
  });

  broadcastToRoommates(client, {
    action: ON_DELETE_COLUMN
  });
}

module.exports = onDeleteColumn;
