const express = require('express');
const mysql = require('mysql');
const helmet = require('helmet');
const app = express();
app.use(helmet());

// Database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydatabase'
});

app.get('/user', function(req, res) {
  let userId = req.query.id;
  let query = `SELECT * FROM users WHERE id = '${userId}'`;

  connection.query(query, function(error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});