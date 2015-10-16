function loadSids(sidsToUsernames) {
  return function setUserProfile(client, profile) {
    client.displayName = profile.displayName;
    client.photos = profile.photos;

    sidsToUsernames[client.id] = profile.displayName;
  }
}

module.exports = loadSids;
