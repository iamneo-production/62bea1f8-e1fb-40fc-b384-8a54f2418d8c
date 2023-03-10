const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');

const app = express();
const port = process.env.PORT || 8081;

// Create a connection pool to the PostgreSQL database
const pool = new pg.Pool({
  user: 'myusername',
  password: 'mypassword',
  host: 'localhost',
  database: 'mydatabase',
  port: 5432
});

// Parse incoming JSON requests
app.use(bodyParser.json());

// Update the user's profile
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, bio } = req.body;

  pool.query('UPDATE users SET name=$1, email=$2, bio=$3 WHERE id=$4', [name, email, bio, id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error updating user');
    } else {
      res.status(200).send('User updated successfully');
    }
  });
});

// Update the tech leader's profile
app.put('/tech_leaders/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, bio } = req.body;

  pool.query('UPDATE tech_leaders SET name=$1, email=$2, bio=$3 WHERE id=$4', [name, email, bio, id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error updating tech leader');
    } else {
      res.status(200).send('Tech leader updated successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
