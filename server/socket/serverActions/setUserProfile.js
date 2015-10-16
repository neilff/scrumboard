function loadSids(sidsToUsernames) {
  return function setUserProfile(client, profile) {
    client.username = profile.username;
    client.profileImage = profile.profileImage;

    sidsToUsernames[client.id] = profile.username;
  }
}

module.exports = loadSids;
