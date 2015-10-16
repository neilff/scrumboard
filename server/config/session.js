import expressSession from 'express-session';
import connectRedis from 'connect-redis';

const RedisStore = connectRedis(expressSession);

export const sessionStore = new RedisStore();

export const sessionOpts = {
  key: 'connect.sid',
  store: sessionStore,
  secret: 'asdasdsdas1312312',
  resave: true,
  saveUninitialized: true
};

export const session = expressSession(sessionOpts);
