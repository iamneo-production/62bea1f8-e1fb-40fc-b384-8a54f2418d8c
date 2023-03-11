const express = require("express");
const mysql = require("mysql");
var router = express.Router();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "examly",
  database: "herimpact",
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

router.get("/education/:id", (req, res) => {
  const { id } = req.params;
  const sqlGet =
    "select instituteName, qualificationName, DATE_FORMAT(start, '%M %Y') as start, DATE_FORMAT(end, '%M %Y') as end from education where username = ?  order by DATE_FORMAT(start, '%Y %m') DESC";
  db.query(sqlGet, id, (err, result) => {
    if (err) res.send({ err: err });
    else res.send(result);
  });
});

router.get("/experiences/:id", (req, res) => {
  const { id } = req.params;
  const sqlGet =
    "select companyName, role, country, DATE_FORMAT(start, '%M %Y') as start, DATE_FORMAT(end, '%M %Y') as end from expreince where username = ? order by DATE_FORMAT(start, '%Y %m') DESC";
  db.query(sqlGet, id, (err, result) => {
    if (err) res.send({ err: err });
    else res.send(result);
  });
});

router.post("/follow", (req, res) => {
  const { user, techlead } = req.body;
  const sqlInsert = "insert into follow values(?,?, now())";
  db.query(sqlInsert, [user, techlead], (err, result) => {
    if (err) res.send({ err: err });
    else res.send(result);
  });
});

router.get("/follow/:user/:techlead", (req, res) => {
  const { user, techlead } = req.params;
  const sqlGet = "select * from follow where user =? and techlead =?";
  db.query(sqlGet, [user, techlead], (err, result) => {
    if (err) res.send({ err: err });
    else res.send(result);
  });
});

router.post("/unfollow", (req, res) => {
  const { user, techlead } = req.body;
  const sqlDelete = "delete from follow where user=? and techlead=?";
  db.query(sqlDelete, [user, techlead], (err, result) => {
    if (err) res.send({ err: err });
    else res.send(result);
  });
});
module.exports = router;
