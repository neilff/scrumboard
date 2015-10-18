import '../styles/main.scss';

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';

import AppSelector from '../selectors/app';

import LoginModal from '../components/session/LoginModal';
import ConnectionModal from '../components/session/ConnectionModal';
import NavigatorBar from '../components/navigator/NavigatorBar';
import MiniProfile from '../components/profile/MiniProfile';
import UiActions from '../actions/ui';

@connect(AppSelector, UiActions)
class App extends Component {

  static propTypes = {
    children: PropTypes.node,
    currentPath: PropTypes.string,
    isLoggedIn: PropTypes.bool.isRequired,
    hasConnection: PropTypes.bool.isRequired,
    manageProfileVisible: PropTypes.bool.isRequired,
    toggleProfileModal: PropTypes.func.isRequired,
  }

  static contextTypes = {
    history: PropTypes.object.isRequired,
  }

  render() {
    const {
      children,
      currentPath,
      displayName,
      isLoggedIn,
      hasConnection,
      manageProfileVisible,
      profileImage,
      toggleProfileModal,
    } = this.props;

    return (
      <main>
        <LoginModal
          currentPath={ currentPath }
          isVisible={ !isLoggedIn } />
        <ConnectionModal isVisible={ isLoggedIn && !hasConnection } />
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

export default App;
