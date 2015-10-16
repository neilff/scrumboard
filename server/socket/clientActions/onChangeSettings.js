'use strict';

const R = require('ramda');
const scrub = require('../../utils').scrub;
const getRoom = require('../serverActions').getRoom;
const broadcastToRoommates = require('../serverActions').broadcastToRoommates;
const db = require('../serverActions').db;

function onChangeTheme(client, data) {
  const cleanMessage = {
    action: 'settingsChange',
    data: R.mapObj(i => scrub(i), data)
  };

  getRoom(client, (room) => {
    db.setSettings(room, cleanMessage.data);
  });

  broadcastToRoommates(client, cleanMessage);
}

module.exports = onChangeTheme;
