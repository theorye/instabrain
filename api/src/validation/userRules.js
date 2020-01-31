const { body } = require("express-validator");

const userValidationRules = () => {
  return [body("password").isLength({ min: 5 })];
};

module.exports = userValidationRules;
