const { body } = require("express-validator");

const loginRules = () => {
  return [body("password").isLength({ min: 5 })];
};

module.exports = loginRules;
