const Discord = require('discord.js');
const superagent = require('superagent');


exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'pgif'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    msg.channel.send("**BU KANAL NSFW DEĞİL** https://cdn.glitch.com/e56634e6-1d42-4a6d-901d-4f403dc493f7%2Ff1523470-f52b-4254-8520-c7b58af1b6c7.image.png?v=1602499660472")
   }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['porno','4k'],
  permLevel: 0
};

exports.help = {
  name: 'pgif',
  description: 'NSFW Resimleri Gösterir',
  usage: 'pgif'
};