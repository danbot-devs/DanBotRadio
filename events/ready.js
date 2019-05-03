const moment = require('moment');
const fs = require('fs');
module.exports = async(client, message) => {
    //Dashboard Owner Sync
    client.appInfo = await client.fetchApplication();
    setInterval( async () => {
      client.appInfo = await client.fetchApplication();
    }, 60000);
    require("../modules/dashboard")(client); 

    //Console Log for startup.
    client.channels.get("552513647545679885").send('!DBR!nextsong')
    const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]:`;
    client.channels.get("571260960820690955").send(`${timestamp} ${client.user.tag}, ${client.guilds.reduce((p, c) => p + c.memberCount, 0)} users, in ${client.channels.size} channels of ${client.guilds.size} servers.`);

    fs.readdir("./commands/", (err, files) => {
      if (err) return client.channels.get("571260960820690955").send(err);
           client.channels.get("571260960820690955").send(`Loaded ${files.length} commands successfully!`)
       })
  };