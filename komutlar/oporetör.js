const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let codeword = new Discord.RichEmbed()  
.setAuthor(`Valorant`, client.user.avatarURL)
.setColor('BLUE')
.setDescription(`Oporatör`)  
.addField(`Oporatör Valorant`)
.setImage(`https://cdn.glitch.com/e56634e6-1d42-4a6d-901d-4f403dc493f7%2F69a611b9-33b5-41a5-9038-d6c67645d765.image.png?v=1602419014619`)
 message.channel.send(codeword) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["oporatör"], 
    permLevel: 0
  };
  exports.help = {
    name: 'oporatör'
  }; 
  