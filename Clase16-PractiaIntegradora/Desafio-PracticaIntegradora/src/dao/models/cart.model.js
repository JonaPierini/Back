const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  products: {
    type: [String],
  },
});

module.exports = cartSchema;
