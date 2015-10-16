const rooms = require('../../lib/rooms.js');

function leaveRoom (client, roomId) {
  console.log (client.id + ' just left ', roomId);

  const msg = {
    action: 'leave-announce',
    data: {
      sid: client.id,
      roomId: roomId
    }
  };

  rooms.on_leave_room(client, roomId, msg);
}

module.exports = leaveRoom;
