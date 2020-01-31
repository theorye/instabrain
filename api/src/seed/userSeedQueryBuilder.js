const fs = require("fs");
const bcrypt = require("bcryptjs");

const userQuery = (users, hash) => `
START TRANSACTION;

INSERT INTO instabrain.users (id, username, email, name, created, introduction, avatar) VALUES 
${users
  .map(user => {
    return `(UUID(), LOWER('${user.username}'), '${user.email}', '${user.name}', '${user.created}', '${user.introduction}', '${user.avatar}')`;
  })
  .join(",")};

INSERT INTO instabrain.login (id, hash) VALUES
${users
  .map(user => {
    return `((SELECT id from instabrain.users WHERE username='${user.username}'), '${hash}')`;
  })
  .join(",")};

INSERT INTO instabrain.posts (id, url, user_id) VALUES
${users
  .map(user => {
    return `(UUID(), '${user.avatar}', (SELECT id from instabrain.users WHERE username='${user.username}'))`;
  })
  .join(",")};



COMMIT;
`;

const userSeedQueryBuilder = async () => {
  try {
    const rawJson = await fs.promises.readFile(__dirname + "/userSeed.json");
    const parsedJson = await JSON.parse(rawJson);
    const hashedPassword = await bcrypt.hash("password", 10);
    const response = userQuery(parsedJson, hashedPassword);
    return response;
  } catch (e) {
    console.log(e);
  }
};

module.exports = userSeedQueryBuilder;
