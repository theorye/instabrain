const useMysqlDb = require("../services/mysql");
const getUserQuery = require("../queries/getUserQuery");

module.exports = async function getUser(req, res) {
  const { query } = useMysqlDb();

  try {
    const result = await query(getUserQuery(req.user.username));

    if (result.length === 0) {
      return res.status(400).send("User does not exist");
    }
    const user = result[0][0];
    console.log(user);

    res.status(201).json(user);
  } catch (e) {
    console.log(e);
  }
};
