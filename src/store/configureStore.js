import { createStore, applyMiddleware, compose } from 'redux';
import Immutable from 'immutable';
import R from 'ramda';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { devTools } from 'redux-devtools';
import { reduxReactRouter } from 'redux-router';

import socketMiddleware from '../middleware/socket';
import roomMiddleware from '../middleware/room';

import rootReducer from '../reducers';

const logger = createLogger({
  collapsed: true,
  transformer: (state) => {
    const newState = {};
    for (const i of Object.keys(state)) {
      if (Immutable.Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    }
    return newState;
  },
});

const buildImmutableState = R.map(i => Immutable.fromJS(i));

export default function configureStore(routes, history, initialState = {}) {
  console.info('Incoming Initial State :: ', window.__INITIAL_STATE__);

  const store = compose(
    reduxReactRouter({
      routes,
      history,
    }),
    applyMiddleware(
      roomMiddleware,
      socketMiddleware,
      thunkMiddleware,
      logger,
    ),
    devTools(),
  )(createStore)(rootReducer, buildImmutableState(initialState));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
