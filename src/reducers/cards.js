import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import {
  ON_INIT_CARDS,
  ON_CREATE_CARD,
  ON_MOVE_CARD,
  ON_DELETE_CARD,
  ON_EDIT_CARD,
  ON_UPDATE_VOTES,
  MOVE_CARD,
  DELETE_CARD,
  EDIT_CARD,
} from '../../shared';

import {
  REVEAL_EDIT_CARD,
  TOGGLE_CARD_DROPDOWN,
  CLOSE_CARD_DROPDOWNS,
} from '../constants';

const initializeCards = (state, payload) => {
  const cardMap = payload.reduce((acc, i) => {
    acc[i.id] = i;
    return acc;
  }, {});

  return state.clear().merge(fromJS(cardMap));
};

const createCard = (state, payload) => {
  return state.set(payload.id, fromJS(payload));
};

const moveCard = (state, payload) => {
  return state.mergeIn([payload.id], fromJS({
    x: payload.position.left,
    y: payload.position.top,
  }));
};

const saveCard = (state, payload) => {
  return state.mergeIn([payload.id], {
    isEditing: false,
    text: payload.text,
  });
};

const updateVotes = (state, payload) => {
  return state.mergeIn([payload.id], {
    votes: payload.votes,
  });
};

const revealEdit = (state, id) => state.setIn([id, 'isEditing'], true);
const deleteCard = (state, payload) => state.delete(payload.id);

const toggleDropdown = (state, id, bool) => state.setIn([id, 'showDropdown'], bool);
const closeDropdowns = (state) => state.map(i => i.set('showDropdown', false));

const INITIAL_STATE = fromJS({});

const cardsReducer = handleActions({
  [ON_INIT_CARDS]: (state, { payload }) => initializeCards(state, payload),
  [ON_CREATE_CARD]: (state, { payload }) => createCard(state, payload),
  [ON_MOVE_CARD]: (state, { payload }) => moveCard(state, payload),
  [ON_DELETE_CARD]: (state, { payload }) => deleteCard(state, payload),
  [ON_EDIT_CARD]: (state, { payload }) => saveCard(state, payload),
  [ON_UPDATE_VOTES]: (state, { payload }) => updateVotes(state, payload),
  [MOVE_CARD]: (state, { payload }) => moveCard(state, payload),
  [DELETE_CARD]: (state, { payload }) => deleteCard(state, payload),
  [EDIT_CARD]: (state, { payload }) => saveCard(state, payload),
  [REVEAL_EDIT_CARD]: (state, { payload }) => revealEdit(state, payload.id),
  [TOGGLE_CARD_DROPDOWN]: (state, { payload }) => toggleDropdown(state, payload.id, payload.val),
  [CLOSE_CARD_DROPDOWNS]: (state) => closeDropdowns(state),
}, INITIAL_STATE);

export default cardsReducer;
