const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .addField('Coming soon...','rip...')
    message.channel.send(embed);
};