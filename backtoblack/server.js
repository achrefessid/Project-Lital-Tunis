const express = require("express");
const mangoos = require("mongoose");
const dbconnect = require("./config/connect");
const app = express();
app.get("/", function (req, res) {
  res.send("Hello World");
});
app.listen(8500);
