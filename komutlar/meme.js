const Discord = require('discord.js');
const superagent = require('superagent');


exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'boobs'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    msg.channel.send("BU KANAL NSFW DEĞİL")
   }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['meme','memecik'],
  permLevel: 0
};

exports.help = {
  name: 'meme',
  description: 'NSFW Resimleri Gösterir',
  usage: 'meme'
};