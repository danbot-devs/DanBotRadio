const Discord = require('discord.js');
var request = require('request');
exports.run = async (client, message, args) => {
  const m = await message.channel.send(":ping_pong:");
  m.edit(`:ping_pong: Latency is ${m.createdTimestamp - message.createdTimestamp}ms. \nAPI Latency is ${Math.round(client.ping)}ms`)
};