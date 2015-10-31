import { List, Map } from 'immutable';
import { createSelector } from 'reselect';

const getUsers = state => state.users;
const getCurrentUser = state => state.session;
const getRouter = state => state.router;
const getUI = state => state.ui;
const getSettings = state => state.settings;
const getCards = state => state.cards;
const getSession = state => state.session;
const isPokerMode = state => state.settings.get('pokerMode');

const roomSelector = createSelector(
  getUsers,
  getCurrentUser,
  getRouter,
  getUI,
  getSettings,
  getCards,
  getSession,
  isPokerMode,
  (users, currentUser, router, ui, settings, cards, session, pokerMode) => {
    const sid = session.get('id');
    const userMap = users.set(sid, Map({
      sid: sid,
      displayName: currentUser.get('displayName'),
      photos: currentUser.get('photos', null),
    }));

    return {
      usersList: users.toList().push(currentUser),
      roomName: router.params.roomId,
      roomSettingsVisible: ui.get('manageRoomSettingsVisible'),
      usersListVisible: ui.get('currentUsersVisible'),
      settings,
      cards: cards.reduce((acc, i) => {
        // If pokerMode is enabled, only allow owners to see their cards
        const isVisible = (pokerMode && sid === i.get('owner')) || !pokerMode;

        return acc.push(i.merge({
          'isVisible': isVisible,
          'voteCount': i.get('votes', Map()).reduce((acc, i) => acc + i, 0),
          'votes': i.get('votes', Map()).reduce((acc, i, idx) => {
            return acc.push(Map({
              sid: idx,
              count: i,
              displayName: userMap.getIn([idx, 'displayName'], null),
              profileImage: userMap.getIn([idx, 'photos', 0, 'value'], null),
            }));
          }, List())
        }));
      }, List()),
    };
  },
);

export default roomSelector;
