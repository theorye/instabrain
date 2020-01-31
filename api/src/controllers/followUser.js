const useMysqlDb = require("../services/mysql");
const followQuery = require("../queries/followQuery");

module.exports = async function createUser(req, res) {
  const { query } = useMysqlDb();

  try {
    const { followee } = req.body;
    const { id: follower } = req.user;

    const response = await query(followQuery(follower, followee));

    if (response.length[0] === 0) {
      return res.status(400).send("Cannot finish following");
    } else {
      res.status(201).send(true);
    }
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};
