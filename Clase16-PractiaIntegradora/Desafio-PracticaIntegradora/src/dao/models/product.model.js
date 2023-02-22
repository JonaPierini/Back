const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: { type: String, unique: true, required: true, max: 30 },
  description: {
    type: String,
    required: true,
    max: 80,
    validate: {
      validator: function (v) {
        return v.trim().length > 0;
      },
      message: 'El campo "title" no puede estar vacío.',
    },
  },
  price: { type: Number, required: true },
  image: {
    type: String,
    default:
      "https://www.mrpanet.org/global_graphics/default-store-350x350.jpg",
  },
});

module.exports = productSchema;
