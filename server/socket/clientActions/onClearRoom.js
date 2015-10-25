import {
  ON_CLEAR_ROOM,
} from '../../../shared';

import { mapObj } from 'ramda';
import { DB } from '../index';
import { scrub } from '../../utils';
import { getRoom } from '../serverActions';
import { broadcastToRoom } from '../serverActions';

function onClearRoom(client, data) {
  const cleanMessage = {
    action: ON_CLEAR_ROOM,
    data: null
  };

  getRoom(client, (room) => {
    DB.clearRoom(room, () => broadcastToRoom(room, cleanMessage));
  });
}

module.exports = onClearRoom;
