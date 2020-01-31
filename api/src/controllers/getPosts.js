const getPostsQuery = require("../queries/getPostsQuery");
const useMysqlDb = require("../services/mysql");

module.exports = async function getUser(req, res) {
  const { query } = useMysqlDb();

  try {
    const result = await query(getPostsQuery(req.user.id));
    res.status(201).json(result[0]);
  } catch (e) {
    console.log(e);
  }
};
