import React, { Component, PropTypes } from 'react';
import Modal from '../ui/Modal';

class ConnectionModal extends Component {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
  }

  render() {
    const {
      isVisible,
    } = this.props;

    return (
      <Modal
        size="sm"
        isVisible={ isVisible }>
        <h3 className="center muted">Unable to connect to server... attempting to reconnect</h3>
      </Modal>
    );
  }
}

export default ConnectionModal;
