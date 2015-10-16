'use strict';

const getRoom = require('../serverActions').getRoom;
const broadcastToRoommates = require('../serverActions').broadcastToRoommates;
const db = require('../serverActions').db;

function onDeleteColumn(client, data) {
  getRoom( client, (room) => {
    db.deleteColumn(room);
  });

  broadcastToRoommates(client, {
    action: 'deleteColumn'
  });
}

module.exports = onDeleteColumn;
