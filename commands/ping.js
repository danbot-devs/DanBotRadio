const Discord = require('discord.js');
var request = require('request');
exports.run = async (client, message, args) => {
  request.get({ url: 'http://www.google.com', time: true }, function (err, response) {
  const m = await message.channel.send(":ping_pong:");
  m.edit(`:ping_pong: Latency is ${m.createdTimestamp - message.createdTimestamp}ms. \nAPI Latency is ${Math.round(client.ping)}ms \nWebsite response time: ${response.elapsedTime}ms`)
});
};