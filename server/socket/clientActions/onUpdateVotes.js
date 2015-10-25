import {
  ON_UPDATE_VOTES,
} from '../../../shared';

import { getRoom } from '../serverActions';

import { DB } from '../index';

const scrub = require('../../utils').scrub;
const broadcastToRoom = require('../serverActions').broadcastToRoom;

function onUpdateVotes(client, data, direction) {
  getRoom(client, (room) => {
    DB.cardUpdateVotes(room, scrub(data.id), client.id, direction, function(card) {
      card = JSON.parse(card);

      broadcastToRoom(room, {
        action: ON_UPDATE_VOTES,
        data: {
          id: card.id,
          votes: card.votes
        }
      });
    });
  });
}

module.exports = onUpdateVotes;
