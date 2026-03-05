const express = require('express');
const app = express();

app.use(express.json());

let expenses = [
  { id: 1, item: 'Coffee', amount: 3 },
  { id: 2, item: 'Sandwich', amount: 5 }
];

app.post('/expense', (req, res) => {
  const newExpense = {
    id: expenses.length + 1, // simple auto-increment
    item: req.body.item,
    amount: req.body.amount
  };
  expenses.push(newExpense);
  res.status(201).json({ message: 'Expense created', data: newExpense });
});

app.get('/expense', (req, res) => {
  res.json(expenses);
});

app.delete('/expense/:id', (req, res) => {
  const id = parseInt(req.params.id);
  expenses = expenses.filter(exp => exp.id !== id);
  res.json({ message: `Expense ${id} deleted` });
});

app.listen(3000, () => {
  console.log('Express server running on http://localhost:3000');
});