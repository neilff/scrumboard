import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { partial } from 'ramda';

import User from './User';

@Radium
class UserList extends Component {
  static propTypes = {
    usersList: PropTypes.object.isRequired,
    isVisible: PropTypes.bool.isRequired,
    toggleCurrentUsers: PropTypes.func.isRequired,
    kickUser: PropTypes.func.isRequired,
  }

  render() {
    const {
      usersList,
      isVisible,
      toggleCurrentUsers,
      kickUser,
    } = this.props;

    const elemList = usersList.map(i => {
      const sid = i.get('sid');

      return (
        <User
          key={ sid }
          sid={ sid }
          onClick={ partial(kickUser, [sid]) }
          displayName={ i.get('displayName') }
          profileImage={ i.getIn(['photos', '0', 'value']) } />
      );
    });

    const popupClasses = isVisible ?
      { ...styles.popupContainer, ...styles.isVisible } :
      { ...styles.popupContainer };

    return (
      <div
        onClick={ (e) => e.stopPropagation() }
        className="flex-auto">
        <span
          onClick={ toggleCurrentUsers }
          style={ styles.counter }
          className="inline-block center bg-white black">
          { usersList.size }
        </span>
        <div
          style={ popupClasses }
          className="fixed">
          <div className="p1 rounded left-align bg-blue white">
            <div className="h5 m1">Current Users</div>
            <div className="m0">
              { elemList }
            </div>
          </div>
          <div style={ styles.popupArrow }></div>
        </div>
      </div>
    );
  }
}

const styles = {
  counter: {
    padding: '4px',
    width: '32px',
    fontWeight: '100',
    cursor: 'pointer',
    'userSelect': 'none',
  },
  popupContainer: {
    bottom: '65px',
    minWidth: '250px',
    right: '0.5rem',
    opacity: '0',
    visibility: 'hidden',
    transition: 'opacity 120ms, visibility 120ms',
  },
  popupArrow: {
    position: 'absolute',
    right: '0.5rem',
    width: '0',
    borderTop: '8px solid #0074d9',
    borderRight: '8px solid transparent',
    borderLeft: '8px solid transparent',
  },
  isVisible: {
    visibility: 'visible',
    opacity: '1',
  },
};

export default UserList;
