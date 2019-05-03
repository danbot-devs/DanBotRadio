const fs = require("fs");
const Discord = require("discord.js");
exports.run = (client, message, args) => {
    const np = require('../song.json');

    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("**Now playing**:", np.song)
    .addField("**Current playtime**:", np.durationmins + ":" + np.durationsecs)
    .addField("**Song length**:", np.duration)
    message.channel.send(embed)
};