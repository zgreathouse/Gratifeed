//custom middleware for determining the user has at least one credit
module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403)
      .send({ error: "You do not have enough credits."});
  }

  next();
};
