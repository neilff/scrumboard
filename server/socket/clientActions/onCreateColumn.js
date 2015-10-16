'use strict';

const scrub = require('../../utils').scrub;
const getRoom = require('../serverActions').getRoom;
const broadcastToRoommates = require('../serverActions').broadcastToRoommates;
const db = require('../serverActions').db;

function onCreateColumn(client, data) {
  const cleanMessage = {
    data: scrub(data)
  };

  getRoom(client, (room) => {
    db.createColumn(room, cleanMessage.data, () => {});
  });

  broadcastToRoommates(client, cleanMessage);
}

module.exports = onCreateColumn;
