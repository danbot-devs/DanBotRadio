const moment = require('moment');
var mp3Duration = require('mp3-duration');
const fs = require("fs");
const Discord = require('discord.js')
const randomFile = require('select-random-file')
exports.run = (client, message, args) => {
        const broadcast = client.createVoiceBroadcast();
        if (message.author.id !== "569546382667546643") return message.channel.send("Only i can use this command...");

              const dir = './Music'
              randomFile(dir, (err, file) => {
              var x = file
              var f = x.substr(0, x.lastIndexOf('.'));

                  broadcast.playFile('./Music/' + file, {
                      volume: 1, 
                      bitrate: 128,
                  });
                      
      //"durationmins": "${Math.floor(dispatcher.time/60000) < 10 ? `0${Math.floor(dispatcher.time/60000)}` : Math.floor(dispatcher.time/60000)}",
      //"durationsecs": "${Math.floor((dispatcher.time%60000)/1000) < 10 ? `0${Math.floor((dispatcher.time%60000)/1000)}` : Math.floor((dispatcher.time%60000)/1000)}"
      
                  const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]:`; 
                  client.channels.get("571260960820690955").setTopic(`${timestamp} | Now playing: ${f}`);
                  client.user.setActivity(f + "   |   !DBR!help", { type: "LISTENING" });
                  //Bot Server (Bot Only)
                  client.channels.get("570277246091132929").join()
                      .then(connection => {
                          const dispatcher = connection.playBroadcast(broadcast);
                            mp3Duration("./Music/" + file, function (err, duration) {
                              var minutes = Math.floor(duration / 60);
                              var seconds = duration - minutes * 60;
                              var fileContent = `{
                                  "song": "${f}",
                                  "duration": "${minutes + "minutes and " + seconds.toFixed(0) + "seconds"}",
                                  "durationraw": "${duration}"
                              }`;
                              fs.writeFile("./song.json", fileContent, (err) => {
                                  if (err) {
                                      console.error(err);
                                      return;
                                  };
                              });
                          })  
                      
                          broadcast.on('end', () => { 
                              dispatcher.destroy()
                              //client.channels.get("570277246091132929").leave();
                              client.channels.get("552513647545679885").send('!DBR!nextsong')
                          })});
                  //Ecotropolis Network.
                  client.channels.get("569622787623485447").join()
                      .then(connection => {
                      const dispatcher = connection.playBroadcast(broadcast);
                      });
                  //Global Advertiser.
                  client.channels.get("569999540929691658").join()
                      .then(connection => {
                      const dispatcher = connection.playBroadcast(broadcast);
                      });
                  //1 servers are unavailable due to a temporary faggot.
                  client.channels.get("570249480897822732").join()
                      .then(connection => {
                      const dispatcher = connection.playBroadcast(broadcast);
                      });
                  //DanBot Support Server
                  client.channels.get("571251077693964306").join()
                      .then(connection => {
                      const dispatcher = connection.playBroadcast(broadcast);
                      });
                  //DanBot Support Server
                  client.channels.get("578889228944146432").join()
                  .then(connection => {
                  const dispatcher = connection.playBroadcast(broadcast);
                  });
                    })
    };