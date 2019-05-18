const { version, MessageEmbed, MessageAttachment} = require("discord.js");
const Discord = require('discord.js');
const { HighChartsConstructor } = require("chart-constructor");
const moment = require("moment");
require("moment-duration-format");
const now = new Date();


exports.run = async(client, message, args) => {// eslint-disable-line no-unused-vars
    var Mem = [];
    for (var i = 0; Mem.length < 4; i++) { Mem.push(process.memoryUsage().heapUsed / 1024 / 1024); }
    const chart = await new HighChartsConstructor()
      .plotOptionsOptions({          
        series: {          
          color: "#000000",
          pointStart: now.setHours(now.getHours() - 1),
          pointInterval: 60 * 1000
        }})
      .seriesDataSetter([
        {
          type: "line",
          color: "#ffffff",
          data: Mem,
          name: "RAM (Used in MB)"
        }
      ])
      .titleOptions({ text: "Chart" })
      .toBuffer();
      const attachment = new Discord.Attachment(chart, 'data.png');
      const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    const embed = new Discord.RichEmbed()
      .addField("Memory Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
      .addField("Uptime", duration, true)
      .addField("Users", client.users.size.toLocaleString(), true)
      .addField("Servers", client.guilds.size.toLocaleString(), true)
      .addField("Channels", client.channels.size.toLocaleString())
      .addField("Discord Version", `v${version}`, true)
      .setTimestamp()
      .attachFile(attachment)
      .setImage("attachment://data.png");
    return message.channel.send(embed);

  }