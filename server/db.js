// DB connection
const mysql = require("mysql");
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'examly',
    database: 'herimpact',
  });
  pool.getConnection((error, connection) => {
    if (error) {
      console.error("Error connecting to database:", error);
      return;
    }
    console.log("Connected to MySQL database!");
    connection.release();
  });

  module.exports = pool;