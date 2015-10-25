import {
  ON_SET_CONFIG,
} from '../../../shared';

import { mapObj } from 'ramda';
import { DB } from '../index';
import { scrub } from '../../utils';
import { getRoom } from '../serverActions';
import { broadcastToRoom } from '../serverActions';

function onChangeSettings(client, data) {
  console.log('onChangeSettings :: ', data);

  const cleanMessage = {
    action: ON_SET_CONFIG,
    data: mapObj(i => scrub(i), data)
  };

  getRoom(client, (room) => {
    DB.setSettings(room, cleanMessage.data);

    broadcastToRoom(room, cleanMessage);
  });
}

module.exports = onChangeSettings;
