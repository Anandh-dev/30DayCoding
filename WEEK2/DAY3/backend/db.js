const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '0206',
  database: 'expense_tracker'
});

module.exports = pool;