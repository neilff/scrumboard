import {
  ON_KICK_USER,
} from '../../../shared';

import { DB } from '../index';
import { scrub } from '../../utils';
import { getRoom } from '../serverActions';
import { broadcastToClient } from '../../lib/rooms.js';

function onKickUser(client, data) {
  const cleanMessage = {
    action: ON_KICK_USER,
  };

  const clientId = data.id;

  getRoom(client, (room) => {
    broadcastToClient(room, clientId, cleanMessage);
  });
}

module.exports = onKickUser;
