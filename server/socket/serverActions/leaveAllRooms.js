import {
  ON_USER_LEAVE,
} from '../../../shared';

const rooms = require('../../lib/rooms.js');

function leaveAllRooms (client) {
  console.log (client.id + ' just left');

  const msg = {
    action: ON_USER_LEAVE,
    data: {
      sid: client.id
    }
  };

  rooms.remove_from_all_rooms_and_announce(client, msg);
}

module.exports = leaveAllRooms;
