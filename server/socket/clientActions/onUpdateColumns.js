import {
  ON_UPDATE_COLUMNS
} from '../../../shared';

import { DB } from '../index';

const scrub = require('../../utils').scrub;
const getRoom = require('../serverActions').getRoom;
const broadcastToRoommates = require('../serverActions').broadcastToRoommates;

function onUpdateColumns(client, data) {
  const columns = data;

  if (!(columns instanceof Array)) {
    return;
  }

  let cleanColumns = [];

  for (var i in columns) {
    cleanColumns[i] = scrub( columns[i] );
  }

  getRoom(client, (room) => {
    DB.setColumns(room, cleanColumns);
  });

  broadcastToRoommates(client, {
    action: ON_UPDATE_COLUMNS,
    data: cleanColumns
  });
}

module.exports = onUpdateColumns;
