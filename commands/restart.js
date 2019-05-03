const fs = require("fs");
exports.run = (client, message, args) => {
    if (message.author.id !== "137624084572798976") {
        message.channel.send("Only my master can use this command");
      }else 
    message.channel.send('Bai...');
    client.channels.get("570277246091132929").leave();
    client.channels.get("569622787623485447").leave();
    client.channels.get("569999540929691658").leave();
    client.channels.get("570249480897822732").leave();
    client.channels.get("571251077693964306").leave();
    fs.readdir("./commands/", (err, files) => {
        if (err) {
          console.log(err);
        }else
        files.forEach((file) => {
             delete require.cache;
        });
    });
    client.destroy();
    client.login(client.config.token);
};