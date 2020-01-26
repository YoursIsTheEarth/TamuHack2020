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
                    try {
                        msg.channel.send('Rolling die...');
                    }
                    catch(err) {
                        console.log(err);
                        msg.reply('Something went wrong with command !' + args[0]);
                    }
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

client.login('NjcwNjk1NTA4MzYwMTY3NDU0.XizUCA.N-HHiHeuyGoJtk0LEL0ib23VNe0');
