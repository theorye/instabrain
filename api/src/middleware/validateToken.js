const Auth = require("../services/Auth");

module.exports = async (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  let result;
  if (authorizationHeader) {
    console.log(authorizationHeader);
    const token = authorizationHeader.split(" ")[1];
    try {
      req.decoded = await Auth.verifyToken(token);
      next();
    } catch (e) {
      throw new Error(err);
    }
  } else {
    res.status(401).json("Authentication Error. Token Required");
  }
};
