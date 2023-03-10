const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
const port = 8080;

const server = app.listen(port,()=>{
    console.log("Server Started on Port 8080")
});