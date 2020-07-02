const mongoose = require("mongoose");

const DBconnect = mongoose
  .connect(
    "mongodb+srv://dbUser:1234567890123456789@cluster0.ccjlg.mongodb.net/sample_restaurants?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("db connected"))
  .catch((err) => console.log("error conection ", err))
//   .then(mongoose.disconnect())
//   .then(() => console.log("db disconnected"));
exports.model = DBconnect;
