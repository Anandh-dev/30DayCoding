// import express from 'express';
// import mysql from 'mysql2/promise';

const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '0206',
  database: 'paginationdb',
});

const app = express();

app.use(cors());

app.get('/users', async (req, res) => {
  const lastId = parseInt(req.query.lastId) || 0;
  const limit = parseInt(req.query.limit) || 50;

  const [rows] = await pool.query(
    'SELECT id, name, email, age FROM users WHERE id > ? ORDER BY id LIMIT ?',
    [lastId, limit]
  );

  res.json(rows);
});
app.listen(3000, () => console.log('Server running on port 3000'));