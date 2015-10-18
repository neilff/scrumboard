import React, { Component, PropTypes } from 'react';
import { BOARD_TARGET } from '../../constants';
import { DragSource } from 'react-dnd';

import Dropdown from '../ui/Dropdown';

const boxSource = {
  beginDrag(props) {
    const { id, left, top } = props;

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
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.any.isRequired,
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    hideSourceOnDrag: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
    isVisible: PropTypes.bool.isRequired,
    isDropdownOpen: PropTypes.bool.isRequired,
    deleteCard: PropTypes.func.isRequired,
    revealEditCard: PropTypes.func.isRequired,
    toggleDropdown: PropTypes.func.isRequired,
    saveCard: PropTypes.func.isRequired,
  };

  constructor() {
    super();

    this.state = {
      value: '',
      isHovered: false,
    };
  }

  onBlur(e) {
    this.props.saveCard(this.props.id, e.target.value);
  }

  onDelete(e) {
    e.preventDefault();

    this.props.deleteCard(this.props.id);
  }

  onChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  onDoubleClick() {
    if (!this.props.isVisible) {
      return;
    }

    this.props.revealEditCard(this.props.id);

    this.setState({
      value: this.props.text,
    });

    React.findDOMNode(this.refs.myTextInput).focus();
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

  onToggleDropdown(e) {
    e.stopPropagation();

    this.props.toggleDropdown(this.props.id);
  }

  render() {
    const {
      hideSourceOnDrag,
      left,
      top,
      connectDragSource,
      isDragging,
      isEditing,
      isVisible,
      isDropdownOpen,
      text,
    } = this.props;

    const {
      value,
      isHovered,
    } = this.state;

    if (isDragging && hideSourceOnDrag) {
      return null;
    }

    const cardBtnStyle = isHovered && !isEditing ?
      styles.itemVisible :
      styles.itemMuted;

    const inputStyle = isEditing ?
      styles.inputVisible :
      styles.inputHidden;

    const textStyle = isEditing ?
      styles.textHidden :
      styles.textVisible;

    const textStr = text && text.length > 0 ? text : 'Double Click to Edit';
    const visibleText = isVisible ? textStr : 'Poker Mode Enabled';

    return connectDragSource(
      <div
        onMouseEnter={ this.onMouseEnter.bind(this) }
        onMouseLeave={ this.onMouseLeave.bind(this) }
        className="absolute flex center flex-center p1 border bg-white"
        style={{ ...styles.baseCard, left, top }}>
        <div className="absolute top-0 right-0">
          <button
            onClick={ this.onToggleDropdown.bind(this) }
            className="absolute btn h6 p0 top-0 right-0 gray icon ion-ios-arrow-down"
            style={{ ...cardBtnStyle, ...styles.cardBtn }}>
          </button>
          <Dropdown isVisible={ isDropdownOpen }>
            <h6>Card Actions</h6>
            <ul className="list-reset">
              <li>
                <a href onClick={ this.onDelete.bind(this) }>Remove Card</a>
              </li>
              <li>
                <a href>Pin Card</a>
              </li>
            </ul>
          </Dropdown>
        </div>
        <div
          onDoubleClick={ this.onDoubleClick.bind(this) }
          className="flex-auto center"
          style={{ ...textStyle }}>
          { visibleText }
        </div>
        <textarea
          style={{ ...inputStyle }}
          type="text"
          ref="myTextInput"
          value={ value }
          onChange={ this.onChange.bind(this) }
          onBlur={ this.onBlur.bind(this) }>
        </textarea>
      </div>
    );
  }
}

const styles = {
  baseCard: {
    cursor: 'move',
    transition: 'all 300ms',
    width: '140px',
    height: '70px',
    fontSize: '12px',
    boxShadow: '0 1px 8px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.12)',
  },
  cardBtn: {
    height: '24px',
    transition: 'opacity 125ms',
    width: '24px',
  },
  itemMuted: {
    opacity: '0.5',
  },
  itemVisible: {
    opacity: '1',
  },
  inputVisible: {
    opacity: '100',
    width: 'auto',
    overflow: 'initial',
    fontSize: '12px',
  },
  inputHidden: {
    opacity: '0',
    width: '0',
    height: '0',
    overflow: 'hidden',
  },
  textVisible: {
    display: 'block',
  },
  textHidden: {
    display: 'none',
  },
};

export default Card;
