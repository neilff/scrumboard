import React, { Component, PropTypes } from 'react';
import R from 'ramda';

class JoinRoom extends Component {
  static propTypes = {
    gotoRoom: PropTypes.func.isRequired,
  }

  constructor() {
    super();

    this.state = {
      value: '',
    };
  }

  onChange(e) {
    e.preventDefault();

    this.setState({value: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    const value = this.state.value;

    if (!value || value.length <= 0) {
      return;
    }

    this.props.gotoRoom(value);
  }

  render() {
    const value = this.state.value;

    return (
      <form onSubmit={ this.onSubmit.bind(this) }>
        <input
          type="text"
          value={ value }
          onChange={ this.onChange.bind(this) } />
        <button
          type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default JoinRoom;
