import {
  ON_EDIT_CARD,
} from '../../../shared';

import { DB } from '../index';

const scrub = require('../../utils').scrub;
const getRoom = require('../serverActions').getRoom;
const broadcastToRoommates = require('../serverActions').broadcastToRoommates;

function onEditCard(client, data) {
  const cleanData = {
    text: scrub(data.text),
    id: scrub(data.id)
  };

  //send update to database
  getRoom(client, (room) => {
    DB.cardEdit(room, cleanData.id, cleanData.text);
  });

  const messageOut = {
    action: ON_EDIT_CARD,
    data: cleanData
  };

  broadcastToRoommates(client, messageOut);
}

module.exports = onEditCard;
