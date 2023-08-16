const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const showListController = require("./controllers/animeListController");
const usersController = require("./controllers/usersController");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/anime-shows", showListController);
app.use("/users", usersController);

app.get("/", (req, res) => {
  res.send("Welcome to Otaku Queue!");
});

app.get("*", (req, res) => {
  res.status(404).send("Page was not found!");
});

module.exports = app;
