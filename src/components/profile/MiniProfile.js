import React, { Component, PropTypes } from 'react';
import ProfileImage from './ProfileImage';
import Radium from 'radium';

@Radium
class MiniProfile extends Component {
  static propTypes = {
    displayName: PropTypes.string,
    profileImage: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    isExpanded: PropTypes.bool.isRequired,
  }

  render() {
    const {
      displayName,
      profileImage,
      onClick,
      isExpanded,
    } = this.props;

    const popupClasses = isExpanded ?
      { ...styles.popupContainer, ...styles.isVisible } :
      { ...styles.popupContainer };

    const userProfile = displayName ?
        <div>
          <div
            style={ styles.base }
            onClick={ onClick }
            className="flex flex-center">
            <div className="mr2">{ displayName }</div>
            <ProfileImage source={ profileImage } />
          </div>
          <div
            style={ popupClasses }
            className="fixed">
            <div className="p1 left-align bg-gray white">
              <div className="h5 m1">Current Users</div>
              <div className="m1">
                <a style={ styles.link } href="/logout">Logout</a>
              </div>
            </div>
          </div>
        </div>
      : null;

    return (
      <div style={ styles.block }>
        { userProfile }
      </div>
    );
  }
}

const styles = {
  block: {
    minHeight: '32px',
  },
  base: {
    cursor: 'pointer',
  },
  link: {
    color: 'white',
  },
  popupContainer: {
    minWidth: '250px',
    opacity: '0',
    right: '0',
    top: '64px',
    transition: 'opacity 120ms, visibility 120ms',
    visibility: 'hidden',
  },
  isVisible: {
    visibility: 'visible',
    opacity: '1',
  },
};

export default MiniProfile;
