'use strict';

const scrub = require('../../utils').scrub;
const setUserProfile = require('../serverActions').setUserProfile;
const broadcastToRoommates = require('../serverActions').broadcastToRoommates;

function onSetProfile(client, data) {
  const username = data && data.username ?
    scrub(data.username) :
    client.id.substring(0, 6);

  const profileImage = data && data.profileImage ?
    scrub(data.profileImage) :
    'http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg';

  const updateProfile = {
    username,
    profileImage
  };

  setUserProfile(client, updateProfile);

  const msg = {
    action: 'profileChange',
    data: {
      sid: client.id,
      ...updateProfile
    }
  };

  client.json.send({
    action: 'updateProfile',
    data: updateProfile
  });

  broadcastToRoommates(client, msg);
}

module.exports = onSetProfile;
