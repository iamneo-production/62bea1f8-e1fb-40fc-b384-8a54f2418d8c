const express = require("express");
const mysql = require("mysql");
var router = express.Router();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "current password",
  database: "app_model",
});

router.get("/techlead/:id", (req, res) => {
  const { id } = req.params;
  const sqlGet = "select * from techlead where username = ?";
  db.query(sqlGet, id, (err, result) => {
    if (err) res.send({ err: err });
    else res.send(result);
  });
});

router.get("/skills/:id", (req, res) => {
  const { id } = req.params;
  const sqlGet =
    "select skills.name, techlead_skills.rate from techlead_skills left join skills on techlead_skills.skill_id = skills.skill_id where techlead_skills.techlead_username = ?";
  db.query(sqlGet, id, (err, result) => {
    if (err) res.send({ err: err });
    else res.send(result);
  });
});

module.exports = router;
