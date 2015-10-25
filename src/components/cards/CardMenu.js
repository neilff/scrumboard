import React, { Component, PropTypes } from 'react';
import Dropdown from '../ui/Dropdown';

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
          <h6>Card Actions</h6>
          <ul className="list-reset">
            <li>
              <a href onClick={ this.onDelete.bind(this) }>Remove Card</a>
            </li>
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
};

export default CardMenu;
