require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('💜 Connected to Discord 💜');
});

client.on('message', async message => {
    if(message.content.split(' ')[0] === "!pin") {
        const pinchannel = message.guild.channels.cache.get('749498286590787624');
        const embed = new Discord.MessageEmbed();

        if(message.attachments.size) {
            const pinMessageArr = message.content.split(' ');
            pinMessageArr.shift();
            
            const pinMessage = pinMessageArr.join(' ');

            embed.setAuthor(message.author.username);
            embed.setDescription(pinMessage);
            message.attachments.each(msg => {
                embed.setImage(msg.attachment);
            });
            
            const timestamp = new Date(message.createdTimestamp);
            pinchannel.send(`Pinned @ ${timestamp}\nPinned by: ${message.author}`, embed);
        } else {
            console.log('poop');
        }

        // pinchannel.send('It works');
    }
});

client.login(process.env.TOKEN);