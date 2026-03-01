const { handleCommand } = require('./command');

const args = process.argv.slice(2); 
handleCommand(args);