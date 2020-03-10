const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () =>{
    console.log('Connected as ' + client.user.tag)
});

bot_secret_token = "secret-token-don't-share-this-with-anyone";

client.login(bot_secret_token);

client.on('message', (m) => {
    if (m.content.toLowerCase() === "what is pyro?") {
        m.channel.send("pyro is a loser!")
    }
});
