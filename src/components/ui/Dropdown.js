import React, { PropTypes } from 'react';
import Radium from 'radium';

@Radium
export default class Dropdown {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
    children: PropTypes.node,
  }

  render() {
    const {
      children,
      isVisible,
    } = this.props;

    const dropdownStyle = isVisible ?
      styles.dropdownVisible :
      styles.dropdownHidden;

    return (
      <div
        onClick={ (e) => e.stopPropagation() }
        className="absolute border left-align p1 bg-white"
        style={{ ...styles.base, ...dropdownStyle }}>
        { children }
      </div>
    );
  }
}

const styles = {
  base: {
    top: '25px',
    left: '-24px',
    minWidth: '180px',
    zIndex: 999,
  },
  dropdownHidden: {
    visibility: 'hidden',
    opacity: '0',
  },
  dropdownVisible: {
    visibility: 'visible',
    opacity: '1',
  },
};
