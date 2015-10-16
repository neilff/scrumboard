'use strict';

const scrub = require('../../utils').scrub;
const getRoom = require('../serverActions').getRoom;
const broadcastToRoommates = require('../serverActions').broadcastToRoommates;
const db = require('../serverActions').db;

function onDeleteCard(client, data) {
  const cleanMessage = {
    action: 'deleteCard',
    data: {
      id: scrub(data.id)
    }
  };

  getRoom(client, (room) => {
    db.deleteCard(room, cleanMessage.data.id);
  });

  //report to all other browsers
  broadcastToRoommates(client, cleanMessage);
}

module.exports = onDeleteCard;
