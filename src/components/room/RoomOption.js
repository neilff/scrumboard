import React, { Component, PropTypes } from 'react';
import { partial } from 'ramda';

class RoomOption extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool
    ]),
    options: PropTypes.object,
    onChange: PropTypes.func.isRequired,
  }

  render() {
    const {
      id,
      type,
      text,
      value,
      options,
      onChange,
    } = this.props;

    let node = null;

    switch(type) {
      case 'checkbox':
        node = (
          <div className="flex-end">
            <input
              checked={ value }
              onChange={ (e) => onChange(e.target.checked) }
              type="checkbox" />
          </div>
        );

        break;
      case 'select':
        node = (
          <div className="flex-auto">
            <select
              value={ value }
              onChange={ (e) => onChange(e.target.value) }
              className="block col-12 field">
              {
                options.map(i => {
                  return (
                    <option value={ i.get('key') }>{ i.get('value') }</option>
                  );
                })
              }
            </select>
          </div>
        );

        break;
    }

    return (
      <div className="flex flex-center mb2">
        <div className="flex-auto h5">
          { text }
        </div>
        { node }
      </div>
    );
  }
}

export default RoomOption;
