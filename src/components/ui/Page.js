import React, { PropTypes } from 'react';

export default class Page {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node,
  }

  render() {
    const {
      children,
      onClick,
    } = this.props;

    return (
      <div
        onClick={ onClick }
        className="p4">
        { children }
      </div>
    );
  }
}
