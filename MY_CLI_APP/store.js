const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.json');

function loadData() {
  if (!fs.existsSync(filePath)) {
    return { total: 0 };
  }
  const raw = fs.readFileSync(filePath);
  return JSON.parse(raw);
}

function saveData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function addItem(amount, item) {
  const data = loadData();
  data.total += amount;
  saveData(data);
}

function getTotal() {
  const data = loadData();
  return data.total;
}

module.exports = { addItem, getTotal };