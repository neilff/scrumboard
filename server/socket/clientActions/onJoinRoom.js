'use strict';

const joinRoom = require('../serverActions').joinRoom;

function onJoinRoom(client, roomId) {
  joinRoom(client, roomId, () => {
    client.json.send({
      action: 'roomAccept',
      data: roomId
    });
  });
}

module.exports = onJoinRoom;
