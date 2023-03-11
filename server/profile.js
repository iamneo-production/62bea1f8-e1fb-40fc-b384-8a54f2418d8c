const express = require("express");
const mysql = require("mysql");
var router = express.Router();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "current password",
  database: "app_model",
});

router.get("/techlead", (req, res) => {
  const sqlGet = "select * from techlead";
  db.query(sqlGet, (err, result) => {
    if (err) res.send({ err: err });
    else res.send(result);
  });
});

module.exports = router;
