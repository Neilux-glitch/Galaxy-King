module.exports = {
  data: { name: "ping" },
  execute: async (client, interaction) => {
    await interaction.reply("pong 🏓");
  }
};
