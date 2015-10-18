import React, { Component, PropTypes } from 'react';
import { BOARD_TARGET } from '../../constants';
import { connect } from 'react-redux';
import Radium from 'radium';

import {
  DropTarget,
  DragDropContext,
} from 'react-dnd';

import Card from './Card';
import HTML5Backend from 'react-dnd/modules/backends/HTML5';

const boxTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);

    component.moveBox(item.id, left, top);
  },
};

@Radium
@DragDropContext(HTML5Backend)
@DropTarget(BOARD_TARGET, boxTarget, associate => ({
  connectDropTarget: associate.dropTarget(),
}))
class Board extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    cards: PropTypes.object.isRequired,
    moveCard: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
    revealEditCard: PropTypes.func.isRequired,
    toggleDropdown: PropTypes.func.isRequired,
    saveCard: PropTypes.func.isRequired,
  };

  moveBox(id, left, top) {
    this.props.moveCard({
      id,
      left,
      top,
    });
  }

  render() {
    const {
      connectDropTarget,
      cards,
      deleteCard,
      revealEditCard,
      toggleDropdown,
      saveCard,
    } = this.props;

    const hideSourceOnDrag = false;

    const cardList = cards.map(i => {
      return (
        <Card
          isVisible={ i.get('isVisible', true) }
          isEditing={ i.get('isEditing', false) }
          isDropdownOpen={ i.get('showDropdown', false) }
          key={ i.get('id') }
          id={ i.get('id') }
          left={ i.get('x') }
          top={ i.get('y') }
          hideSourceOnDrag={ hideSourceOnDrag }
          revealEditCard={ revealEditCard }
          deleteCard={ deleteCard }
          saveCard={ saveCard }
          toggleDropdown={ toggleDropdown }
          text={ i.get('text', '') } />
      );
    });

    return connectDropTarget(
      <div
        className="border"
        style={ styles.board }>
        { cardList }
      </div>
    );
  }
}

const styles = {
  board: {
    height: 600,
    marginBottom: '40px',
    marginTop: '40px',
    position: 'relative',
    width: '100%',
  },
};

export default Board;
