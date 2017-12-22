const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {

  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thanks for you feedback!');
  });

  //route to create a new survey
  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    // create new survey
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    const mailer = new Mailer(survey, surveyTemplate(survey)); //create Mailer object

    try {
      await mailer.send(); //send email(s)
      await survey.save(); //save survey to database
      req.user.credits -= 1; //minus one credit (user pays for survey)
      const user = await req.user.save(); //save user to database with updated credits

      res.send(user); //serve up the updated user
    } catch (err) {
      res.status(422).send(err);
    }
  });

  //return a list of surveys
  // app.get('/api/surveys', (req, res) => {});

  // route to process a list of user clicks from the last 30 seconds
  app.post('/api/surveys/webhooks', (req, res) => {
    console.log(req.body);
    res.send({});
  });
};
