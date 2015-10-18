import 'babel-core/polyfill';
import React from 'react';

import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { Route, IndexRoute } from 'react-router';
import { ReduxRouter } from 'redux-router';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import createHashHistory from 'history/lib/createHashHistory';
import configureStore from './store/configureStore';
import SocketActions from './actions/socket';
import socket from './socket';

import App from './containers/App';
import Lobby from './containers/Lobby';
import Room from './containers/Room';
import About from './containers/About';

const rootElement = document.getElementById('root');

const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ Lobby } />
    <Route
      path="/room/:roomId"
      component={ Room } />
    <Route
      path="/about"
      component={ About } />
  </Route>
);

const history = createHashHistory();
const store = configureStore(routes, history, window.__INITIAL_STATE__);
const actions = bindActionCreators(SocketActions, store.dispatch);

socket.on('connect', actions.onConnected);
socket.on('message', actions.onMessage);
socket.on('disconnect', actions.onDisconnected);

React.render(
  <div>
    <Provider store={ store }>
      {() =>
        <ReduxRouter />
      }
    </Provider>
    <DebugPanel top right bottom>
      <DevTools
        store={ store }
        monitor={ LogMonitor }
        visibleOnLoad={ false } />
    </DebugPanel>
  </div>,
  rootElement
);
