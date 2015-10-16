import React, { Component, PropTypes } from 'react';
import { DEFAULT_PROFILE_IMAGE } from '../../constants';

class ProfileImage extends Component {
  static propTypes = {
    source: PropTypes.string,
  }

  render() {
    const { source } = this.props;
    const profileImage = source || DEFAULT_PROFILE_IMAGE;

    return (
      <img
        onLoad={ this.onLoad }
        onError={ this.onError }
        className="circle"
        src={ profileImage }
        width="32"
        height="32" />
    );
  }
}

export default ProfileImage;
