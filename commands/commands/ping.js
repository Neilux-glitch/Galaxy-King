const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Ver latencia del bot'),

  async execute(interaction) {
    await interaction.reply('🏓 Pong!');
  }
};
