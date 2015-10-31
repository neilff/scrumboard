import React, { PropTypes } from 'react';
import Radium from 'radium';

@Radium
export default class Tooltip {
  static propTypes = {
    children: PropTypes.node,
    isVisible: PropTypes.bool.isRequired,
  }

  render() {
    const {
      children,
      isVisible,
    } = this.props;

    return (
      <div
        style={[ styles.base ]}
        className="bg-silver">
        { children }
      </div>
    );
  }
}

const styles = {
  base: {
    transition: 'opacity 150ms, visibility 150ms',
    padding: '0.25rem',
    position: 'absolute',
    top: '-1rem',
    left: '-1rem',
    width: '120px',
  },
  isVisible: {
    visibility: 'visible',
    opacity: '1',
  },
  isHidden: {
    visibility: 'hidden',
    opacity: '0',
  },
};
