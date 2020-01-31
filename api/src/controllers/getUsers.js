const useMysqlDb = require("../services/mysql");
const getUsersQuery = require("../queries/getUsersQuery");

module.exports = async function getUsers(req, res) {
  const { query } = useMysqlDb();

  try {
    const result = await query(getUsersQuery(req.query.limit));

    res.status(201).json(result[0]);
  } catch (e) {}
};
