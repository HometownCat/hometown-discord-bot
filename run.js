const { Client, Intents } = require('discord.js');
require('dotenv').config();

const messageManager = require('./manager/message');

const discord_token = process.env.BOT_TOKEN;
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
  console.log('Ready!');
});
messageManager(client);

client.on('channelCreate', channel => {
  channel.send(`**${channel.name}** 채널이 생성되었습니다.`);
});
client.login(discord_token);
