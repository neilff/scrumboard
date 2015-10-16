import {
  ON_INIT_COLUMNS,
  ON_UPDATE_COLUMNS,
} from '../constants';

export function onInitColumns(data) {
  return {
    type: ON_INIT_COLUMNS,
    payload: {
      columns: data,
    },
  };
}

export function onUpdateColumns(data) {
  return {
    type: ON_UPDATE_COLUMNS,
    payload: {
      columns: data,
    },
  };
}

export default {
  onInitColumns,
  onUpdateColumns,
};
