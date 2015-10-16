import ensureAuthenticated from '../middleware/ensureAuthenticated';
import passport from '../config/passport';

function configureRoutes(app, io) {
  app.get('/', function (req, res) {
      res.render('index', { user: JSON.stringify(req.user) });
    });

  app.get('/account',
    ensureAuthenticated,
    function(req, res) {
      res.render('account', { user: req.user });
    });

  app.get('/auth/google', passport.authenticate('google', {
      scope: [
        'https://www.googleapis.com/auth/plus.login'
      ]
    }),
    () => {});

  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    });

  app.get('/logout', function(req, res) {
      req.session.destroy(err => {
        res.redirect('/');
      });
    });
}

export default configureRoutes;
