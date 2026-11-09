const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('meow')
    .setDescription('Stupid bot says meow for no absolute reason'),
  async execute(interaction) {
    await interaction.reply('meow :3');
  },
};