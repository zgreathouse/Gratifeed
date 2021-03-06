const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

//class Models
require('./models/User');
require('./models/Survey');
//services
require('./services/passport');

mongoose.connect(keys.mongoURI, {
  useMongoClient: true
});

//create constant 'app' to act as a instance of express running
const app = express();

//middlewares
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 2592000000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

//routes
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  /* Express will serve up production assets
    like our main.js file, or main.css file */
  app.use(express.static('client/build'));

  /* Express will serve up the index.html file
  if it doesn't recognize the route */
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//Dynamic Port Binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);
