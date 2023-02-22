const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  user: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
});

module.exports = messageSchema;
