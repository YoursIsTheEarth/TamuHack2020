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

const token = process.env.DISCORD_TOKEN;
if (!token) {
    console.error('Set the DISCORD_TOKEN environment variable before starting the bot.');
    process.exit(1);
}

client.login(token);
