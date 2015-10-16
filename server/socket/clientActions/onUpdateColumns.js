'use strict';

const scrub = require('../../utils').scrub;
const getRoom = require('../serverActions').getRoom;
const broadcastToRoommates = require('../serverActions').broadcastToRoommates;
const db = require('../serverActions').db;

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
    db.setColumns(room, cleanColumns);
  });

  broadcastToRoommates(client, {
    action: 'updateColumns',
    data: cleanColumns
  });
}

module.exports = onUpdateColumns;
