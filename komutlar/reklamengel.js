const db = require('wio.db');
const Discord = require('discord.js')

exports.run = (client, message, args, func) => {

  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
    if(!args[0]) return message.channel.send("Doğru kullanım `a.reklamengel aç/kapat`")
      if(args[0] === "aç"){
    var anahtar = db.fetch(`narcosreklamengell_${message.guild.id}`)
    if(anahtar === "acik") return message.channel.send("Zaten açık!!")
    db.set(`narcosreklamengell_${message.guild.id}`, 'acik')
    message.channel.send(`Reklam engel sistemi açıldı !!`)
   }
    if(args[0] === "kapat") {
      var anahtar = db.fetch(`narcosreklamengell_${message.guild.id}`)
      if(!anahtar) return message.channel.send("Zaten kapalıymış.")
      db.delete(`narcosreklamengell_${message.guild.id}`)
      message.channel.send("Başarıyla kapatıldı")
          
     
    }
     
 
  
  
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['link-engel'],
    permLevel: 0
};
  
  exports.help = {
    name: 'reklamengel',
    description: '',
    usage: 'reklam-engel'
};

  ////reklam-engel\\\\


client.on("message", async msg => {
    var anahtar = await db.fetch(`narcosreklamengell_${msg.guild.id}`);
    if (anahtar === "acik") {
      const linkler = [
        "http",
        "https",
        ".com",
        ".net",
        ".xyz",
        ".tk",
        ".io",
        ".org",
        ".cf",
        ".ml",
        ".qa",
        ".club",
        ".gg",
        "discord.gg/"
      ];
      if (linkler.some(link => msg.content.includes(link))) {
        if (!msg.member.hasPermission("ADMINISTRATOR")) {
          msg.guild.owner.send("Sunucunuzda bir kişi reklam yaptı. \nKullanıcı: "+ msg.author.tag +" \nMesaj: **"+ msg +"** ");
          msg.delete().then(msg.reply("Reklam yapmak yasak dostum D:"))
         
        } 
      }
    }
    if (!anahtar) return;
  });

