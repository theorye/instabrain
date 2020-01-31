const jwt = require("jsonwebtoken");

const ACCESS_TOKEN_SECRET_KEY = "SECRET";
const REFRESH_TOKEN_SECRET_KEY = "SUPER_SECRET";

function generateAccessToken({ username, id }) {
  return jwt.sign({ username, id }, ACCESS_TOKEN_SECRET_KEY, {
    expiresIn: "20s"
  });
}

function generateRefreshToken({ username, id }) {
  return jwt.sign({ username, id }, REFRESH_TOKEN_SECRET_KEY);
}

function generateTokens(user) {
  return {
    accessToken: generateAccessToken(user),
    refreshToken: generateRefreshToken(user)
  };
}

module.exports = {
  generateAccessToken,
  generateTokens,
  REFRESH_TOKEN_SECRET_KEY,
  ACCESS_TOKEN_SECRET_KEY
};
