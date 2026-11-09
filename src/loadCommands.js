const fs = require('node:fs');
const path = require('node:path');

function loadCommands() {
  const dir = path.join(__dirname, 'commands');
  const commands = [];

  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.js'))) {
    const command = require(path.join(dir, file));
    if (command.data && command.execute) {
      commands.push(command);
    } else {
      console.warn(`Skipping ${file}: missing "data" or "execute"`);
    }
  }
  return commands;
}

module.exports = { loadCommands };