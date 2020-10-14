const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let codeword = new Discord.RichEmbed()  
.setAuthor(`Valorant`, client.user.avatarURL)
.setColor('BLUE')
.setDescription(`Spectre`)  
.addField(`Spectre Valorant`)
.setImage(`https://cdn.glitch.com/e56634e6-1d42-4a6d-901d-4f403dc493f7%2Fe249d90d-4e42-4453-bd82-8c06c156cdd0.image.png?v=1602418557113`)
 message.channel.send(codeword) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["spectre","s","sp"], 
    permLevel: 0
  };
  exports.help = {
    name: 'spectre'
  }; 
  