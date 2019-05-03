const Discord = require("discord.js");
const os = require('os');
var memStat = require('mem-stat');
var netStat = require('net-stat');
var disk = require('diskusage');
exports.run = async (client, message, args) => {
    var cpu = os.loadavg();

    disk.check('/', function(err, info) {
    const embed = new Discord.RichEmbed()
    .setColor(0x00A2E8)
    .setThumbnail(client.user.avatarURL)
    .addField('**CPU Load**:', `${Math.ceil(cpu[1] * 100) / 10 + "%"}`, true)
    .addField('**RAM**:', `Used: ${Math.round(memStat.total('MiB') - memStat.free('MiB')) + "MB | Total: " + Math.round(memStat.total('GiB')) + "GB"}`, true)
    .addField('**SSD**:', `Used: ${Math.round(info.total / 1000000 / 1024) - Math.round(info.free / 1000000 / 1024) + "GB | Total: " + Math.round(info.total / 1000000 / 1024) + "GB"}`, true)
    .addField('**NET**:', `Recevied: ${Math.round(netStat.totalRx({ iface: 'eth0', units: 'GiB' })) + "GB | Sent: " + Math.round(netStat.totalTx({ iface: 'eth0', units: 'GiB '})) + "GB"}`)
    message.channel.send(embed);
    });
};