const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/monthly', async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT 
        DATE_FORMAT(transaction_date, '%Y-%m') AS month,
        SUM(amount) AS total_amount,
        COUNT(*) AS total_transactions,
        AVG(amount) AS average_amount
      FROM transactions
      GROUP BY DATE_FORMAT(transaction_date, '%Y-%m')
      ORDER BY month;
    `);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;