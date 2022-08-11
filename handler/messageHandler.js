const _ = require('loadsh');
require('dotenv').config();

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

module.exports = { greet, getUserInfo };
