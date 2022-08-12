const _ = require('loadsh');
const { getAudioResource, DiscordAudio } = require('../tool/tool');
const { AudioPlayer, VoiceConnectionStatus } = require('@discordjs/voice');

require('dotenv').config();

let discordAudio;

const greet = msg => {
  msg.reply('안녕하세요!🐱');
};

const getUserInfo = msg => {
  const { channel } = msg;
  const guild = channel.guild;
  const members = guild.members.cache;
  const users = Array.from(members, ([key, value]) => {
    return value.user;
  });
  const userNameList = [];
  _.forEach(users, user => {
    if (!user.bot) {
      userNameList.push(`\`${user.username}\``);
    }
  });
  msg.channel.send(
    `**${guild.name} 접속한 사람** : ${userNameList.join(', ')}`,
  );
};

const sendVoiceMessage = async (msg, voice) => {
  const { resource } = getAudioResource(voice);
  if (!discordAudio) {
    discordAudio = new DiscordAudio();
    await discordAudio.setVoiceConnection({
      channelId: msg?.channel?.id,
      guildId: msg.guild.id,
      adapterCreator: msg?.guild?.voiceAdapterCreator, // voiceAdapterCreator 존재하지 않음 ..
    });
    discordAudio.audioPlayer(new AudioPlayer());

    const voiceConnection = discordAudio.voiceConnection();
    const audioPlayer = discordAudio.audioPlayer();

    if (voiceConnection.status === VoiceConnectionStatus.Connected) {
      voiceConnection.subscribe(audioPlayer);
      audioPlayer.play(resource);
    }
  }
};

module.exports = { greet, getUserInfo, sendVoiceMessage };
