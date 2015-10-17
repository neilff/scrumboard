import { DB } from '../index';

function createCard(room, id, params) {
  const card = {
    id,
    ...params,
  };

  DB.createCard(room, id, card);
}

module.exports = createCard;
