const Discord = require('discord.js')
const moment = require('moment')
const date = moment()
const config = require("./config.json");
const client = new Discord.Client();

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  if(client.guilds.size == 1){
	  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} server.`);
	  client.user.setActivity(`Serving ${client.guilds.size} server use !bruh help`);
  }
  else{
	  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} servers.`);
      client.user.setActivity(`Serving ${client.guilds.size} servers use !bruh help`);
  }
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.

    let channelID;
    let channels = guild.channels;
    channelLoop:
    for (let c of channels) {
        let channelType = c[1].type;
        if (channelType === "text") {
            channelID = c[0];
            break channelLoop;
        }
    }

    let channel = client.channels.get(guild.systemChannelID || channelID);
  channel.send("@everyone BRUH MOMENT just got in fuck ya all\nUse `!bruh` for the prefix");
  channel.send({embed: {
    color: 16752896,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "BRUH",
    fields: [{
        name: "ping",
        value: "Returns users ping."
      },
      {
        name: "purge",
        value: "delets message select a number between 2 and 100(admin only)."
      },
      {
        name: "Time",
        value: "Tells the current time."
      }
    ],
    footer: {
      text: 'Bot made by Nbc66 and STANN.co'
    }
  }
});
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  if(client.guilds.size == 1){
	  client.user.setActivity(`Serving ${client.guilds.size} server use !bruh help`);
  }
  else{
      client.user.setActivity(`Serving ${client.guilds.size} servers use !bruh help`);
  }
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild/server.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  if(client.guilds.size == 1){
	  client.user.setActivity(`Serving ${client.guilds.size} server use !bruh help`);
  }
  else{
      client.user.setActivity(`Serving ${client.guilds.size} servers use !bruh help`);
  }
});


//IMPORTANT STANN READ
//IMPORTANT STANN READ
//IMPORTANT STANN READ
//IMPORTANT STANN READ



//STANN we will use this function for the main commands it cheks if the prefix has been fired with the corresponding command
//and the bot then dose its magic
client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
   const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
   const command = args.shift().toLowerCase();
  // ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop
  if(message.author.bot) return;

  if(command === "help")
 message.reply({embed: {
    color: 16752896,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "BRUH",
    fields: [{
        name: "ping",
        value: "Returns users ping."
      },
      {
        name: "purge",
        value: "delets message select a number between 2 and 100(admin only)."
      },
      {
        name: "Time",
        value: "Tells the current time."
      }
    ],
    footer: {
      text: 'Bot made by Nbc66 and STANN.co'
    }
  }
});
   if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
   
   if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.


    if(!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("Sorry, you don't have permissions to use this!");

	// get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);

    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");

    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }

  if(command === "time"){
	  message.channel.send("`\n"+moment().format("dddd, MMMM Do YYYY, h:mm:ss a")+"\n`")
	  console.log(`Time command triggerd\nCurrent time is: ${moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}`)
  }
});


client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }

	//case null !== msg.match(/bnigger/b):

	let reply;
	let respond = false;
	msg = receivedMessage.content.toLowerCase();
	switch(true) {
		case null !== msg.match("\\bnigger\\b"):
		case null !== msg.match("\\bnigga\\b"):
		case null !== msg.match("\\bnig\\b"):
		case null !== msg.match("\\bnigz\\b"):
		case null !== msg.match("\\bnignog\\b"):
		case null !== msg.match("\\bnibba\\b"):
		case null !== msg.match("\\bnib\\b"):
		case null !== msg.match("\\bnegro\\b"):

			reply = "Time to change the server name...   "+receivedMessage.author.toString();
			let name = receivedMessage.author.username;
			receivedMessage.guild.setName(name + " said the N-word");

			respond = true;
			break;

		case null !== msg.match("\\bbruh\\b"):
			reply = "BRUH\n https://www.youtube.com/watch?v=NzishIREebw";
			respond = true;
			break;
		//case msg.includes("so guys we did it"):
		//	reply = "we reached a quarter of a million subs";
		//	respond = true;
		//	break;
		//case msg.includes("<@81433262831968256> is gay"):
		//    reply = "https://www.youtube.com/watch?v=XDXrP9HET2A";
		//	respond = true;
		//	break;
		//case msg.includes("what day is it"):
		//    reply = "https://www.youtube.com/watch?v=du-TY1GUFGk"
		//	respond = true;
		//	break;
		//case msg.includes("porn"):
		//case msg.includes("sex"):
		//case msg.includes("r34"):
		//case msg.includes("rule 34"):
		//case msg.includes("hentai"):
		//    reply = "https://www.youtube.com/watch?v=9y4JwyjdY4E";
		//	respond = true;
		//	break;
		default:
			respond = false;
			break;
	}
	if(respond){
		receivedMessage.channel.send(reply);
	}
})

client.login("NTg2MTk5MzU3ODc1ODE0NDIw.XPkzrw.G9ZFFcHjU-KNhP07YIaBqksL48U")
