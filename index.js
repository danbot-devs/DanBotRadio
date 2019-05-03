const Discord = require("discord.js");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const client = new Discord.Client();
const fs = require("fs");
client.config = require("./config.js");
const moment = require('moment');
var mp3Duration = require('mp3-duration');
const broadcast = client.createVoiceBroadcast();

process.on('uncaughtException', function (err) {
     client.channels.get("571260960820690955").send(`ERROR: ` + err);
})

const init = async () => {
  const evtFiles = await readdir("./events/");
  console.log(`Loading a total of ${evtFiles.length} events.`);
  evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
    console.log(`Loading Event: ${eventName}`);
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client));
  });



client.on('message', message => {
    const prefix = "!DBR!"
    if (message.content.indexOf(prefix) !== 0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commandargs = message.content.split(' ').slice(1).join(' ');
    const command = args.shift().toLowerCase();
    client.channels.get("571260960820690955").send(`[${message.guild.name}] [${message.author.username}] >> ${prefix}${command} ${commandargs}`);
        try {
            let commandFile = require(`./commands/${command}.js`);
            commandFile.run(client, message, args);
        } catch (err) {
                if (err instanceof Error && err.code === "MODULE_NOT_FOUND") {
                    return;
             }
    }  
})

  client.login(client.config.token);
};
init();
 