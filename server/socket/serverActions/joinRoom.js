const rooms = require('../../lib/rooms.js');

function joinRoom (client, roomId, cb) {
  const msg = {
    action: 'join-announce',
    data: {
      sid: client.id,
      username: client.username,
      profileImage: client.profileImage
    }
  };

  rooms.add_to_room_and_announce(client, roomId, msg);

  cb();
}

module.exports = joinRoom;
