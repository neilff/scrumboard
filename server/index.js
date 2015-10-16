import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import http from 'http';
import passportSocketIo from 'passport.socketio';
import path from 'path';
import socketIo from 'socket.io';

import configureRoutes from './routes';
import configureSocket from './socket';

import passport from './config/passport';
import passportAuthorizeConfig from './config/passportSocketIO';
import { session, sessionOpts, sessionStore } from './config/session';

const PORT = process.env.PORT || 5001;
const isProduction = process.env.NODE_ENV === 'production';

const app = express();

// configure Express
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(cookieParser(sessionOpts.secret));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.normalize(__dirname + '/../')));

if (!isProduction) {
  require('./utils/bundler')(app);
}

const server = http.createServer(app);

const io = socketIo.listen(server)
  .use(passportSocketIo.authorize(passportAuthorizeConfig));

configureRoutes(app, io);
configureSocket(io);

server.listen(PORT);

console.log(`Server is running :: http://localhost:${ PORT }`);
