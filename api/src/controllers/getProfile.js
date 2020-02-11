const useMysqlDb = require("../services/mysql");
const getProfileQuery = require("../queries/getProfileQuery");

module.exports = async function getProfile(req, res) {
  const { query } = useMysqlDb();

  const { user } = req;

  console.log('this is user');
  console.log(user);
  try {
    // const response = await query(getProfileQuery(req.query.username));

    const response = await query(
      getProfileQuery(req.query.username, user ? user.id : 0)
    );

    // console.log(response[0]);
    // console.log(response[0][1][0].following)
    const dto = {
      id: response[0][0][0].id,
      username: response[0][0][0].username,
      avatar: response[0][0][0].avatar,
      posts: response[0][1],
      following: response[0][2][0].following
    };
    console.log(dto);
    if (response[0].length > 0) {
      res.status(200).json(dto);
    } else {
      res.status(200).json(response[0]);
    }

    // return
  } catch (e) {
    console.log("Error in get Profile");
    console.log(e);
  }
};
