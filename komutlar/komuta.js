const Discord = require('discord.js');
exports.run = function(client, message, args) {
      const komutsayısı = new Discord.RichEmbed()
      .setAuthor(`komutsayası`)
      .setDescription(client.commands.size || 0)
      .setColor('BLUE')  
      message.channel.sendEmbed(komutsayısı)
};  
exports.conf = {
  enabled: false, 
  guildOnly: false, 
  aliases: ['k'],
  permLevel: 0 
};
exports.help = {
  name: 'komutsayısı'
};
