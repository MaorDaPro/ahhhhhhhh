const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {;

    const reason = args.slice(1).join(' ');
    const user = args[0];
    if (!user) return message.channel.send("You need Specific User ID").catch(console.error);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("You dont have the permission `MANAGE_MEMBERS`");
    message.guild.unban(user);

    message.delete().catch(O_o=>{});

    let unbanEmbed = new Discord.RichEmbed()
    .setDescription("**UnBan**")
    .setColor("RANDOM")
    .addField("**User**", `<@!`+user+`>`)
    .addField("**Staff**", `<@${message.author.id}>`);

    let UnBanchannel = message.guild.channels.find(`name`, "📝-report");
    if(!UnBanchannel) return message.channel.send("Can't find channel called `📝-report`");

    UnBanchannel.send(unbanEmbed);
    message.channel.send(`***${member.user.username}#${member.user.discriminator} has been unbanned***`);

}

module.exports.help = {
  name:"unban"
}