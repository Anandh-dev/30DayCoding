// const mysql = require('mysql2'); 

// const connection = mysql.createConnection({
//   host: 'localhost',     
//   user: 'root',
//   password: '0206',  
//   database: 'testdb'
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting: ' + err.stack);
//     return;
//   }
//   console.log('Connected as id ' + connection.threadId);
// });

// connection.query('INSERT INTO users (name, age) VALUES (?, ?)', ['Anand', 25], (err, results) => {
//   if (err) throw err;
//   console.log('Inserted Row ID:', results.insertId);
// });

// connection.query('SELECT * FROM users', (err, rows) => {
//   if (err) throw err;
//   console.log('Data:', rows);
// });

// connection.end();

const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0206',
  database: 'testdb'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// READ: Get all users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// CREATE: Add a new user
app.post('/users', (req, res) => {
  const { name, age } = req.body;
  db.query('INSERT INTO users (name, age) VALUES (?, ?)', [name, age], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id: results.insertId, name, age });
  });
});

// UPDATE: Edit a user
app.put('/users/:id', (req, res) => {
  const { name, age } = req.body;
  const { id } = req.params;
  db.query('UPDATE users SET name=?, age=? WHERE id=?', [name, age, id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id, name, age });
  });
});

// DELETE: Remove a user
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM users WHERE id=?', [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: `User ${id} deleted` });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});