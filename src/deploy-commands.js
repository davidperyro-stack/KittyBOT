require('dotenv').config();
const { REST, Routes } = require('discord.js');
const { loadCommands } = require('./loadCommands');

const body = loadCommands().map((c) => c.data.toJSON());
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body },
    );
    console.log(`Registered ${body.length} command(s)!`);
  } catch (err) {
    console.error(err);
  }
})();