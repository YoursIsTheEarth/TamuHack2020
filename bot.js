const Discord = require('discord.js');
<<<<<<< HEAD
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
    if (msg.content.startsWith('!')) {
        const cmd = msg.content.substr(1);
        if (cmd == 'ping') {
            msg.reply('pong');
        }
    }
});

client.login('token');
=======
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
>>>>>>> 25255e52c171257cf888e574dba3096860c4b593
