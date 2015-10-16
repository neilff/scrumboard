'use strict';

const scrub = require('../../utils').scrub;
const getRoom = require('../serverActions').getRoom;
const broadcastToRoommates = require('../serverActions').broadcastToRoommates;
const db = require('../serverActions').db;

function onEditCard(client, data) {
  const cleanData = {
    text: scrub(data.text),
    id: scrub(data.id)
  };

  //send update to database
  getRoom(client, (room) => {
    db.cardEdit(room, cleanData.id, cleanData.text);
  });

  const messageOut = {
    action: 'editCard',
    data: cleanData
  };

  broadcastToRoommates(client, messageOut);
}

module.exports = onEditCard;
