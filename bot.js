const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});

client.login('NjcwNjk1NTA4MzYwMTY3NDU0.Xiy98w.KThrZXJCdN4ul-RXcto6jmSAavc');
