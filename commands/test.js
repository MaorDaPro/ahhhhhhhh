const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

//let args = message.content.split(" ").slice(1).join(' ');

message.guild.channels.find("id", "469177046178856992").send(args[1]);

}

module.exports.help = {
    name: "test"
}
