const { greet, getUserInfo } = require('../handler/messageHandler');
const { getCondition } = require('../tool');
messageManager = client => {
  client.on('message', msg => {
    console.log('message');
    const { content, author } = msg;
    if (getCondition(content.includes('안녕'), author.id)) {
      greet(msg);
    } else if (getCondition(content === '유저 정보', author.id)) {
      getUserInfo(msg);
    }
  });
};

module.exports = messageManager;
