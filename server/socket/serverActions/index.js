import { INIT_SESSION } from '../../../shared';

const rooms = require('../../lib/rooms.js');
const data  = require('../../lib/data.js').db;

const db = new data(() => console.log('DB is online.'));

//Map of sids to displayNames
let sidsToUsernames = [];

const joinRoom = require('./joinRoom');
const broadcastToRoommates = require('./broadcastToRoommates');
const broadcastToRoom = require('./broadcastToRoom');
const getRoom = require('./getRoom');
const createCard = require('./createCard')(db);
const setUserProfile = require('./setUserProfile')(sidsToUsernames);
const leaveRoom = require('./leaveRoom')
const leaveAllRooms = require('./leaveAllRooms')(sidsToUsernames);

function initClient(client, data) {
  console.log('init client data :: ', data.displayName);

  getRoom(client, (room) => {
    console.log('Client is in room :: ', room);

    db.getAllCards(room, (cards) => {
      client.json.send({
        action: 'initCards',
        data: cards
      });
    });

    db.getAllColumns (room, (columns) => {
      client.json.send({
        action: 'initColumns',
        data: columns
      });
    });

    db.getSettings(room, (settings) => {
      if (settings === null) {
        settings = {
          theme: 'default',
          pokerMode: false
        };
      }

      client.json.send({
        action: 'settingsChange',
        data: settings
      });
    });

    db.getBoardSize(room, (size) => {
      if (size !== null) {
        client.json.send({
          action: 'setBoardSize',
          data: size
        });
      }
    });

    let clientsInRoom = rooms.roomClients(room);

    let roommates = clientsInRoom.reduce((acc, i) => {
      if (i.id !== client.id) {
        acc.push({
          sid: i.id,
          displayName:  sidsToUsernames[i.id],
          photos: i.photos
        });
      }

      return acc;
    }, []);

    console.log('Current Roommates: ', roommates);

    client.json.send({
      action: 'initialUsers',
      data: roommates
    });
  });
}

module.exports = {
  initClient,
  joinRoom,
  leaveRoom,
  leaveAllRooms,
  broadcastToRoommates,
  broadcastToRoom,
  createCard,
  getRoom,
  setUserProfile,
  db,
};
