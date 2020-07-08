const mongoose = require("mongoose");
  
const objSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userMail: { type: String, required: true },
  passWord: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userPhone: { type: Number, required: true },
  userPost: { type: String, required: true },
});

module.exports = mongoose.model("user", objSchema);
