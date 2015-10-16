import invariant from 'invariant';
import { isDefined } from '../utils';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || require('../../keys').GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || require('../../keys').GOOGLE_CLIENT_SECRET;
const GOOGLE_CALLBACK_URL = process.env.GOOGLE_CALLBACK_URL || require('../../keys').GOOGLE_CALLBACK_URL;

invariant(
  isDefined(GOOGLE_CLIENT_ID),
  'GOOGLE_CLIENT_ID is not set, add it as an environment variable.'
);

invariant(
  isDefined(GOOGLE_CLIENT_SECRET),
  'GOOGLE_CLIENT_SECRET is not set, add it as an environment variable.'
);

invariant(
  isDefined(GOOGLE_CALLBACK_URL),
  'GOOGLE_CALLBACK_URL is not set, add it as an environment variable.'
);

console.log('GOOGLE_CLIENT_ID :: ', GOOGLE_CLIENT_ID);
console.log('GOOGLE_CLIENT_SECRET :: ', GOOGLE_CLIENT_SECRET);
console.log('GOOGLE_CALLBACK_URL :: ', GOOGLE_CALLBACK_URL);

export const OAuth2Config = {
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: GOOGLE_CALLBACK_URL
};
