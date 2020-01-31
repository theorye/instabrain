const jwt = require("jsonwebtoken");
const {
  generateAccessToken,
  REFRESH_TOKEN_SECRET_KEY
} = require("../services/jwt");
const useMysqlDb = require("../services/mysql");

module.exports = async function refreshToken(req, res) {
  const { query } = useMysqlDb();

  try {
    const refreshToken = req.body.token;

    if (refreshToken == null) return res.sendStatus(401);

    const result = await query(
      `SELECT r.token FROM instabrain.refresh r WHERE r.token='${refreshToken}';`
    );

    console.log(result[0]);

    if (result[0].length === 0) {
      return res.status(401).send("TokenDoesNotExist");
    }

    jwt.verify(refreshToken, REFRESH_TOKEN_SECRET_KEY, (err, user) => {
      if (err) return res.sendStatus(403);
      console.log("inside refresh token", user);
      const accessToken = generateAccessToken({
        username: user.username,
        id: user.id
      });

      // res.json(accessToken);
      res.status(201).json(accessToken);

    });
  } catch (e) {
    console.log(e);
  }
};
