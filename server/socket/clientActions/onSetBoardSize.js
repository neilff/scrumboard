'use strict';

const scrub = require('../../utils').scrub;
const getRoom = require('../serverActions').getRoom;
const broadcastToRoommates = require('../serverActions').broadcastToRoommates;
const db = require('../serverActions').db;

function onSetBoardSize(client, data) {
  const size = {
    width: scrub(data.width),
    height: scrub(data.height)
  };

  getRoom(client, (room) => {
    db.setBoardSize(room, size);
  });

  broadcastToRoommates(client, {
    action: 'setBoardSize',
    data: size
  });
}

module.exports = onSetBoardSize;
