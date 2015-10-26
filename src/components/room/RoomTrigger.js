import React, { Component, PropTypes } from 'react';
import { partial } from 'ramda';

class RoomTrigger extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  render() {
    const {
      text,
      onClick,
    } = this.props;

    return (
      <div className="flex flex-center mb2">
        <div className="flex-auto h5">
          { text }
        </div>
        <div className="flex-end">
          <button
            type="button"
            onClick={ onClick }
            className="btn btn-outline black h6">
            Apply
          </button>
        </div>
      </div>
    );
  }
}

export default RoomTrigger;
