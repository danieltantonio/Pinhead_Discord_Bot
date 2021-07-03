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
            embed.setAuthor(message.author.username);
            message.attachments.each(msg => {
                embed.setImage(msg.attachment);
            });

            pinchannel.send(embed);
        } else {
            console.log('poop');
        }

        // pinchannel.send('It works');
    }
})

client.login(process.env.TOKEN);