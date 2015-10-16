'use strict';

const scrub = require('../../utils').scrub;
const getRoom = require('../serverActions').getRoom;
const broadcastToRoommates = require('../serverActions').broadcastToRoommates;
const db = require('../serverActions').db;

function onAddSticker(client, data) {
  const id = scrub(data.id);
  const stickerId = scrub(data.stickerId);

  getRoom(client, (room) => {
    db.addSticker(room, id, stickerId);
  });

  broadcastToRoommates(client, {
    action: 'addSticker',
    data: {
      id: id,
      stickerId: stickerId
    }
  });
}

module.exports = onAddSticker;
