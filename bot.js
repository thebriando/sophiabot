const Discord = require("discord.js");
const client = new Discord.Client();

const responses = [
  "Kumbaya!",
  "Get the lobster!",
  "Lower your standards!",
  "*eats oatmeal*",
  "Yaiight",
  "Cool beans",
  "C-c-c-c-ca-ca cool -beans",
  "Call me Sad Gal Soph",
  "Bad Boy Brian!",
  "Let me just delete the tests that don't pass",
  "I live in a dump",
  "i cAn't ttYpeE",
  "Blueface baby",
  "Don't touch my pocket",
  "Grain",
  "I need to save",
  "Everything is on fire",
  "No",
  "Mozzarella",
  "I don't have a Discord",
  "I'm not going to join Discord",
  "Ich bin Sophia",
  "I don't think I like that"
];
client.on("message", msg => {
  if (
    msg.content === "!sophia" ||
    msg.content === "!Sophia" ||
    msg.content.toLowerCase().includes("sophia")
  ) {
    msg.reply(responses[Math.floor(Math.random() * responses.length)]);
  }
});
client.login(process.env.BOT_TOKEN);
