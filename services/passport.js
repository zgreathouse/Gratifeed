const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose')
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => { done(null, user);
  });
});

//google strategy logic for google OAuth
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleID: profile.id });

      //sign in
      if (existingUser) {
        return done(null, existingUser);
      }

      //sign up
      const user = await new User({ googleID: profile.id}).save();
      done(null, user);
    }
  )
);

// (function body without async await syntax)

//     (accessToken, refreshToken, profile, done) => {
//       User.findOne({ googleID: profile.id }).then(existingUser => {
//         if(existingUser) {
//           done(null,existingUser);
//         } else {
//           new User({ googleID: profile.id })
//              .save()
//              .then(user => done(null, user));
//         }
//      });
//     }
//   )
// );
