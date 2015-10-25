const onCreateCard = require('./onCreateCard');
const onJoinRoom = require('./onJoinRoom');
const onMoveCard = require('./onMoveCard');
const onEditCard = require('./onEditCard');
const onDeleteCard = require('./onDeleteCard');
const onCreateColumn = require('./onCreateColumn');
const onDeleteColumn = require('./onDeleteColumn');
const onUpdateColumns = require('./onUpdateColumns');
const onChangeSettings = require('./onChangeSettings');
const onSetBoardSize = require('./onSetBoardSize');
const onUpdateVotes = require('./onUpdateVotes');

module.exports = {
  onCreateCard,
  onJoinRoom,
  onMoveCard,
  onEditCard,
  onDeleteCard,
  onCreateColumn,
  onDeleteColumn,
  onUpdateColumns,
  onChangeSettings,
  onSetBoardSize,
  onUpdateVotes,
};
