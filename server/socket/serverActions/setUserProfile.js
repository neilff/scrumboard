function loadSids(idsToUsernames) {
  return function setUserProfile(client, profile) {
    client.displayName = profile.displayName;
    client.photos = profile.photos;

    idsToUsernames[client.id] = profile.displayName;
  }
}

module.exports = loadSids;
