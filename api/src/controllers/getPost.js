const getPostQuery = require("../queries/getPostQuery");
const useMysqlDb = require("../services/mysql");

module.exports = async function getUser(req, res) {
  const { query } = useMysqlDb();

  try {
    const result = await query(getPostQuery(req.query.id));
    res.status(201).json(result[0]);
  } catch (e) {
    console.log(e);
  }
};
