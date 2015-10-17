import cookieParser from 'cookie-parser';
import { sessionOpts, sessionStore } from './session';

const passportAuthorizeConfig = {
  cookieParser: cookieParser,
  key: sessionOpts.key,
  secret: sessionOpts.secret,
  store: sessionStore,
  success: (data, accept) => {
    console.log('successful connection to socket.io', {
      id: data.user.id,
      displayName: data.user.displayName
    });

    accept();
  },
  fail: (data, message, error, accept) => {
    console.log('failed connection to socket.io:', message);
    console.log(data.sessionID);

    if (error) {
      accept(new Error(message));
    }
  }
};

export default passportAuthorizeConfig;
