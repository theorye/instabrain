const bcrypt = require("bcryptjs");
const useMysqlDb = require("../services/mysql");
const signupQuery = require("../queries/signupQuery");
const refreshTokenQuery = require("../queries/refreshTokenQuery");
const { generateTokens } = require("../services/jwt");

module.exports = async function createUser(req, res) {
  const { query } = useMysqlDb();
  try {
    const { username, email, fullname, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    const response = await query(signupQuery(username, email, fullname, hash));

    if (response.length === 0) {
      return res.status(400).send("Cannot finish signup");
    }

    const user = response[response.length - 1][0];
    const tokens = generateTokens(user);

    const refreshResponse = await query(refreshTokenQuery(tokens.refreshToken));

    if (refreshResponse.legnth === 0) {
      return res.status(400).send("Cannot make refresh token");
    }

    res.status(201).json({
      username: username,
      id: user.id,
      ...tokens
    });
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};
