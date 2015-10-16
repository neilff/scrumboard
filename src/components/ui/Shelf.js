import React, { PropTypes } from 'react';
import Radium from 'radium';

@Radium
export default class Shelf {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const {
      children,
    } = this.props;

    return (
      <div
        style={[ styles.base ]}
        className="flex flex-center flex-justify fixed z2 bottom-0 left-0 right-0 p1 bg-silver">
        { children }
      </div>
    );
  }
}

const styles = {
  base: {},
};
