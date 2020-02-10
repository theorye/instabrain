const getPostsQuery = require("../queries/getFeedQuery");
const useMysqlDb = require("../services/mysql");

module.exports = async function getUser(req, res) {
  const { query } = useMysqlDb();

  try {
    const result = await query(
      getPostsQuery(req.user.id, req.query.sLimit, req.query.pLimit)
    );

    const dto = {
      suggestions: result[0][0],
      posts: result[0][1]
    };
    res.status(201).json(dto);
  } catch (e) {
    console.log(e);
  }
};
