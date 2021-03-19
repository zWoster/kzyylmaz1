const Discord = require("discord.js")
exports.run = async(client, message, args) => {

const embed = new Discord.MessageEmbed()   
.addField("Selam, beni buradan davet edebilirsin","[TIKLA](https://discord.com/oauth2/authorize?client_id=822058237133193257&scope=bot&permissions=8)")
message.channel.send(embed);
  };

  module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
  };

  module.exports.help = {
    name: "davet",
    description: "Davet linki",
    usage: "Davet Linki"
  };