const pool = require('../db');

function getAllUsers() {
  return new Promise((resolve, reject) => {
    pool.query('SELECT firstName,lastName,country, bio FROM techlead ', (error, results, fields) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

function getUserSkill(name) {
  return new Promise((resolve, reject) => {
    pool.query('SELECT skill.name FROM techlead_skills,skills WHERE techlead_username=?',[username], (error, results, fields) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = {
  getAllUsers,
  getUserSkill
};