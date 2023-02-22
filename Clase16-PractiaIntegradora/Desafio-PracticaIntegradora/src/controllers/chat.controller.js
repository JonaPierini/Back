const {
  getMessagesServices,
  addMessageServices,
} = require("../services/chat.service");

const getMessages = async () => {
  try {
    const messages = await getMessagesServices();

    return messages;
  } catch (error) {
    throw Error(error);
  }
};

const addMessages = async (message) => {
  try {
    if (!message.user || !message.message) throw Error("Fields missing");
    const result = await addMessageServices(message);
    return result;
  } catch (error) {
    throw Error(error);
  }
};

module.exports = { getMessages, addMessages };
