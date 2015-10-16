import React, { PropTypes } from 'react';

export default class Column {
  static propTypes = {
    children: PropTypes.node,
    size: PropTypes.string,
    direction: PropTypes.string,
  }

  render() {
    const {
      children,
    } = this.props;

    const direction = this.props.direction ?
      `-${ this.props.direction }` :
      '';

    const size = this.props.size ?
      `col-${ this.props.size }` :
      '';

    const className = `col${ direction } ${ size }`;

    return (
      <div className={ className }>
        { children }
      </div>
    );
  }
}
