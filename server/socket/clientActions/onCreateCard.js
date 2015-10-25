import {
  ON_CREATE_CARD,
} from '../../../shared';

const scrub = require('../../utils').scrub;
const uuid = require('node-uuid');
const getRoom = require('../serverActions').getRoom;
const createCard = require('../serverActions').createCard;
const broadcastToRoom = require('../serverActions').broadcastToRoom;

function onCreateCard(client, data) {
  const id = uuid.v4();
  const text = data.text;

  const cardParams = {
    owner: client.id,
    text: text ? scrub(text) : '',
    x: 0,
    y: 0,
    rot: 0,
    votes: {}
  };

  getRoom(client, (room) => {
    createCard(
      room,
      id,
      cardParams,
    );

    broadcastToRoom(room, {
      action: ON_CREATE_CARD,
      data: {
        id,
        ...cardParams,
      },
    });
  });
}

module.exports = onCreateCard;
