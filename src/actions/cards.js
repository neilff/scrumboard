import {
  ON_INIT_CARDS,
  ON_MOVE_CARD,
  ON_CREATE_CARD,
  ON_EDIT_CARD,
  ON_DELETE_CARD,
  ON_ADD_STICKER,
  MOVE_CARD,
  CREATE_CARD,
  DELETE_CARD,
  REVEAL_EDIT_CARD,
  SEND_SOCKET,
  SAVE_CARD,
} from '../constants';

export function onInitCards(data) {
  return {
    type: ON_INIT_CARDS,
    payload: {
      cards: data,
    },
  };
}

export function onMoveCard(data) {
  return {
    type: ON_MOVE_CARD,
    payload: {
      data,
    },
  };
}

export function onCreateCard(data) {
  return {
    type: ON_CREATE_CARD,
    payload: {
      data,
    },
  };
}

export function onEditCard(data) {
  return {
    type: ON_EDIT_CARD,
    payload: {
      data,
    },
  };
}

export function onDeleteCard(data) {
  return {
    type: ON_DELETE_CARD,
    payload: {
      data,
    },
  };
}

export function onAddSticker(data) {
  return {
    type: ON_ADD_STICKER,
    payload: {
      data,
    },
  };
}

export function moveCard({id, left = 0, top = 0}) {
  return {
    [SEND_SOCKET]: {
      type: MOVE_CARD,
      payload: {
        action: 'moveCard',
        data: {
          id,
          position: {
            left: isNaN(left) ? 0 : left,
            top: isNaN(top) ? 0 : top,
          },
        },
      },
    },
  };
}

export function createCard(text) {
  return {
    [SEND_SOCKET]: {
      type: CREATE_CARD,
      payload: {
        action: 'createCard',
        data: {
          text,
        },
      },
    },
  };
}

export function deleteCard(id) {
  return {
    [SEND_SOCKET]: {
      type: DELETE_CARD,
      payload: {
        action: 'deleteCard',
        data: {
          id,
        },
      },
    },
  };
}

export function revealEditCard(id) {
  return {
    type: REVEAL_EDIT_CARD,
    payload: {
      id,
    },
  };
}

export function saveCard(id, text) {
  return {
    [SEND_SOCKET]: {
      type: SAVE_CARD,
      payload: {
        action: 'editCard',
        data: {
          id,
          text,
        },
      },
    },
  };
}

export default {
  onInitCards,
  onMoveCard,
  onCreateCard,
  onDeleteCard,
  moveCard,
  createCard,
  deleteCard,
  revealEditCard,
  saveCard,
};
