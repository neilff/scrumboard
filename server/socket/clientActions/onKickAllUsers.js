import {
  ON_KICK_ALL_USERS,
} from '../../../shared';

import { DB } from '../index';

const scrub = require('../../utils').scrub;
const getRoom = require('../serverActions').getRoom;
const broadcastToRoommates = require('../serverActions').broadcastToRoommates;

function onKickAllUsers(client, data) {
  const cleanMessage = {
    action: ON_KICK_ALL_USERS,
  };

  getRoom(client, (room) => {
    //report to all other browsers
    broadcastToRoommates(client, cleanMessage);
  });
}

module.exports = onKickAllUsers;
