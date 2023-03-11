const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

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

app.use(cors());
app.use(express.json());
const port = 8080;

const server = app.listen(port,()=>{
    console.log("Server Started on Port 8080")
});


module.exports = pool;