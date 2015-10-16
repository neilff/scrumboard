import passport from 'passport';
import { OAuth2Strategy } from 'passport-google-oauth';
import { OAuth2Config } from './oauth2';

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

passport.use(new OAuth2Strategy(OAuth2Config,
  (accessToken, refreshToken, profile, done) => {
    process.nextTick(function () {
      return done(null, profile);
    });
  }
));

export default passport;
