import React, { Component, PropTypes } from 'react';

import ProfileImage from '../profile/ProfileImage';
import Tooltip from '../ui/Tooltip';

class VoteImage extends Component {
  static propTypes = {
    sid: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    displayName: PropTypes.string.isRequired,
    profileImage: PropTypes.string.isRequired,
  }

  render() {
    const {
      sid,
      count,
      displayName,
      profileImage,
    } = this.props;

    return(
      <div
        style={ styles.base }
        className="tooltip relative center"
        data-tooltip={ displayName }>
        <span
          style={ styles.count }
          className="absolute bg-white black bold circle border center">
          { count }
        </span>

        <ProfileImage source={ profileImage } />
      </div>
    );
  }
}

const styles = {
  base: {},
  count: {
    fontSize: '10px',
    width: '1rem',
    height: '1rem',
    bottom: '-3px',
    right: '-3px',
  },
};

export default VoteImage;
