require('dotenv').config();
const discordTTS = require('discord-tts');
const BOT_ID = process.env.BOT_ID;
const {
  AudioPlayer,
  createAudioResource,
  StreamType,
  entersState,
  VoiceConnectionStatus,
  joinVoiceChannel,
} = require('@discordjs/voice');

class DiscordAudio {
  constructor() {}
  async setVoiceConnection({ channelId, guildId, adapterCreator }) {
    if (
      !this._voiceConnection ||
      voiceConnection?.status === VoiceConnectionStatus.Disconnected
    ) {
      this._voiceConnection = joinVoiceChannel({
        channelId,
        guildId,
        adapterCreator,
      });
      voiceConnection = await entersState(
        voiceConnection,
        VoiceConnectionStatus.Connecting,
        5_000,
      );
    }
  }
  get voiceConnection() {
    return this._voiceConnection;
  }
  set audioPlayer(audioPlayer) {
    if (!this._audioPlayer) {
      this._audioPlayer = audioPlayer;
    }
  }
  get audioPlayer() {
    return this._audioPlayer;
  }
}

const getCondition = (condition, id) => {
  if (condition && id !== BOT_ID) {
    return true;
  }
  return false;
};

const getAudioResource = voice => {
  const stream = discordTTS.getVoiceStream(voice);
  const resource = createAudioResource(stream, {
    inputType: StreamType.Arbitrary,
    inlineVolume: true,
  });
  return {
    stream,
    resource,
  };
};

module.exports = {
  getCondition,
  getAudioResource,
  DiscordAudio,
};
