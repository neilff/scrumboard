import React, { Component, PropTypes } from 'react';

import Dropdown from '../ui/Dropdown';
import VoteImage from './VoteImage';

class CardMenu extends Component {
  static propTypes = {
    card: PropTypes.object.isRequired,
    deleteCard: PropTypes.func.isRequired,
    toggleDropdown: PropTypes.func.isRequired,
    isDropdownOpen: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
    isHovered: PropTypes.bool.isRequired,
  }

  onDelete(e) {
    e.preventDefault();

    this.props.deleteCard(this.props.card.get('id'));
  }


  onToggleDropdown(e) {
    e.stopPropagation();

    this.props.toggleDropdown(this.props.card.get('id'));
  }

  render() {
    const {
      card,
      toggleDropdown,
      isDropdownOpen,
      isEditing,
      isHovered,
    } = this.props;

    const cardBtnStyle = isHovered && !isEditing ?
      styles.itemVisible :
      styles.itemMuted;

    return(
      <div className="absolute top-0 right-0">
        <button
          onClick={ this.onToggleDropdown.bind(this) }
          className="absolute btn h6 p0 top-0 right-0 gray icon ion-ios-arrow-down"
          style={{ ...cardBtnStyle, ...styles.base }}>
        </button>
        <Dropdown isVisible={ isDropdownOpen }>
          <h5>Card Actions</h5>
          <ul className="list-reset h6">
            <li>
              <a href onClick={ this.onDelete.bind(this) }>Remove Card</a>
            </li>
          </ul>

          <hr className="bg-silver mb2" />

          <h5>Votes</h5>
          <ul
            style={ styles.voteList }
            className="list-reset h6">
            {
              card.get('votes').map(i => {
                return (
                  <li style={ styles.voteItem }>
                    <VoteImage
                      sid={ i.get('sid') }
                      count={ i.get('count') }
                      displayName={ i.get('displayName') }
                      profileImage={ i.get('profileImage') } />
                  </li>
                );
              })
            }
          </ul>
        </Dropdown>
      </div>
    );
  }
}

const styles = {
  base: {
    height: '24px',
    transition: 'opacity 125ms',
    width: '24px',
    fontSize: '18px',
  },
  itemMuted: {
    opacity: '0.5',
  },
  itemVisible: {
    opacity: '1',
  },
  voteList: {},
  voteItem: {
    display: 'inline-block',
    paddingRight: '0.5rem',
  },
};

export default CardMenu;
