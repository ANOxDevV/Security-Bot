require('dotenv').config();
require("events").EventEmitter.defaultMaxListeners = 200;
;
const GuardianClient = require('./core/client.js');
const client = new GuardianClient();
client.on("ready", async () => {
  console.log(`${client.user.username} Ready .`);
  console.log(`${client.guilds.cache.size} Servers .`);
  console.log(`${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} Users .`);
 client.user.setStatus("invisible")
  client.user.setActivity("j!help | Server ${client.guilds.cache.size} , Users ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)},", {
    type: "WATCHING"
  });
});



const Discord = require('discord.js')
    const { RichEmbed  } = require('discord.js')
   
    
    



const cooldown = new Set();
const cdtime = 10;

 const prefix = "j!";
client.on("message", async message => {
  if (message.content.startsWith(prefix+"help")) {
   if (!message.channel.guild)
      return message.channel.send(
         "**❌ | Sorry This Command Only For Servers .**")

    
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`**Please wait for 10 second**`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let help = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setFooter(message.author.username, message.author.AvatarURL)
      .setThumbnail(message.author.avatarURL())
      .setTitle(`Commands Bot Security`)
      .setDescription(`
> **Info Commands**
> \`${prefix}server\`
> \`${prefix}id\`
> \`${prefix}bot\`
> \`${prefix}uptime\`
> \`${prefix}invite\`
> \`${prefix}support\`
> \`${prefix}ping\`
> \`${prefix}uptime\`
> \`${prefix}time\`
> \`${prefix}message\`
> **Admin Commands**
> \`${prefix}ban\` 👉  @user
> \`${prefix}kick\` 👉  @user
> \`${prefix}lock\`
> \`${prefix}unlock\`
> \`${prefix}lock all\`
> \`${prefix}unlock all\`
> \`${prefix}clear\`
> \`${prefix}mute\` 👉  @user
> \`${prefix}unmute\` 👉  @user
> \`${prefix}slowmode\` 👉  **set the channel**
> \`${prefix}prefix\`
> **Security Commands**
> \`${prefix}settings\`
> \`${prefix}log\` 👉  set **#channel**
> \`${prefix}stats\`
> \`${prefix}logs\` 👉  **Someones ID**


> [\`invite bot\`](https://discord.com/api/oauth2/authorize?client_id=801755429339529236&permissions=8&scope=bot) • [\`Support\`](https://discord.gg/9n6dj99ZEN)
`);
    
    message.channel.send(help);
   
  }
});
/////////////
   client.on('message', message => {
    if (message.content.startsWith(prefix + "id")) {
    let user = message.mentions.users.first();
    if (!user) return message.channel.send('**id A member User**');
      message.channel.send(`<a:jano_28:840493514244751400>** [ ${user.username} ] Id :**<a:jano_28:840493514244751400>`);
      message.channel.send(`${user.id}`);
}
}); 
///////////////
client.on("message", prof => {
  if (prof.content.startsWith(prefix + "server")) {
    var professor = new Discord.MessageEmbed()
      .setAuthor(prof.guild.name)
      .setThumbnail(prof.guild.iconURL())
      .setTitle("`Info Server`")
      .addField("<a:jano_23:799630647513317387>`Server Name`", `**${prof.guild.name}**`)
      .addField("<a:jano_8:799290253411352586>`Owner Server:`", `**${prof.guild.owner}**`)
      .addField("<a:jano_28:799630995317850152>`Server ID`", `**${prof.guild.id}**`)
      .addField("<a:jano_6:799640680812773417>`Created`", `**${prof.guild.createdAt.toLocaleString()}**`)
      .addField("<a:jano_9:799291991523065866>`Members`", `**${prof.guild.memberCount}**`)
      .addField("<a:jano_18:799629350865338428>`Channels`", `**${prof.guild.channels.cache.size}**`)
      .addField("<a:jano_7:799288815776694273>`Region`", `**${prof.guild.region}**`)
      .addField("`Roles`", `**${prof.guild.roles.cache.size}**`)
      .setFooter(`Requested | ${prof.author.tag}`, prof.author.avatarURL())
      .setTimestamp();
    prof.channel.send(professor);
  }
});
/////////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "support")) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`[Support](https://discord.gg/9n6dj99ZEN)`)
      .setTimestamp()
      .setFooter(`By: ${message.author.tag}`)
      .setAuthor(client.user.username)
      .setThumbnail(message.author.avatarURL)
      .setColor("BLACK");
    message.channel.send(embed);
  }
});

//////////////////
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong | <a:jano_24:799630717507862558> ").then(msg => {
      var PinG = `${Date.now() - msg.createdTimestamp}`;
      var ApL = `${Math.round(client.ping)}`;
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\`\`\``);
    });
  }
});

////////////////////////
client.on("message", message => {
  if (message.content === prefix + "invite") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--><a:jano_10:799629559217389608> <a:jano_24:799630717507862558> click touch for link bot <a:jano_24:799630717507862558> <a:jano_10:799629559217389608><--=")
      .setURL(
        "https://discord.com/api/oauth2/authorize?client_id=799228179784794183&permissions=8&scope=bot"
      );
    message.channel.send(embed);
     message.react("<a:jano_27:799630916820795422>");
  }
});
/////////////
//////

client.on("message", message => {

  if (message.content.includes("discord.gg")) {
    if (!message.member.hasPermission("MANAGE_EMOJIS")) {
      message.delete();
      message.reply("```you can send partner``` <a:jano_11:799293444136108084>");
      message.react("🚫");
    }
  }
});
/////////////////////
client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.includes("@everyone")) {
    if (msg.member.hasPermission("MENTION_EVERYONE")) return;
    if (!msg.channel.guild) return;
    msg.delete();
    msg.reply("```You cant send everyone ```<a:jano_23:799630647513317387>");
  }
});

////////

client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.includes("@here")) {
    if (msg.member.hasPermission("MENTION_EVERYONE")) return;
    if (!msg.channel.guild) return;
    msg.delete();
    msg.reply("```You cant send here ``` <a:jano_23:799630647513317387>");
  }
});
////////////

/////////////
client.on("message", message => {
  if (message.content === prefix + "bot") {
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
    
      .addField("`my name`", `** ${client.user.tag} **`, true)
    
     .addField("`My ID`",  `**799228179784794183**`, true)

      .addField("`Server`", `**${client.guilds.cache.size} Server**`, true)
    
     .addField("`Usres`",  `**${client.users.cache.size}  Users**`, true)
    
     .addField( "`My Prefix` ",`**j!**`,true)
    
     .addField("`Node.js Version`",  `**12**`, true)
    
    .addField("`Language Program`",  `**Java Script**`, true)
    
    .addField("`Discord.js `",  `**12.5.1**`, true)
    
    
     .addField( "`developer bot` ",`<a:jano_25:799630801032708158> <@681553671364018196> <a:jano_25:799630801032708158>`,true)

      .setImage(
        "https://cdn.discordapp.com/attachments/696796419595567108/741981480653291570/image0-40.gif"
      );
    message.channel.send(embed);
    message.react("<a:jano_27:799630916820795422>");
  }
});
////////////////////
client.on("message", message => {
  if (message.content === prefix + "lock") {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    message.delete();

    if (!message.channel.guild) return;

    let bwan = new Discord.MessageEmbed()

      .setFooter("Has Been Channel Lock")
      .setColor("#0000ff")
    message.channel.send(bwan);

    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    });
  }
});
/////////////////
client.on("message", message => {
  if (message.content === prefix + "unlock") {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    message.delete();

    if (!message.channel.guild) return message.reply("SORRY IM IN SERVER");
    let bwan = new Discord.MessageEmbed()
      .setFooter("Has Been Channel unlock")
      .setColor("#0000ff")
    message.channel.send(bwan);

    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: true
    });
  }
});
////////////

client.on("message", message => {
  if (message.content.startsWith(prefix + "slowmode")) {
    if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("🧐 - Please Check Your Permission");
    if (
      !message.guild
        .member(message.client.user)
        .hasPermission("MANAGE_CHANNELS")
    )
      return message.channel.send(
        "🧐 - Please Check My Permission to can edit in this channel."
      );

    let time = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (isNaN(time)) return message.channel.send("**🧐 - Its not a time**");
    if (!time)
      return message.channel.send("**🧐 - Please Type a New SlowMode**");
    message.channel.setRateLimitPerUser(time);
    message.channel.send("**Done Changed A SlowMode To: " + time + "**");
  }
});
////////////////////
client.on("message", message => {
  if (message.content.split(" ")[0].toLowerCase() === prefix + "clear") {
    const word = message.content;
    const number = word.slice(7, word.length);
    const int = Number(number);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send("**Has remission MANAGE_MESSAGES**");
    }
    if (int >= 101) {
      return message.channel.send("**Not Message 100**");
    }
    if (int == "100") {
      return message.channel.send("supply A Number to Delete");
    } else if (isNaN(int)) {
      return message.reply("Number");
    }
    message.channel.bulkDelete(int).then(() => {
      return message.channel
        .send(` **Delete Message ${int}**`)
        .then(m => m.delete(500));
    });
  }
});
//////////
client.on("message", message => {
  if (message.content === prefix + "time") {
    var currentTime = new Date(),
      Year = currentTime.getFullYear(),
      Month = currentTime.getMonth() + 1,
      Day = currentTime.getDate();

    var clinet = new Discord.MessageEmbed()
      .setTitle("[ TODAY]  ")
      .setColor("RANDOM")
      .setTimestamp()
      .setDescription("" + Day + "-" + Month + "-" + Year + "");
    message.channel.send(clinet);
  }
});
//////////unmute

client.on("message", async message => {
  let args = message.content.split(" ");
  let user = message.mentions.users.first();
  if (message.content.startsWith(prefix + "unmute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check Your Permission MUTE_MEBMERS**"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check My Permission MUTE_MEBMERS**"
      );
    if (!user)
      return message.channel.send(`**${prefix}unmute <@mention Or ID>**`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.remove(mute);
    message.channel.send(`**✅ removed mute from ${user.username}!**`);
  }
  if (message.content.toLowerCase() === `${prefix}help unmute`) {
    let unmute = new Discord.MessageEmbed()
      .setTitle(`Command: unmute `)
      .addField("Usage", `${prefix}unmute @user`)
      .addField("Information", "unmute Members");
    message.channel.send(unmute);
  }
});
client.on("message", async message => {
  if (
    message.author.bot ||
    !message.guild ||
    !message.content.startsWith(prefix)
  )
    return;
  const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/),
    commandName = args.shift().toLowerCase();
  if (["ban", "kick"].includes(commandName)) {
    let mode = commandName;
    if (
      !message.member.hasPermission(
        mode == "kick" ? "KICK_MEMBERS" : "BAN_MEMBERS"
      )
    )
      return message.channel.send(
        "**❌ | You don't have Permissions do to this.**"
      );
    let user = message.guild.member(
      message.mentions.users.first() ||
        message.guild.members.cache.find(x => x.id == args[0])
    );
    if (!user) return message.channel.send("**❌ | Member not found!**");
    let bot = message.guild.member(client.user);
    if (user.user.id == client.user.id) return message.channel.send("lol no");
    if (user.user.id == message.guild.owner.id)
      return message.channel.send(`**❌ | You can't ${mode} the owner!**`);
    if (
      user.roles.highest.position >= message.member.roles.highest.position &&
      message.author.id !== message.guild.ownerID
    )
      return message.channel.send(
        `**❌ | You can't ${mode} people higher ranked than yourself!**`
      );
    if (user.roles.highest.position >= bot.roles.highest.position)
      return message.channel.send(
        `**❌ | I can't ${mode} people who are higher ranked than me!**`
      );
    if (!user[`${mode == "ban" ? "bann" : mode}able`])
      return message.channel.send(
        `**❌ | Specified user is not ${mode}able.**`
      );
    user[mode](
      mode == "ban"
        ? { days: 7, reason: `Banned by ${message.author.tag}` }
        : `Kicked by ${message.author.tag}`
    )
      .then(() =>
        message.channel.send(`
           Moderator: <@${message.author.id}>
**<:emoji_58:861993831242137630> ${mode == "ban" ? "Bann" : mode}ed ${user.user.tag}**`
        )
      )
      .catch(console.error);
  }
});


client.on("guildCreate", guild => {
   let channel = client.channels.cache.get("861391859196493824");
  const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle(`Joined!`)
    .setDescription(`
 **Name server: ${guild.name} **
**Server Owner: ${guild.owner}**
**ID Server: ${guild.id} **
**member count ${guild.memberCount}**
**Created at: ${guild.createdAt}**
**Verification Level: ${guild.verificationLevel}**
**thanks for invite bot  🤖 **
    `);
channel.send(embed);

});
client.on("guildDelete", guild => {
  let channel = client.channels.cache.get("861391859196493824");
  const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle(`Kicked!`)
    .setDescription(`
**Name server: ${guild.name}**
**Server Owner: ${guild.owner}**
**ID Server: ${guild.id}**
**member count: ${guild.memberCount}**
**Created at : ${guild.createdAt}**
**Verification Level: ${guild.verificationLevel}**
   ` );
 channel.send(embed);
});



client.on("message", msg => {
  if (msg.content === prefix + "lock all") {
    if (!msg.member.hasPermission("ADMINISTRATOR"))  return;
    msg.guild.channels.cache.forEach(c => {
      c.updateOverwrite(msg.guild.id, {
        SEND_MESSAGES: false,
      
      });
    });
    msg.channel.send("🔒 | All Channels Locked");
  }
});
 
client.on("message", msg => {
  if (msg.content === prefix + "unlock all") {
    if (!msg.member.hasPermission("ADMINISTRATOR"))  return;
    msg.guild.channels.cache.forEach(c => {
      c.updateOverwrite(msg.guild.id, {
        SEND_MESSAGES: true,
      
      });
    });
    msg.channel.send("🔓 | All Channels Unlocked");
  }
});


client.on('message',async message => {
  if(message.content.startsWith(prefix + "uptime")) { 
    let rozh= Math.floor(client.uptime / 86400000);
    let katzhmer= Math.floor(client.uptime / 3600000) % 24;
    let daqa= Math.floor(client.uptime / 60000) % 60;
    let chrka= Math.floor(client.uptime / 1000) % 60;
    
    return message.channel.send(`__Uptime:__\n${rozh}d ${katzhmer}h ${daqa}m ${chrka}s`);
  }
  
})


client.on("message", message => {
  if (message.content.startsWith(prefix + "messages")) {
    let args = message.content.split(" ").slice(1);
    if (!message.member.hasPermission("OWNERSHIP"))
      return message.reply("you dont have a Permission");

    var user = message.mentions.users.first();
    var rn = args.slice(1).join(" ");
    let em = new Discord.MessageEmbed()
      .setTitle("Error :")
      .setColor("808080")
      .setDescription(
        `
  **Usage:**
 ${prefix}messages (user) (reason)
  ${prefix}messages ${message.author} 
  ${prefix}messages ${message.author}  test
 
  `
      )
      .setAuthor(message.author.username, message.author.avatarURL());
    if (!user) return message.channel.send(em);

    let ffg = new Discord.MessageEmbed()
      .setColor("#080808")
      .setTimestamp()
      .setTitle("Warned!")
      .setDescription(
        `


 warned by  : ${message.author.username}
 reason     : ${rn}


  `
      )
      .setAuthor(message.author.username, message.author.avatarURL())
      .setFooter(``);
    message.channel.send(ffg);
    user.send(ffg);
    message.delete();
  }
});




client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(JxA => {
          message.guild.unban(JxA);
        });
      });
      return message.channel.send(
        "** <:emoji_5:852675815976337418>Unban all members **"
      );
    }
    if (!args)
      return message.channel.send("**Please Type the member ID / all**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(
          `**<:emoji_5:852675815976337418> Unban this member ${m.username}**`
        );
      })
      .catch(stry => {
        message.channel.send(
          `**I can't find that person \`${args}\` in ban list**`
        );
      });
  }
});

////////////////
////////////////// join server
client.on('guildCreate', guild => {
client.channels.cache.get("867612989166059550").send(`
✅ **Join Server**: ${client.guilds.cache.size}
🔠 **Server Name**: ${guild.name}
👑 **Server Owner**: ${guild.owner}
🆔 **Server Id**: ${guild.id}
👥 **Member Count**: ${guild.memberCount}**`)
});
///////////////// left server
client.on('guildDelete', guild => {
  client.channels.cache.get("867613033726214173").send(`
❎ **Lift Server**: ${client.guilds.cache.size}
🔠 **Server Name**: ${guild.name}
👑 **Server Owner**: ${guild.owner}
🆔 **Server Id**: ${guild.id}
👥 **Member Count**: ${guild.memberCount}**`)
});



client.login("ODY3MjA4MzU5MzM3Mzk0MTk0.YPdwuA.uOBMfZpS1QI785Yx2JowELyxxpc");
