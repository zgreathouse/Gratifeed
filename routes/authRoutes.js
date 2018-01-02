const passport = require('passport');

module.exports = app => {
  //route to google (OAuth) sign in/sign up
  app.get('/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  //route to url which comes directly after OAuth login
  //(required when using the google+ OAuth API)
  app.get('/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('http://localhost:3000/surveys');
    }
  );

  //get the current user
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  //logout the user
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
}
