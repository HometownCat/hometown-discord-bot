require('dotenv').config();

const BOT_ID = process.env.BOT_ID;

const getCondition = (condition, id) => {
  if (condition && id !== BOT_ID) {
    return true;
  }
  return false;
};

module.exports = { getCondition };
