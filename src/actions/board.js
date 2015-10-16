import {
  ON_SET_BOARD_SIZE,
} from '../constants';

export function onSetBoardSize(data) {
  return {
    type: ON_SET_BOARD_SIZE,
    payload: {
      board: data,
    },
  };
}

export default {
  onSetBoardSize,
};
