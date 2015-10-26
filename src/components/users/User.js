import React, { Component, PropTypes } from 'react';
import ProfileImage from '../profile/ProfileImage';

class User extends Component {
  static propTypes = {
    sid: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    profileImage: PropTypes.string,
    onClick: PropTypes.func.isRequired,
  }

  render() {
    const {
      sid,
      displayName,
      profileImage,
      onClick,
    } = this.props;

    const kickButton = sid ?
      (
        <div className="flex-end white">
          <button
            onClick={ onClick }
            className="btn white h2 ion-ios-close-empty"></button>
        </div>
      ) : null;

    return (
      <div className="flex flex-center">
        <div className="flex-end m1">
          <ProfileImage source={ profileImage } />
        </div>
        <div className="flex-auto p2 white">{ displayName }</div>
        { kickButton }
      </div>
    );
  }
}

export default User;
