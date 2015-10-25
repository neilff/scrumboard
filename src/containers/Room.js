import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import roomSelector from '../selectors/room';
import cardActions from '../actions/cards';
import uiActions from '../actions/ui';
import settingsActions from '../actions/settings';

import Board from '../components/cards/Board';
import UserList from '../components/users/UserList';
import CreateCard from '../components/cards/CreateCard';
import RoomSettings from '../components/room/RoomSettings';

import Page from '../components/ui/Page';
import Shelf from '../components/ui/Shelf';

const Actions = {
  ...cardActions,
  ...uiActions,
  ...settingsActions,
};

@connect(roomSelector, Actions)
class Room extends Component {
  static propTypes = {
    usersList: PropTypes.object.isRequired,
    createCard: PropTypes.func.isRequired,
    toggleRoomSettings: PropTypes.func.isRequired,
    toggleDropdown: PropTypes.func.isRequired,
    changeSettings: PropTypes.func.isRequired,
    roomName: PropTypes.string.isRequired,
    roomSettingsVisible: PropTypes.bool.isRequired,
    settings: PropTypes.object.isRequired,
    cards: PropTypes.object.isRequired,
    moveCard: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
    revealEditCard: PropTypes.func.isRequired,
    saveCard: PropTypes.func.isRequired,
    voteCardUp: PropTypes.func.isRequired,
    voteCardDown: PropTypes.func.isRequired,
    closeDropdowns: PropTypes.func.isRequired,
  }

  onCloseDropdowns() {
    this.props.closeDropdowns();
  }

  render() {
    const {
      usersList,
      createCard,
      toggleRoomSettings,
      toggleDropdown,
      changeSettings,
      roomName,
      roomSettingsVisible,
      settings,
      cards,
      moveCard,
      deleteCard,
      revealEditCard,
      saveCard,
      voteCardUp,
      voteCardDown,
      closeDropdowns,
    } = this.props;

    return (
      <Page
        onClick={ this.onCloseDropdowns.bind(this) }>
        <Shelf>
          <div>
            <RoomSettings
              isVisible={ roomSettingsVisible }
              name={ roomName }
              toggleRoomSettings={ toggleRoomSettings }
              settings={ settings }
              changeSettings={ changeSettings } />
          </div>
          <div className="flex-auto">
            <CreateCard createCard={ createCard } />
          </div>
          <div className="flex flex-end flex-center right-align">
            <UserList usersList={ usersList } />
          </div>
        </Shelf>
        <Board
          deleteCard={ deleteCard }
          moveCard={ moveCard }
          revealEditCard={ revealEditCard }
          saveCard={ saveCard }
          toggleDropdown={ toggleDropdown }
          voteCardUp={ voteCardUp }
          voteCardDown={ voteCardDown }
          cards={ cards } />
      </Page>
    );
  }
}

export default Room;
