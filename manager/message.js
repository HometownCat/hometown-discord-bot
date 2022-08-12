const {
  greet,
  getUserInfo,
  sendVoiceMessage,
} = require('../handler/messageHandler');
const { getCondition } = require('../tool/tool');

messageManager = client => {
  client.on('message', msg => {
    const { content, author } = msg;
    if (getCondition(content.includes('안녕'), author.id)) {
      greet(msg);
    } else if (getCondition(content === '유저 정보', author.id)) {
      getUserInfo(msg);
    }
    // else if (getCondition(content === 'tts', author.id)) {
    //   sendVoiceMessage(msg, '어쩔티비');
    // }
  });
};

module.exports = messageManager;
