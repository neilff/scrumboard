import {
  ON_ADD_STICKER,
} from '../../../shared';

import { DB } from '../index';

const scrub = require('../../utils').scrub;
const getRoom = require('../serverActions').getRoom;
const broadcastToRoommates = require('../serverActions').broadcastToRoommates;

function onAddSticker(client, data) {
  const id = scrub(data.id);
  const stickerId = scrub(data.stickerId);

  getRoom(client, (room) => {
    DB.addSticker(room, id, stickerId);
  });

  broadcastToRoommates(client, {
    action: ON_ADD_STICKER,
    data: {
      id: id,
      stickerId: stickerId
    }
  });
}

module.exports = onAddSticker;
