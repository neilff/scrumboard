import { createSelector } from 'reselect';

const getSession = state => state.session;
const getUi = state => state.ui;
const getRouter = state => state.router;
const getConnectionStatus = state => state.connection;

const appSelector = createSelector(
  getSession,
  getUi,
  getRouter,
  getConnectionStatus,
  (session, ui, router, connected) => {
    return {
      currentPath: router.location.pathname,
      displayName: session.get('displayName', ''),
      hasConnection: connected,
      isLoggedIn: session.has('id'),
      manageProfileVisible: ui.get('manageProfileVisible'),
      profileImage: session.getIn(['photos', '0', 'value'], ''),
    };
  },
);

export default appSelector;
