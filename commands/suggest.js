const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let color = `RANDOM`    
    //SR: Song Requests
    let sr = message.guild.channels.find(i=>[`572785878024585227`].includes(i.id))
    let song = args.join(" ")
    if(!song) return message.channel.send("",{
        embed: new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor(color)
        .setTimestamp()
        .setDescription("OK... So what\'s the song you're suggesting?\n(*Link if possible*)")
    })
    message.delete().catch()
    message.channel.send("", {
        embed: new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor(color)
        .setDescription("Your Song request has been `Sent`! Please wait for a `bot Admin` to verify it.")
        .setTimestamp()
    })
    
    client.users.get("137624084572798976").send("", {
        embed: new Discord.RichEmbed()
        .setAuthor("Song Request:")
        .setTimestamp()
        .setColor(color)
        .addField("User(ID):", `<@!${message.author.id}> (${message.author.id})`, true)
        .addField("Guild:", message.guild.name + `(**ID:**${message.guild.id})`, true)
        .addField("Song:", `\`${song}\``,true)
    }).then((msg) => {
        msg.react("👍");
        msg.react("👎");
       const filter = (reaction, user) => {
           return ['👍', '👎'].includes(reaction.emoji.name) && user.id !== `${client.user.id}`;
       };
       setTimeout(function(){ 
       msg.awaitReactions(filter, { max: 1 })
           .then((collected) => {
               const reaction = collected.first();
               const users = reaction.users 
               if (reaction.emoji.name === "👍") {
                   const A = users.array().filter(u => u.id !== client.user.id);
                   message.author.send("", {
                       embed: new Discord.RichEmbed()
                       .setColor(color)
                       .setTimestamp()
                       .setDescription("Hey there, your Song request to add  has been **__accepted__** and will be added soon!")
                       .setFooter(`Song Requested: ${song}`)
                   })

                   msg.clearReactions();
                   
                   msg.edit("__**ACCEPTED**__", {
                    embed: new Discord.RichEmbed()
                    .setAuthor("Song Request:")
                    .setTimestamp()
                    .setColor(color)
                    .addField("User(ID):", `<@!${message.author.id}> (${message.author.id})`, true)
                    .addField("Guild:", message.guild.name + `(**ID:**${message.guild.id})`, true)
                    .addField("Song:", `\`${song}\``,true)
                    .addField("Accepted By:", `${A}`, true)
                });
                sr.send(("__**ACCEPTED**__", {
                    embed: new Discord.RichEmbed()
                    .setAuthor("Song Request:")
                    .setTimestamp()
                    .setColor(color)
                    .addField("User(ID):", `<@!${message.author.id}> (${message.author.id})`, true)
                    .addField("Guild:", message.guild.name + `(**ID:**${message.guild.id})`, true)
                    .addField("Song:", `\`${song}\``,true)
                    .addField("Accepted By:", `${A}`, true)
                })
                );
               }
               else {
                message.author.send("", {
                    embed: new Discord.RichEmbed()
                    .setColor(color)
                    .setTimestamp()
                    .setDescription(`Hey! Sorry, but your Song request has been **__Denied__**!`)
                    .setFooter(`Song Requested: ${song}`)
                })
                   const R = users.array().filter(u => u.id !== client.user.id);
                   msg.edit("__**DENIED**__", {
                    embed: new Discord.RichEmbed()
                    .setAuthor("Song Request:")
                    .setTimestamp()
                    .setColor(color)
                    .addField("User(ID):", `<@!${message.author.id}> (${message.author.id})`,true)
                    .addField("Guild:", message.guild.name + `(**ID:**${message.guild.id})`, true)
                    .addField("Song:", `\`${song}\``,true)
                    .addField("Denied By:", `${R}`, true)
                })
                   msg.clearReactions();
               }
           })
       }, 2000);
   })
}