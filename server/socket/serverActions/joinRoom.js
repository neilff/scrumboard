import {
  ON_USER_JOIN,
} from '../../../shared';

const rooms = require('../../lib/rooms.js');

function joinRoom (client, roomId, cb) {
  const msg = {
    action: ON_USER_JOIN,
    data: {
      sid: client.id,
      displayName: client.displayName,
      photos: client.photos
    }
  };

  rooms.add_to_room_and_announce(client, roomId, msg);

  cb();
}

module.exports = joinRoom;
