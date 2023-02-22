const messageSchema = require("../dao/models/message.model");
const ChatManager = require("../dao/mongoDb/chat.dao");

const chatDAO = new ChatManager("messages", messageSchema);

const getMessagesServices = async () => {
  try {
    let response = await chatDAO.getAllMessages();
    return response;
  } catch (error) {
    throw Error(error);
  }
};

const addMessageServices = async (message) => {
  try {
    let response = await chatDAO.createMessage(message);
    return response;
  } catch (error) {
    throw Error(error);
  }
};

module.exports = { getMessagesServices, addMessageServices };
