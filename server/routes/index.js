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

  app.get('/auth/google',
    (req, res, next) => {
      console.log('User is going to :: ', req.query.returnLocation);
      req.session.returnLocation = req.query.returnLocation;
      next();
    },
    passport.authenticate('google', {
      scope: [
        'https://www.googleapis.com/auth/plus.login'
      ]
    }), () => {});

  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
      console.log('User wishes to return to :: ', req.session.returnLocation);
      const returnString = req.session.returnLocation ?
        `/#${ decodeURIComponent(req.session.returnLocation) }` : `/`;

      res.redirect(returnString);
    });

  app.get('/logout', function(req, res) {
      req.session.destroy(err => {
        res.redirect('/');
      });
    });
}

export default configureRoutes;
