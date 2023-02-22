const mongoose = require("mongoose");

mongoose.connect(process.env.STRING_CONNECTION, (error) => {
  if (error) {
    console.log("Cannot connect to db");
    process.exit();
  }
});

module.exports = mongoose;
