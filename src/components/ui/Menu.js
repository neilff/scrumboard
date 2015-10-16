import React, { PropTypes } from 'react';
import Radium from 'radium';

@Radium
export default class Menu {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const { children } = this.props;

    return (
      <div
        style={ styles.base }
        className="absolute p2 z4 top-0 left-0 bottom-0 bg-aqua white">
        { children }
      </div>
    );
  }
}

const styles = {
  base: {
    backgroundColor: 'rgb(176, 190, 197)',
    bottom: '68px',
    top: '64px',
    width: '240px',
    transition: 'left 150ms',
    left: '-240px',
  },
};
