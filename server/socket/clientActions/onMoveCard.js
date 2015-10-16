'use strict';

const scrub = require('../../utils').scrub;
const broadcastToRoommates = require('../serverActions').broadcastToRoommates;
const getRoom = require('../serverActions').getRoom;
const db = require('../serverActions').db;

function onMoveCard(client, data) {
  const left = parseInt(scrub(data.position.left));
  const top = parseInt(scrub(data.position.top));

  const messageOut = {
    action: 'moveCard',
    data: {
      id: scrub(data.id),
      position: {
        left: isNaN(left) ? 0 : left,
        top: isNaN(top) ? 0 : top
      }
    }
  };

  broadcastToRoommates(client, messageOut);

  getRoom(client, (room) => {
    db.cardSetXY(room, data.id, data.position.left, data.position.top);
  });
}

module.exports = onMoveCard;
