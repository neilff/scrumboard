// Defaults
export const DEFAULT_PROFILE_IMAGE = 'http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg';

export const ON_CONNECTED = '@@rangleScrumblr/ON_CONNECTED';
export const ON_DISCONNECTED = '@@rangleScrumblr/ON_DISCONNECTED';
export const ON_MESSAGE = '@@rangleScrumblr/ON_MESSAGE';

export const BOARD_TARGET = 'BOARD_TARGET';

export const SEND_SOCKET = Symbol('Send Socket');

// Rooms
export const JOIN_ROOM = '@@rangleScrumblr/JOIN_ROOM';
export const LEAVE_ROOM = '@@rangleScrumblr/LEAVE_ROOM';
export const ON_ROOM_ACCEPT = '@@rangleScrumblr/ON_ROOM_ACCEPT';
export const ON_ROOM_DENY = '@@rangleScrumblr/ON_ROOM_DENY';

// Users
export const ON_INIT_USERS = '@@rangleScrumblr/ON_INIT_USERS';
export const ON_USER_JOIN = '@@rangleScrumblr/ON_USER_JOIN';
export const ON_USER_LEAVE = '@@rangleScrumblr/ON_USER_LEAVE';
export const ON_PROFILE_CHANGE = '@@rangleScrumblr/ON_PROFILE_CHANGE';

// Columns
export const ON_INIT_COLUMNS = '@@rangleScrumblr/ON_INIT_COLUMNS';
export const ON_UPDATE_COLUMNS = '@@rangleScrumblr/ON_UPDATE_COLUMNS';

// Cards
export const ON_INIT_CARDS = '@@rangleScrumblr/ON_INIT_CARDS';
export const ON_CREATE_CARD = '@@rangleScrumblr/ON_CREATE_CARD';
export const ON_MOVE_CARD = '@@rangleScrumblr/ON_MOVE_CARD';
export const ON_EDIT_CARD = '@@rangleScrumblr/ON_EDIT_CARD';
export const ON_DELETE_CARD = '@@rangleScrumblr/ON_DELETE_CARD';
export const ON_ADD_STICKER = '@@rangleScrumblr/ON_ADD_STICKER';

export const MOVE_CARD = '@@rangleScrumblr/MOVE_CARD';
export const CREATE_CARD = '@@rangleScrumblr/CREATE_CARD';
export const DELETE_CARD = '@@rangleScrumblr/DELETE_CARD';
export const REVEAL_EDIT_CARD = '@@rangleScrumblr/REVEAL_EDIT_CARD';
export const SAVE_CARD = '@@rangleScrumblr/SAVE_CARD';

// Settings
export const ON_SETTINGS_CHANGE = '@@rangleScrumblr/ON_SETTINGS_CHANGE';
export const SETTINGS_CHANGE = '@@rangleScrumblr/SETTINGS_CHANGE';

// Board
export const ON_SET_BOARD_SIZE = '@@rangleScrumblr/ON_SET_BOARD_SIZE';

// UI
export const SHOW_MANAGE_PROFILE = '@@rangleScrumblr/SHOW_MANAGE_PROFILE';
export const HIDE_MANAGE_PROFILE = '@@rangleScrumblr/HIDE_MANAGE_PROFILE';
export const SHOW_ROOM_SETTINGS = '@@rangleScrumblr/SHOW_ROOM_SETTINGS';
export const HIDE_ROOM_SETTINGS = '@@rangleScrumblr/HIDE_ROOM_SETTINGS';
