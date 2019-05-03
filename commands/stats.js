const fs = require('fs');
const getSize = require('get-folder-size'); 
exports.run = (client, message, args) => {
fs.readdir("./Music/", (err, files) => {
    getSize("./Music/", (err, size) => {
        if (err) { throw err; }
    let song = JSON.parse(fs.readFileSync("./song.json"));
    message.channel.send(`Now playing: **${song.song}** in ${client.voiceConnections.size} servers \nThere is ${files.length} songs in the Music folder and the folder size is ` + ((size / 1024 / 1024).toFixed(2) + ' MB'));
}); 
});
};