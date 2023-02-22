const { Server } = require("socket.io");
const app = require("./server");
const http = require("http");
const httpServer = http.createServer(app);
const io = new Server(httpServer);
const { getMessages, addMessages } = require("./controllers/chat.controller");

const recoverMessages = async () => {
  const messages = await getMessages();
  return messages;
};

io.on("connection", async (socket) => {
  socket.emit("all messages", await recoverMessages());
});

module.exports = {
  httpServer,
  addMessages: async function (message) {
    await addMessages(message);
    io.emit("all messages", await recoverMessages());
  },
};
