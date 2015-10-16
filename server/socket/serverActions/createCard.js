function loadDb(db) {
  return function createCard(room, id, params) {
    const card = {
      id,
      ...params,
    };

    db.createCard(room, id, card);
  }
}

module.exports = loadDb;
