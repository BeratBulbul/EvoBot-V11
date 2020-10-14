const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let codeword = new Discord.RichEmbed()  
.setAuthor(`Valorant`, client.user.avatarURL)
.setColor('BLUE')
.setDescription(`Shorty`)  
.addField(`Shorty Valorant`)
.setImage(`https://cdn.glitch.com/e56634e6-1d42-4a6d-901d-4f403dc493f7%2F809eab77-8e8e-4080-bc36-a9f6a3726f23.image.png?v=1602418895014`)
 message.channel.send(codeword) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["shorty"], 
    permLevel: 0
  };
  exports.help = {
    name: 'shorty'
  }; 
  