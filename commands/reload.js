const fs = require("fs");
exports.run = (client, message, args) => {
      if (message.author.id !== `137624084572798976`) 
      if (message.author.id !== `293841631583535106`)
      return message.channel.send("Only my master can use this command");
      try{
    fs.readdir("./commands/", (err, files) => {
        if (err) {
          console.log(err);
        }else
        message.channel.send(`Refreshed \`${files.length}\` commands successfully!`);
        client.channels.get("544290801216126976").send(`Refreshed ${files.length} commands`);
        files.forEach((file) => {
             delete require.cache[require.resolve(`./${file}`)];
        });
    });
  } catch (err) {
        return;
      }
    }
  
