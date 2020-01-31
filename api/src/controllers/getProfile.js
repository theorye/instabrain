const useMysqlDb = require("../services/mysql");
const getProfileQuery = require("../queries/getProfileQuery");

module.exports = async function getProfile(req, res) {
  const { query } = useMysqlDb();

  try {
    const response = await query(getProfileQuery(req.query.username));

    if (response[0].length > 0) {
      res.status(200).json({
        username: req.query.username,
        posts: response[0]
      });
    } else {
      res.status(200).json(response[0]);
    }

    // return
  } catch (e) {
    console.log(e);
  }
};
