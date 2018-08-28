const Discord = require('discord.js')
exports.run = (client, message, args, tools) => {
const newemb = new Discord.RichEmbed()
.setColor(0xFFBF00)
.addField('```והתוצאה היא!!!: ```', new Date().getTime() - message.createdTimestamp + " ms ")
message.channel.send({embed: newemb})
}
module.exports.help = {
    name: "ping"
}
