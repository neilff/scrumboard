import {
  ON_INIT_CARDS,
  ON_INIT_COLUMNS,
  ON_INIT_ROOMMATES,
  ON_SET_CONFIG,
  ON_SET_BOARD_SIZE,
  ON_ROOM_ACCEPT
} from '../../../shared';

import DEFAULT_SETTINGS from '../../../shared/settings';
import { isDefined } from '../../utils';
import { roomClients } from '../../lib/rooms';
import { joinRoom } from '../serverActions';
import { DB } from '../index';

const defaultRoomSettings = DEFAULT_SETTINGS.roomSettings.reduce((acc, i) => {
  acc[i.id] = i.defaultValue;
  return acc;
}, {});

console.log('defaultRoomSettings :: ', defaultRoomSettings);

function onJoinRoom(client, room) {
  joinRoom(client, room, () => {

    // Send room acceptance notice
    client.json.send({
      action: ON_ROOM_ACCEPT,
      data: room
    });

    console.log('Initialize Room for Client :: ', {
      id: client.id,
      displayName: client.displayName,
      room: room
    });

    // Send the current cards
    DB.getAllCards(room, (cards) => {
      client.json.send({
        action: ON_INIT_CARDS,
        data: cards
      });
    });

    // Send the current columns
    DB.getAllColumns (room, (columns) => {
      client.json.send({
        action: ON_INIT_COLUMNS,
        data: columns
      });
    });

    // Send the current settings
    DB.getSettings(room, (settings) => {
      client.json.send({
        action: ON_SET_CONFIG,
        data: isDefined(settings) ?
          settings :
          defaultRoomSettings
      });
    });

    // Send the current board size
    DB.getBoardSize(room, (size) => {
      client.json.send({
        action: ON_SET_BOARD_SIZE,
        data: isDefined(size) ?
          size :
          DEFAULT_SETTINGS.boardSize
      });
    });

    let socketsInRoom = roomClients(room);

    let roommateList = socketsInRoom.reduce((acc, i) => {
      if (i.id !== client.id) {
        acc.push({
          sid: i.id,
          displayName: i.displayName,
          photos: i.photos
        });
      }

      return acc;
    }, []);

    // Send the current roommates
    client.json.send({
      action: ON_INIT_ROOMMATES,
      data: roommateList
    });
  });
}

module.exports = onJoinRoom;
