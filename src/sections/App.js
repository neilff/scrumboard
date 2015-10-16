import '../styles/main.scss';

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';

import LoginModal from '../components/session/LoginModal';
import NavigatorBar from '../components/navigator/NavigatorBar';
import MiniProfile from '../components/profile/MiniProfile';
import UiActions from '../actions/ui';

@connect(mapStateToProps, UiActions)
class App extends Component {

  static propTypes = {
    children: PropTypes.node,
    manageProfileVisible: PropTypes.bool.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    toggleProfileModal: PropTypes.func.isRequired,
  }

  static contextTypes = {
    history: PropTypes.object.isRequired,
  }

  render() {
    const {
      displayName,
      profileImage,
      manageProfileVisible,
      toggleProfileModal,
      isLoggedIn,
      children,
    } = this.props;

    return (
      <main>
        <LoginModal isVisible={ !isLoggedIn }></LoginModal>
        <NavigatorBar>
          <div className="flex flex-center flex-auto">
            <Link
              className="absolute top-0 bottom-0 flex flex-center white h2"
              to="/">
              Scrumboard
            </Link>
          </div>
          <div className="flex-end">
            <MiniProfile
              onClick={ toggleProfileModal }
              displayName={ displayName }
              profileImage={ profileImage }
              isExpanded={ manageProfileVisible }
              />
          </div>
        </NavigatorBar>
        { children }
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    displayName: state.session.get('displayName', ''),
    profileImage: state.session.getIn(['photos', '0', 'value'], ''),
    manageProfileVisible: state.ui.get('manageProfileVisible'),
    isLoggedIn: state.session.has('id'),
  };
}

export default App;
