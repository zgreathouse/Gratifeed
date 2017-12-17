//custom middleware for determining if the user is signed in
module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "You must be logged in."});
  }

  next();
};
