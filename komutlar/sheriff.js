const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let codeword = new Discord.RichEmbed()  
.setAuthor(`Valorant`, client.user.avatarURL)
.setColor('BLUE')
.setDescription(`SHERIFF`)  
.addField(`SHERIFF Valorant`)
.setImage(`https://cdn.glitch.com/e56634e6-1d42-4a6d-901d-4f403dc493f7%2Fd443299a-1828-4fe0-b682-69ddc8bf1924.image.png?v=1602418716746`)
 message.channel.send(codeword) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["sheriff","s","sh"], 
    permLevel: 0
  };
  exports.help = {
    name: 'sheriff'
  }; 
  