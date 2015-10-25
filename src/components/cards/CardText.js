import React, { Component, PropTypes } from 'react';

class CardText extends Component {
  static propTypes = {
    isEditing: PropTypes.bool.isRequired,
    isVisible: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    saveCard: PropTypes.func.isRequired,
    revealEditCard: PropTypes.func.isRequired,
  }

  constructor() {
    super();

    this.state = {
      value: '',
    };
  }

  onDoubleClick() {
    const {
      id,
      isVisible,
      text,
    } = this.props;

    console.log(isVisible);

    if (!isVisible) {
      return;
    }

    this.props.revealEditCard(id);

    this.setState({
      value: text,
    });

    React.findDOMNode(this.refs.cardTextInput).focus();
  }

  onChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  onBlur(e) {
    this.props.saveCard(this.props.id, e.target.value);
  }

  render() {
    const {
      isEditing,
      isVisible,
      value,
      text,
    } = this.props;

    const textStr = text && text.length > 0 ? text : 'Double Click to Edit';
    const visibleText = isVisible ? textStr : 'Poker Mode Enabled';

    const textStyles = isEditing ?
      styles.textHidden :
      styles.textVisible;

    const inputStyles = isEditing ?
      styles.inputVisible :
      styles.inputHidden;

    return(
      <div className="flex flex-center flex-auto center">
        <div
          style={ textStyles }
          onDoubleClick={ this.onDoubleClick.bind(this) }
          className="flex flex-center flex-auto center">
          { visibleText }
        </div>
        <textarea
          style={ inputStyles }
          type="text"
          ref="cardTextInput"
          className="flex-auto"
          value={ value }
          onChange={ this.onChange.bind(this) }
          onBlur={ this.onBlur.bind(this) }>
        </textarea>
      </div>
    );
  }
}

const styles = {
  base: {},
  textVisible: {
    justifyContent: 'center',
    minHeight: '70px',
  },
  textHidden: {
    display: 'none',
  },
  inputVisible: {
    opacity: '100',
    overflow: 'initial',
    fontSize: '12px',
  },
  inputHidden: {
    opacity: '0',
    width: '0',
    height: '0',
    padding: '0',
    margin: '0',
    overflow: 'hidden',
  },
};

export default CardText;
