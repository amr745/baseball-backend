const mongoose = require("mongoose");

const PlayersSchema = new mongoose.Schema({
    name: String,
    image: String,
    position: String,
    team: String,
  })

const Players = mongoose.model("Players", PlayersSchema)

module.exports = Players