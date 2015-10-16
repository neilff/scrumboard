import React, { PropTypes } from 'react';
import Radium from 'radium';

@Radium
export default class Modal {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.string.isRequired,
  }

  onClickBody(e) {
    e.stopPropagation();
  }

  render() {
    const {
      isVisible,
      children,
      onClick,
      size,
    } = this.props;

    const visibleStyle = isVisible ?
      styles.modalVisible :
      styles.modalHidden;

    return (
      <div
        onClick={ onClick }
        style={{ ...styles.base, ...visibleStyle }}
        className="fixed top-0 left-0 bottom-0 right-0">
        <div
          onClick={ this.onClickBody.bind(this) }
          style={{ ...styles[size] }}
          className="fixed p2 rounded bg-white">
          { children }
        </div>
      </div>
    );
  }
}

const styles = {
  base: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '999',
    transition: 'all 125ms',
  },
  sm: {
    top: '5%',
    left: '35%',
    right: '35%',
  },
  md: {
    top: '5%',
    left: '25%',
    right: '25%',
  },
  lg: {
    top: '5%',
    left: '15%',
    right: '15%',
  },
  modalVisible: {
    opacity: 1,
    visibility: 'visible',
  },
  modalHidden: {
    opacity: 0,
    visibility: 'hidden',
  },
};
