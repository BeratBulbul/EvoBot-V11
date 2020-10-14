const Discord = require('discord.js')

exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  if(!user) return message.channel.send('')
  if (user.id === message.author.id) return message.reply('Kendini emcükleyemessin olum sakin :D');

    
  if ( message.react('😍')) {
      var gif = [
      'https://cdn.discordapp.com/emojis/750697208378294332.gif?v=1'];

      var gifler = gif[Math.floor(Math.random() * gif.length)];
  }
    
    if (message.react('😍')) {
    const op = new Discord.RichEmbed()
    .setDescription(`<@${message.author.id}>` + ` <@${user.id}>'ağlattı`)
    .setColor('RANDOM')
    .setImage(gifler)
    return message.channel.send(op)
    }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ağla',
  description: 'öp',
  usage: 'ağla'
};