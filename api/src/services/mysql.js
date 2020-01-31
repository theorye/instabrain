const mysql = require("mysql2/promise");
const util = require("util");

// Config settings for mysql connection
const config = {
  // Get the Host from Environment or use default for docker
  host: process.env.DB_HOST || "mysql",

  // Get the User for DB from Environment or use default
  user: process.env.DB_USER || "root",

  // Get the Database from Environment or use default
  database: process.env.DB_DATABASE || "",

  // Get the Password for DB from Environment or user selected default
  password: process.env.DB_PASS || "password",

  // Get the Port from Environment or use default
  port: process.env.DB_PORT || "3306",

  // Allow multiplestatement in one query
  multipleStatements: true,

  // Connection limit
  connectionLimit: 10,

  queueLimit: 0,

  waitForConnections: true
};

const pool = mysql.createPool(config);

// Ping database to check for common exception errors.
pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    }
  }

  if (connection) connection.release();

  return;
});

const useMysqlDb = () => ({
  pool,
  query: rawQuery => pool.query(parseQuery(rawQuery))
});

function parseQuery(rawQuery) {
  return rawQuery
    .toString()
    .replace(/(\r\n|\n|\r)/gm, " ") // remove newlines
    .replace(/\s+/g, " ") // excess white space
    .split(";") // split into all statements
    .map(Function.prototype.call, String.prototype.trim)
    .filter(el => el.length != 0) // remove any empty ones
    .join(";")
    .concat(";");
}

module.exports = useMysqlDb;

// async function connect(config) {
//   return new Promise(function(resolve, reject) {
//     const connection = mysql.createConnection(config);

//     connection.connect(function(error) {
//       if (error) {
//         reject(error);
//         return;
//       }
//       resolve(connection);
//     });
//   });
// }

// async function query(conn, q, params) {
//   return new Promise((resolve, reject) => {
//     const handler = (error, result) => {
//       if (error) {
//         reject(error);
//         return;
//       }
//       resolve(result);
//     };
//     conn.query(parseQuery(q), params, handler);
//   });
// }

// module.exports = {
//   config,
//   connect,
//   query
// };
