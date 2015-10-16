import React, { Component, PropTypes } from 'react';
import ProfileImage from '../profile/ProfileImage';

class User extends Component {
  static propTypes = {
    displayName: PropTypes.string.isRequired,
    profileImage: PropTypes.string,
  }

  render() {
    const {
      displayName,
      profileImage,
    } = this.props;

    return (
      <div className="flex flex-center">
        <div className="flex-end m1">
          <ProfileImage source={ profileImage } />
        </div>
        <div className="px2 white">{ displayName }</div>
      </div>
    );
  }
}

export default User;
