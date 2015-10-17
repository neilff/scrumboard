const rooms = require('../../lib/rooms.js');

function loadSids(idsToUsernames) {
  return function leaveAllRooms (client) {
    console.log (client.id + ' just left');
    const msg = {
      action: 'leave-announce',
      data: {
        sid: client.id
      }
    };

    rooms.remove_from_all_rooms_and_announce(client, msg);

    delete idsToUsernames[client.id];
  }
}

module.exports = loadSids;
