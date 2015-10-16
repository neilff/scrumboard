import React, { PropTypes } from 'react';

export default class NavigatorLogo {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const {
      children,
    } = this.props;

    return (
      <span className="align-middle h3">
        { children }
      </span>
    );
  }
}
