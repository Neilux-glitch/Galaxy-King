module.exports = {
  name: "ready",
  execute(client) {
    console.log(`Bot listo: ${client.user.tag}`);
  }
};
