const Discord = require("discord.js");
exports.run = async (client, message, args) => {
   if (message.author.id == "137624084572798976") {
    var avatartoset = args.join(' ');
    if (!avatartoset) avatartoset = null;
    client.user.setAvatar(avatartoset);
    message.reply("The new avatar has been set!");
    } else {
      message.reply("Only my owner can use this command");
    }
}