// -- Server Actions --

// Connection
export const ON_CONNECTED = '@@rangleScrumblr/ON_CONNECTED';
export const ON_DISCONNECTED = '@@rangleScrumblr/ON_DISCONNECTED';

// Cards
export const ON_MOVE_CARD = '@@rangleScrumblr/ON_MOVE_CARD';
export const ON_INIT_CARDS = '@@rangleScrumblr/ON_INIT_CARDS';
export const ON_CREATE_CARD = '@@rangleScrumblr/ON_CREATE_CARD';
export const ON_EDIT_CARD = '@@rangleScrumblr/ON_EDIT_CARD';
export const ON_DELETE_CARD = '@@rangleScrumblr/ON_DELETE_CARD';
export const ON_UPDATE_VOTES = '@@rangleScrumblr/ON_UPDATE_VOTES';

// Columns
export const ON_INIT_COLUMNS = '@@rangleScrumblr/ON_INIT_COLUMNS';
export const ON_CREATE_COLUMN = '@@rangleScrumblr/ON_CREATE_COLUMN';
export const ON_DELETE_COLUMN = '@@rangleScrumblr/ON_DELETE_COLUMN';
export const ON_UPDATE_COLUMNS = '@@rangleScrumblr/ON_UPDATE_COLUMNS';

// Users
export const ON_INIT_ROOMMATES = '@@rangleScrumblr/ON_INIT_ROOMMATES';
export const ON_USER_JOIN = '@@rangleScrumblr/ON_USER_JOIN';
export const ON_USER_LEAVE = '@@rangleScrumblr/ON_USER_LEAVE';
export const ON_PROFILE_CHANGE = '@@rangleScrumblr/ON_PROFILE_CHANGE';

// Rooms
export const ON_ROOM_ACCEPT = '@@rangleScrumblr/ON_ROOM_ACCEPT';
export const ON_ROOM_DENY = '@@rangleScrumblr/ON_ROOM_DENY';

// Board
export const ON_SET_BOARD_SIZE = '@@rangleScrumblr/ON_SET_BOARD_SIZE';

// Settings
export const ON_SET_CONFIG = '@@rangleScrumblr/ON_SET_CONFIG';

// -- Client Actions --

// Rooms
export const JOIN_ROOM = '@@rangleScrumblr/JOIN_ROOM';
export const LEAVE_ROOM = '@@rangleScrumblr/LEAVE_ROOM';
export const CLEAR_ROOM = '@@rangleScrumblr/CLEAR_ROOM';
export const ON_CLEAR_ROOM = '@@rangleScrumblr/ON_CLEAR_ROOM';

// Cards
export const MOVE_CARD = '@@rangleScrumblr/MOVE_CARD';
export const CREATE_CARD = '@@rangleScrumblr/CREATE_CARD';
export const DELETE_CARD = '@@rangleScrumblr/DELETE_CARD';
export const EDIT_CARD = '@@rangleScrumblr/EDIT_CARD';
export const VOTE_UP = '@@rangleScrumblr/VOTE_UP';
export const VOTE_DOWN = '@@rangleScrumblr/VOTE_DOWN';

// Columns
export const CREATE_COLUMN = '@@rangleScrumblr/CREATE_COLUMN';
export const DELETE_COLUMN = '@@rangleScrumblr/DELETE_COLUMN';
export const UPDATE_COLUMNS = '@@rangleScrumblr/UPDATE_COLUMNS';

// Settings
export const SET_CONFIG = '@@rangleScrumblr/SET_CONFIG';
export const SET_BOARD_SIZE = '@@rangleScrumblr/SET_BOARD_SIZE';
