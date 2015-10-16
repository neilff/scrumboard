import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import {
  ON_INIT_CARDS,
  ON_CREATE_CARD,
  ON_MOVE_CARD,
  ON_DELETE_CARD,
  ON_EDIT_CARD,
  ON_ADD_STICKER,
  MOVE_CARD,
  DELETE_CARD,
  SAVE_CARD,
  REVEAL_EDIT_CARD,
} from '../constants';

const initializeCards = (state, payload) => {
  const cardMap = payload.cards.reduce((acc, i) => {
    acc[i.id] = i;
    return acc;
  }, {});

  return state.clear().merge(fromJS(cardMap));
};

const createCard = (state, payload) => {
  return state.set(payload.data.id, fromJS(payload.data));
};

const moveCard = (state, payload) => {
  return state.mergeIn([payload.data.id], fromJS({
    x: payload.data.position.left,
    y: payload.data.position.top,
  }));
};

const saveCard = (state, payload) => {
  return state.mergeIn([payload.data.id], {
    isEditing: false,
    text: payload.data.text,
  });
};

const revealEdit = (state, id) => state.setIn([id, 'isEditing'], true);
const deleteCard = (state, payload) => state.delete(payload.data.id);

const addSticker = (state, payload) => {
  return state.updateIn([payload.data.id, 'sticker'], i => {
    return i.push(payload.data.stickerId);
  });
};

const INITIAL_STATE = fromJS({});

const cardsReducer = handleActions({
  [ON_INIT_CARDS]: (state, { payload }) => initializeCards(state, payload),
  [ON_CREATE_CARD]: (state, { payload }) => createCard(state, payload),
  [ON_MOVE_CARD]: (state, { payload }) => moveCard(state, payload),
  [ON_DELETE_CARD]: (state, { payload }) => deleteCard(state, payload),
  [ON_EDIT_CARD]: (state, { payload }) => saveCard(state, payload),
  [MOVE_CARD]: (state, { payload }) => moveCard(state, payload),
  [DELETE_CARD]: (state, { payload }) => deleteCard(state, payload),
  [SAVE_CARD]: (state, { payload }) => saveCard(state, payload),
  [REVEAL_EDIT_CARD]: (state, { payload }) => revealEdit(state, payload.id),
  [ON_ADD_STICKER]: (state, { payload }) => addSticker(state, payload),
}, INITIAL_STATE);

export default cardsReducer;
