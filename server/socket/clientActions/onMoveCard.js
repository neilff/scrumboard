import {
  ON_MOVE_CARD
} from '../../../shared';

import { DB } from '../index';
import { scrub } from '../../utils';
import { broadcastToRoommates } from '../serverActions';
import { getRoom } from '../serverActions';

function onMoveCard(client, data) {
  const left = parseInt(scrub(data.position.left));
  const top = parseInt(scrub(data.position.top));

  const messageOut = {
    action: ON_MOVE_CARD,
    data: {
      id: scrub(data.id),
      position: {
        left: isNaN(left) ? 0 : left,
        top: isNaN(top) ? 0 : top
      }
    }
  };

  broadcastToRoommates(client, messageOut);

  getRoom(client, (room) => {
    DB.cardSetXY(room, data.id, data.position.left, data.position.top);
  });
}

module.exports = onMoveCard;
