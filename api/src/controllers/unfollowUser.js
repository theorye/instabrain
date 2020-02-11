const useMysqlDb = require("../services/mysql");
const unfollowQuery = require("../queries/unfollowQuery");

module.exports = async function unFollowUser(req, res) {
  const { query } = useMysqlDb();

  try {
    const { followee } = req.params;
    
    const { id: follower } = req.user;
    console.log(req.params);
    console.log(followee);
 

    const response = await query(unfollowQuery(follower, followee));

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
