import React, { Component, PropTypes } from 'react';
import { BOARD_TARGET } from '../../constants';
import { DragSource } from 'react-dnd';

import Vote from '../ui/Vote';
import CardMenu from './CardMenu';
import CardText from './CardText';

const boxSource = {
  beginDrag(props) {
    const id = props.card.get('id');
    const left = props.card.get('x');
    const top = props.card.get('y');

    return {
      id,
      left,
      top,
    };
  },
};

@DragSource(BOARD_TARGET, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
class Card extends Component {
  static propTypes = {
    card: PropTypes.object.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    hideSourceOnDrag: PropTypes.bool.isRequired,
    revealEditCard: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
    saveCard: PropTypes.func.isRequired,
    toggleDropdown: PropTypes.func.isRequired,
    voteCardUp: PropTypes.func.isRequired,
    voteCardDown: PropTypes.func.isRequired,
  };

  constructor() {
    super();

    this.state = {
      isHovered: false,
    };
  }

  onMouseEnter() {
    this.setState({
      isHovered: true,
    });
  }

  onMouseLeave() {
    this.setState({
      isHovered: false,
    });
  }

  render() {
    const {
      card,
      connectDragSource,
      isDragging,
      hideSourceOnDrag,
      revealEditCard,
      deleteCard,
      saveCard,
      toggleDropdown,
      voteCardUp,
      voteCardDown,
    } = this.props;

    const isEditing = card.get('isEditing', false);
    const isVisible = card.get('isVisible', false);
    const text = card.get('text');
    const left = card.get('x');
    const top = card.get('y');

    const {
      isHovered,
    } = this.state;

    if (isDragging && hideSourceOnDrag) {
      return null;
    }

    const cardHoverStyle = isHovered ?
      styles.cardHovered :
      styles.cardDefault;

    const voterStyle = isHovered && !isEditing ?
      styles.itemVisible :
      styles.itemMuted;

    return connectDragSource(
      <div
        onMouseEnter={ this.onMouseEnter.bind(this) }
        onMouseLeave={ this.onMouseLeave.bind(this) }
        className="absolute flex center flex-center p0 bg-white"
        style={{
          ...cardHoverStyle,
          ...styles.baseCard,
          left,
          top,
        }}>
        <Vote
          cardId={ card.get('id') }
          count={ card.get('votes') }
          voteUp={ voteCardUp }
          voteDown={ voteCardDown }
          style={{ ...voterStyle, ...styles.voter }} />
        <CardMenu
          card={ card }
          deleteCard={ deleteCard }
          toggleDropdown={ toggleDropdown }
          isDropdownOpen={ card.get('showDropdown', false) }
          isEditing={ isEditing }
          isHovered={ isHovered } />
        <CardText
          id={ card.get('id') }
          text={ card.get('text') }
          isEditing={ isEditing }
          isVisible={ isVisible }
          revealEditCard={ revealEditCard }
          saveCard={ saveCard } />
      </div>
    );
  }
}

const styles = {
  baseCard: {
    cursor: 'move',
    transition: 'all 300ms',
    width: '190px',
    height: '120px',
    fontSize: '16px',
  },
  cardHovered: {
    boxShadow: '0 1px 8px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.12)',
    border: '1px solid rgba(0, 0, 0, 0.25)'
  },
  cardDefault: {
    border: '1px solid rgba(0, 0, 0, 0.15)'
  },
  itemMuted: {
    opacity: '0.5',
  },
  itemVisible: {
    opacity: '1',
  },
  voter: {
    transition: 'opacity 125ms',
    width: '25px',
    justifyContent: 'center',
  },
};

export default Card;
