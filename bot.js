const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content.startsWith('!')) {
        const cmd = msg.content.substr(1);
        switch(cmd) {
            case 'ping':
                msg.reply('Pong!');
                break;
            case 'spam':
                for (var i = 0; i < 20; i++) {
                    msg.reply('');
                }
                break;
            default:
                msg.reply('?');
        }
    }
});

client.login('NjcwNjk1NTA4MzYwMTY3NDU0.XizI4g.6nPcfiGRX06XwsfjhKHvHc3lW48');
