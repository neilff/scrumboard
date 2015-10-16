const rooms = require('../../lib/rooms.js');

function broadcastToRoommates (client, message) {
  rooms.broadcast_to_roommates(client, message);
}

module.exports = broadcastToRoommates;
