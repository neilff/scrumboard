import React, { PropTypes } from 'react';

export default class Page {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const {
      children,
    } = this.props;

    return (
      <div className="p4">
        { children }
      </div>
    );
  }
}
