const express = require("express");
const mongoose = require("mongoose");
const dbconnect = require("./config/connect");
const app = express();
const bodyParser = require("body-parser");
const Things = require("./model/Things");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());

app.post("/user", (req, res, next) => {
  delete req.body._id;
  const Things = new Things({
    ...req.body,
  });
  Things.save()
    .then(() => res.status(201).json({ message: "Utilisateur enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
});

app.get("/newuser", (req, res, next) => {
  Things.find()
    .then((things) => res.status(200).json(things))
    .catch((error) => res.status(400).json({ error }));
});
app.listen(process.env.PORT || 8500);
