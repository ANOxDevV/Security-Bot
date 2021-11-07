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
  client.user.setActivity("h!help", {
    type: "PLAYING"
  });
});



const Discord = require('discord.js')
    const { RichEmbed  } = require('discord.js')
   
    
    



const cooldown = new Set();
const cdtime = 10;

 const prefix = "h!";
client.on("message", async message => {
  if (message.content.startsWith(prefix+"help")) {
   if (!message.channel.guild)
      return message.channel.send(
         "**❌ | Sorry This Command Only For Servers .**")

    
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`⏳ | Please wait for 10 second`)
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
      .setTitle(`The Command List Of Bot`)
      .setDescription(`
> **Info Commands**
> \`${prefix}user \`
> \`${prefix}bot list \`
> \`${prefix}invite \`
> \`${prefix}support \`
> \`${prefix}ping \`
> \`${prefix}say \`
> \`${prefix}time \`
> **Admin Commands**
> \`${prefix}ban \` 👉  @user
> \`${prefix}kick \` 👉  @user
> \`${prefix}lock \`
> \`${prefix}unlock \`
> \`${prefix}lock all \`
> \`${prefix}unlock all \`
> \`${prefix}clear \`
> \`${prefix}mute \` 👉  @user
> \`${prefix}unmute \` 👉  @user
> \`${prefix}slowmode \` 👉  **set the channel**
> \`${prefix}prefix \`
> **Security Commands**
> \`${prefix}settings \`
> \`${prefix}log \` 👉  set **#channel**
> \`${prefix}stats \`
> \`${prefix}logs \` 👉  **Someones ID**

**use onle owner ship or administrator or MENTION_EVERYONE send [@everyone]**

**anti link use onle owner ship ord administrator or manage emoji send [anti partner]**

[\`invite bot\`](https://discord.com/api/oauth2/authorize?client_id=890777487108370462&permissions=8&scope=bot) • [\`Support\`](https://discord.gg/dTNKbPXw9Y)
`);

    message.channel.send(help);
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
      .setTitle("[ TODAY ]")
      .setColor("BLACK")
      .setTimestamp()
      .setDescription("" + Day + "-" + Month + "-" + Year + "");
    message.channel.send(clinet);
  }
});
//////////////////
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong | :signal_strength:").then(msg => {
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
      .setTitle("=--> click touch for link bot <--=")
      .setURL(
        "https://discord.com/api/oauth2/authorize?client_id=890777487108370462&permissions=8&scope=bot"
      );
    message.channel.send(embed);
     message.react(":white_check_mark:");
  }
});
/////////////
client.on("message", message => {

  if (message.content.includes("discord.gg")) {
    if (!message.member.hasPermission("MANAGE_EMOJIS")) {
      message.delete();
      message.reply("```you can send partner```:x:");
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
    msg.reply("```You cant send everyone ```:x:");
  }
});

////////

client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.includes("@here")) {
    if (msg.member.hasPermission("MENTION_EVERYONE")) return;
    if (!msg.channel.guild) return;
    msg.delete();
    msg.reply("```You cant send here ```:x:");
  }
});
/////////////


client.on("message", async message => {
  if (message.content.startsWith(prefix + "lock")) {
    if (!message.channel.guild)
      return message.channel.send(
        "**❌ | Sorry This Command Only For Servers .**"
      );

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    });
     const lock = new Discord.MessageEmbed()
     
      .setColor("#00000")
      .setDescription(
        `🔒 | **Locked Channel**
Channel Name : <#${message.channel.id}>
Locked By : <@${message.author.id}>
Channel Status : Send Message : ❌
`
      )
      .setThumbnail(message.author.avatarURL())
     .setFooter(`${message.author.tag}`, message.author.avatarURL())
          .setTimestamp()

    message.channel.send(lock);
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "unlock")) {
    if (!message.channel.guild)
      return message.channel.send(
         "**❌ | Sorry This Command Only For Servers .**"
      );

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: null
    });
    const unlock = new Discord.MessageEmbed()
      .setColor("#00000")
      .setDescription(
        `🔓 | **UnLocked Channel**
Channel Name : <#${message.channel.id}>
Locked By : <@${message.author.id}>
Channel Status : Send Message : ✅
`
      )
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send(unlock);
  }
});

    
 
client.on("message", async message => {
  if (message.content.startsWith(prefix + "support")) {
     if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`⏳ | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let invite = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username)
      .setTitle(
        "**==> CLICK HERE TO  SUPPORT SERVER <==**"
      )
      .setURL(
        `https://discord.gg/9n6dj99ZEN`)
   .setTimestamp()
         .setTimestamp()

    message.channel.send(invite);
  message.react("✅");
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "nick")) {
    if (!message.guild.member(message.author).hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send("Please Check Your Permission.");
    if (!message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send("Please Check My Permission.");
    let user = message.mentions.users.first();

    if (!user)
      return message.channel.send(`**${prefix}nick @mention nickname**`);
    let args = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!args)
      message.guild
        .member(user)
        .setNickname("")
        .then(m => {
          message.channel.send(
            " " + user.username + " has been reseted nickname "
          );
        })
        .catch(error => {
          message.channel.send("Error: **" + error.message + "**");
        });
    message.guild
      .member(user)
      .setNickname(args)
      .then(m => {
        let embed = new Discord.MessageEmbed()
          .setTitle("Nicknamed User!")
          .setColor("RANDOM")
          .setThumbnail(message.author.avatarURL)
           .setFooter(message.author.username,  `https://cdn.discordapp.com/emojis/771689685579333673.gif?v=1`
)
          .setTimestamp()

          .setDescription(
            "**User**: ```" +
              user.username +
              "```\n**By**: ```" +
              message.author.username +
              "```\n**Nickname**: ```" +
              args +
              "``` "
          );
        message.channel.send(embed);
      })
      .catch(error => {
        message.channel.send("Error: **" + error.message + "** ");
      });
  }
  if (message.content.toLowerCase() === prefix + "help nick") {
    let nick = new Discord.MessageEmbed()
      .setTitle(`Command: nick`)
      .addField("Usage", `${prefix}nick @user nickname`)
      .addField("Information", "Nicknames");
    message.channel.send(nick);
  }
});
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

client.on("message", message => {
  if (!message.guild) return;
  if (message.author.bot) return;
  let args = message.content.split(" ");
  let command = args[0].toLowerCase();
  if (command === prefix + "clear") {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `❌ You are missing the permission \`MANAGE MESSAGES\`.`
      );
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `❌ I Am missing the permission \`MANAGE MESSAGES\`.`
      );
    if (!args[1]) {
      message.channel
        .bulkDelete(100)
        .then(m =>
          message.channel
            .send(`\`\`\`\nDeleted ${m.size} messages\n\`\`\``)
            .then(p => p.delete({ timeout: 3000 }))
        );
    } else {
      message.delete().then(n => {
        message.channel
          .bulkDelete(args[1])
          .then(m =>
            message.channel
              .send(`\`\`\`\nDeleted ${m.size} messages\n\`\`\``)
              .then(p => p.delete({ timeout: 3000 }))
          );
      });
    }
  }
});
client.on("message", prof => {
  if (prof.content.startsWith(prefix + "user")) {
   
    var professor = new Discord.MessageEmbed()
      .setAuthor(client.user.username)
      .setThumbnail(client.user.avatarURL())
      .setColor("#0c0b0b")
      .setTitle("Your Info User")
      .addField(" ▶️| Your Name", `<@${prof.author.id}>`)
      .addField(" 🆔| Your ID", `${prof.author.id}`)
      .addField(" 🌐| Create User", prof.author.createdAt.toLocaleString())
      .setFooter(`Requested | ${prof.author.tag}`, prof.author.avatarURL())
      .setTimestamp();
    prof.channel.send(professor);
  }
});
client.on("message", async message => {
  let args = message.content.split(" ");
  let user =
    message.mentions.users.first() || message.guild.members.cache.get(args[1]);
  if (message.content.startsWith(prefix + "mute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check Your Permission MUTE_MEBMERS**"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check My Permission MUTE_MEBMERS**"
      );
    if (!user)
      return message.channel.send(`**${prefix}mute <@mention Or ID>**`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    if (!mute)
      mute = await message.guild.roles.create({
        data: {
          name: "Muted",
          color: "#0000",
          permissions: []
        }
      });
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.add(mute);
    message.channel.send(`**❌ ${user.username} has been muted!**`);
  }
  if (message.content.toLowerCase() === `${prefix}help mute`) {
    let mute = new Discord.MessageEmbed()
      .setTitle(`Command: Mute `)
      .addField("Usage", `${prefix}mute @user`)
      .addField("Information", "Mute Members");
    message.channel.send(mute);
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
        message.channel.send(
          `**✅ ${mode == "ban" ? "Bann" : mode}ed ${user.user.tag} from the server! :airplane: **`
        )
      )
      .catch(console.error);
  }
});




client.on("message", message => {
  if (message.content.startsWith(prefix + "bot list")) {
    var list_all = [];
    message.guild.members.cache.forEach(client => {
      if (!client.user.bot) return;
      list_all.push(`<@${client.user.id}>`);
    });
    message.channel.send(list_all.join(", "));
  }
});
client.on("message", msg => {
  if (msg.content === prefix + "lock all") {
    if (!msg.member.hasPermission("ADMINISTRATOR"))  return;
    msg.guild.channels.cache.forEach(c => {
      c.updateOverwrite(msg.guild.id, {
        SEND_MESSAGES: false,
      
      });
    });
    msg.channel.send("🔒 | **All Channels Locked**");
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
    msg.channel.send("🔓 | **All Channels Unlocked**");
  }
});
////////////////////
client.on("message", message => {
  let commands = message.content.split(" ");
  if (commands[0] == prefix + "say") {
    if (!message.guild) return;
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
      return message.reply("**You Dont Have `ADMINISTRATOR` Permission ** :x:");
    if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR"))
      return message.reply(
        "Please Check My Role Permission To `ADMINISTRATOR :x: "
      );
    var args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) {
      return message.channel.send("`Usage : " + prefix + "say <message>`");
    }
    message.delete();
    var embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`${args}`)
      .setFooter(`By ${message.author.tag}`);
    message.channel.send(embed);
  }
});
////////////




 ////////////////////
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


client.login("");
