const Discord = require('discord.js')
const client = new Discord.Client()

const responses = [
  'Kumbaya!',
  'Get the lobster!',
  'Lower your standards!',
  '*eats oatmeal*',
  'Yaiight',
  'Cool beans',
  'C-c-c-c-ca-ca cool -beans',
  'Call me Sad Gal Soph',
  'Bad Boy Brian!',
  'Let me just delete the tests that don\'t pass'
]
client.on('message', msg => {
  if (msg.content === '!sophia' || msg.content === '!Sophia' || msg.content.toLowerCase().includes('sophia')) {
    msg.reply(responses[Math.floor(Math.random() * responses.length)])
  }
})
client.login(process.env.BOT_TOKEN)