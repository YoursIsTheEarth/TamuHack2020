const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content.startsWith('!')) {
        const cmdString = msg.content.substr(1);
        try {
            const args = cmdString.split(' ');
            switch(args[0]) {
                case 'ping':
                    msg.reply('Pong!');
                    break;
                case 'spam':
                    for (var i = 0; i < 20; i++) {
                        msg.reply('');
                    }
                    break;
                case 'roll':
                    msg.reply('Rolling die...');
                    break;
                default:
                    msg.reply('?');
            }
        }
        catch (err) {
            console.log(err);
        }
    }
});

client.login('NjcwNjk1NTA4MzYwMTY3NDU0.XizTvA.GU1GtVIYRsSpm3aCpwvKn47HMRY');
