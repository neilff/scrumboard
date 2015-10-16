import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default class NavigatorItem {
  static propTypes = {
    children: PropTypes.node,
    to: PropTypes.string.isRequired,
  }

  render() {
    const {
      children,
      to,
    } = this.props;

    return (
      <Link
        className="btn p0"
        to={ to }>
        { children }
      </Link>
    );
  }
}
