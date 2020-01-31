const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_SECRET_KEY } = require("../services/jwt");

module.exports = function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, ACCESS_TOKEN_SECRET_KEY, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(401).json(`AccessToken${err.name}`);
    }
    req.user = user;

    next();
  });
};
