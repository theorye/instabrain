const bcrypt = require("bcryptjs");
const useMysqlDb = require("../services/mysql");
const { generateTokens } = require("../services/jwt");
const loginQuery = require("../queries/loginQuery");
const refreshTokenQuery = require("../queries/refreshTokenQuery");

module.exports = async function loginUser(req, res) {
  const { query } = useMysqlDb();

  try {
    const result = await query(loginQuery(req.body.username));
    if (result.length === 0) {
      return res.status(400).send("Cannot find user");
    }

    const user = result[0][0];

    if (await bcrypt.compare(req.body.password, user.hash)) {
      const tokens = generateTokens(user);

      const refreshResponse = await query(
        refreshTokenQuery(tokens.refreshToken)
      );

      if (refreshResponse.legnth === 0) {
        return res.status(400).send("Cannot make refresh token");
      }

      res.json({
        username: user.username,
        id: user.id,
        following: user.following,
        ...generateTokens(user)
      });
    } else {
      res.send("Not allowed");
    }
  } catch (e) {
    console.log(e);
    res.status(500).send();
  } finally {
    console.log("db close");
  }
};
