const mongoose = require("mongoose");

const DBconnect = mongoose
  .connect(
    "mongodb+srv://add_user:RP3Y1LGtKWrcSPsa@simplon.ccjlg.mongodb.net/lital?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB reussie"))
  .catch((err) => console.log("Connexion à MongoDB erronée ", err));
//   .then(mongoose.disconnect())
//   .then(() => console.log("db disconnected"));
exports.model = DBconnect;
