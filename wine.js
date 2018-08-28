const Discord = require('discord.js');
 
const bot = new Discord.Client();
bot.on('ready', () => {
    console.log("$help")
    bot.user.setActivity("New Users", {type: 2});
setInterval(function(){
  bot.guilds.get('454655115824201740').roles.find('name', 'role').edit({color: 'RANDOM'})
},1000);
});

bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome-leave');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | name : ', `${member}`)
        .addField(':microphone2: | Welcome!', `Welcome to the server, ${member}`)
        .addField(':id: | User :', "**[" + `${member.id}` + "]**")
        .addField(':family_mwgb: | Your are the member', `${member.guild.memberCount}`)
        .addField("Name", `<@` + `${member.id}` + `>`, true)
        .addField('Server', `${member.guild.name}`, true )
        .setFooter(`**${member.guild.name}**`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

bot.on('guildMemberAdd', member => {

    console.log(`${member}`, "has joined" + `${member.guild.name}`)

});

bot.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', '👨🚀welcome-and-bye👨🚀');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Name:', `${member}`)
        .addField('Has Let the Server', ';(')
        .addField('Bye Bye :(', 'We will all miss you!')
        .addField('The server now as', `${member.guild.memberCount}` + " members")
        .setFooter(`**${member.guild.name}`)
        .setTimestamp()
נננ     
        channel.sendEmbed(embed);
});

bot.on('guildMemberRemove', member => {
    console.log(`${member}` + "has left" + `${member.guild.name}` + "Sending leave message now")
    console.log("Leave Message Sent")
});
bot.on("message", message => {
    const swearWords = ["darn", "shucks", "frak", "shite", "arse", "ass", "asshole", "bastard", "bitch", "bollocks", "child-fucker", "Christ on a bike", "Christ on a cracker", "crap", "cunt", "damn", "frigger", "fuck", "goddamn", "godsdamn", "hell", "holy shit", "Jesus", "Jesus Christ", "Jesus H. Christ", "Jesus Harold Christ", "Jesus wept", "Jesus", "Mary and Joseph", "Judas Priest", "motherfucker", "nigga", "nigger", "shit", "shit ass", "shitass", "son of a bitch", "son of a motherless goat", "son of a whore", "sweet Jesus", "twat", "Can i suck your boobs", "Carpet muncher", "Choking your chicken", "Cock eyed Cunt.", "Cock muncher", "Cocklump", "Colder than a witches titty in a brass bra", "Creampie", "Cretinous cunting fuckhead", "Cum", "Cum Dumpster", "Cum on your face", "Cuntface", "can i fuck you from behind", "chimney sweeper", "chutney ferret", "cockeye", "coral stomper", "crotte", "cum dumpster", "cuntlapper", "cus", "Ai sat (directed at a man)", "Ain't", "Arrogant, Gum-chewing fat cunt", "As much use as a chocolate teapot", "a-hole", "arse bandit", "arvind kejriwal", "ask me bollix"];
    if( swearWords.some(word => message.content.toLowerCase().includes(word)) ) {
        message.delete();
        message.reply("Votre message à été supprimé car il ne respecte pas le règlement !");

          }
          bot.on('message', message => {
            if(message.author.bot) return;
            var re =  /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi.exec(message.cleanContent);
            if(re != null){
                message.delete().then(message => {
                    message.reply('Links is not allowed here!');
                });
            }})
        })
const token = process.env.TOKEN;
bot.login("NDU0NzMwMzMxMTYyMTQ4ODY0.DmXaZw.XouC5W9IdRsjIJiSOkXlKUjB6YI")