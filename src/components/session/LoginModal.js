import React, { Component, PropTypes } from 'react';
import Modal from '../ui/Modal';

class LoginModal extends Component {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
  }

  render() {
    const {
      isVisible
    } = this.props;

    return (
      <Modal
        size="sm"
        isVisible={ isVisible }>
        <h3 className="center muted">Login to Scrumboard</h3>
        <p className="p3 center">
          <a href="/auth/google" title="Login with Google">
            <img src="https://developers.google.com/identity/images/sign-in-with-google.png" />
          </a>
        </p>
      </Modal>
    );
  }
}

export default LoginModal;
