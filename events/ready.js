const moment = require('moment');
const fs = require('fs');
const Discord = require("discord.js");
module.exports = async(client, message) => {
    //Dashboard Owner Sync
    client.appInfo = await client.fetchApplication();
    setInterval( async () => {
      client.appInfo = await client.fetchApplication();
    }, 60000);
    require("../modules/dashboard")(client); 

    const timestamp = `${moment().format("YYYY-MM-DD HH:mm:ss")}`;
let startEmbed = new Discord.RichEmbed()
.setTitle(`${client.user.username} Started!`)
.setColor("#53f23e")
.addField("__**Time:**__", `${timestamp}`, true)
.addField("__**Total Members:**__", `${client.guilds.reduce((p, c) => p + c.memberCount, 0)}`, true)
.addField("__**Total Guilds:**__", `${client.guilds.size}`, true)
.addField("__**Total Channels:**__", `${client.channels.size}`, true)
client.channels.get("571260960820690955").send(startEmbed);


    client.channels.get("552513647545679885").send('!DBR!nextsong')

    fs.readdir("./commands/", (err, files) => {
      if (err) return client.channels.get("571260960820690955").send(err);
           client.channels.get("571260960820690955").send(`Loaded ${files.length} commands successfully!`)
       })
  };