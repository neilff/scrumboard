import {
  ON_DELETE_CARD,
} from '../../../shared';

import { DB } from '../index';

const scrub = require('../../utils').scrub;
const getRoom = require('../serverActions').getRoom;
const broadcastToRoommates = require('../serverActions').broadcastToRoommates;

function onDeleteCard(client, data) {
  const cleanMessage = {
    action: ON_DELETE_CARD,
    data: {
      id: scrub(data.id)
    }
  };

  getRoom(client, (room) => {
    DB.deleteCard(room, cleanMessage.data.id);
  });

  //report to all other browsers
  broadcastToRoommates(client, cleanMessage);
}

module.exports = onDeleteCard;
