const app = require("./server");
const bcrypt = require('bcryptjs');
const useMysqlDb = require("./services/mysql");
const seed = require("./queries/initialTableSeed");
const userSeedQueryBuilder = require('./seed/userSeedQueryBuilder');

const PORT = 5000;

async function bootstrap() {
  const { query } = useMysqlDb();
  try {
    const builtUserSeedQuery = await userSeedQueryBuilder();
    const hashedPassword = await bcrypt.hash('P4$$w0rd', 10);
    const hashedPassword2 = await bcrypt.hash('a', 10);
    await query(seed(hashedPassword, hashedPassword2));
    await query(builtUserSeedQuery);

    app.listen(PORT, () => {
      console.log(`App listening on the http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log("err in bootstrap", err);
  }
}

bootstrap();
