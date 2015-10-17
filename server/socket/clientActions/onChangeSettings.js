import {
  ON_SET_CONFIG,
} from '../../../shared';

import { DB } from '../index';

const R = require('ramda');
const scrub = require('../../utils').scrub;
const getRoom = require('../serverActions').getRoom;
const broadcastToRoommates = require('../serverActions').broadcastToRoommates;

function onChangeTheme(client, data) {
  const cleanMessage = {
    action: ON_SET_CONFIG,
    data: R.mapObj(i => scrub(i), data)
  };

  getRoom(client, (room) => {
    DB.setSettings(room, cleanMessage.data);
  });

  broadcastToRoommates(client, cleanMessage);
}

module.exports = onChangeTheme;
