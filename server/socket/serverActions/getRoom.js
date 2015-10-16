const rooms = require('../../lib/rooms.js');

function getRoom(client, cb) {
  const room = rooms.get_room(client);
  cb(room);
}

module.exports = getRoom;
