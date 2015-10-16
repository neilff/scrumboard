const rooms = require('../../lib/rooms.js');

function broadcastToRoom (client, message) {
  rooms.broadcast_room(client, message);
}

module.exports = broadcastToRoom;
