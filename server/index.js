const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

// Create connection
app.use(cors());
app.use(express.json());
const port = 8080;

const server = app.listen(port,()=>{
    console.log("Server Started on Port 8080")
});


const userController = require("./controllers/usersController");
app.use(express.json());

//routes for different sqls
app.get('/users',userController.getUsers);
app.get('/user_skill',userController.getUserSkill);

