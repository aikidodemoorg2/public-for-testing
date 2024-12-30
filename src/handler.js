const express = require('express');
const mysql = require('mysql');
const app = express();

// Database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydatabase'
});

app.get('/user', function(req, res) {
  let userId = req.query.id;
  let query = 'SELECT * FROM users WHERE id = ?';

  connection.query(query, [userId], function(error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});