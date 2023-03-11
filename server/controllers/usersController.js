const userModel = require('../models/users');

async function getUsers(req, res) {
  try {
    const users = await userModel.getAllUsers();
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

async function getUserSkill(req, res) {
  try {
    const username = req.params.username;
    const users = await userModel.getUserSkill(username);
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}



module.exports = {
  getUsers,
  getUserSkill
};
