const { addItem, getTotal } = require('./store');

function handleCommand(args) {
  const [command, amount, item] = args;

  if (command === 'add') {
    addItem(Number(amount), item);
    console.log(`Added ${amount} ${item}`);
  } else if (command === 'total') {
    console.log(`Total: ${getTotal()}`);
  } else {
    console.log('Unknown command');
  }
}

module.exports = { handleCommand };