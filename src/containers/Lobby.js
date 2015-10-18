import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RoomActions from '../actions/room';

import JoinRoom from '../components/room/JoinRoom';
import Page from '../components/ui/Page';

@connect(mapStateToProps, RoomActions)
class Lobby extends Component {

  static propTypes = {
    gotoRoom: PropTypes.func.isRequired,
  }

  render() {
    const { gotoRoom } = this.props;

    return (
      <Page>
        <h1>Lobby</h1>
        <h2>Select Room</h2>
        <JoinRoom gotoRoom={ gotoRoom.bind(this) } />
      </Page>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

export default Lobby;
