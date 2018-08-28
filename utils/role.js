const Discord = require('discord.js'); 
const client = new Discord.Client();

client.on('message', (message) => {
  const guildMember = message.member;
  guildMember.addRole('456321537277034506');
});
