import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

@Radium
class CreateCard extends Component {
  static propTypes = {
    createCard: PropTypes.func.isRequired,
  }

  constructor() {
    super();

    this.state = {
      value: '',
    };
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.createCard(this.state.value);

    this.setState({
      value: '',
    });
  }

  onChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <form
        className="flex flex-center m0"
        onSubmit={ this.onSubmit.bind(this) } >
        <button
          className="flex-end btn btn-primary h6 black bg-white"
          onClick={ this.onSubmit.bind(this) }>Add Card</button>
        <input
          style={ styles.input }
          className="flex-auto mr2 ml2 field"
          type="text"
          onChange={ this.onChange.bind(this) }
          value={ this.state.value }
          placeholder="Type your message here" />
      </form>
    );
  }
}

const styles = {
  input: {
    fontWeight: '100',
  },
};

export default CreateCard;
