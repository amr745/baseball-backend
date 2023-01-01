// Import JSON files
const Players = require("../models/PlayersSchema")
const playersData = require('../data/playersData')

///////////////////////////////
// CONTROLLERS
///////////////////////////////

// SEED
const seed = async (req, res) => {
  try {
    await Players.deleteMany({});
    res.status(201).json(await Players.create(playersData))
  } catch (error) {
    res.status(400).json(error)
  }
};

// INDEX
const index = async (req, res) => {
    try {
      // send all players
      res.status(200).json(await Players.find({}))
    } catch (error) {
      //send error
      res.status(400).json(error)
    }
}

// DELETE
const deletePlayer = async (req, res) => {
    try {
      // send all players
      res.status(204).json(await Players.findByIdAndDelete(req.params.id))
    } catch (error) {
      //send error
      res.status(400).json(error)
    }
}

// UPDATE
const update = async (req, res) => {
    try {
      // send all players
      res.status(200).json(await Players.findByIdAndUpdate(req.params.id, req.body, { new: true }))
    } catch (error) {
      //send error
      res.status(400).json(error)
    }
}

// CREATE
const create = async (req, res) => {
    try {
      // send all players
      res.status(201).json(await Players.create(req.body))
    } catch (error) {
      //send error
      res.status(400).json(error)
    }
}

// SHOW
const show = async (req, res) => {
    try {
      //send one player
      res.status(200).json(await Players.findById(req.params.id))
    } catch (error) {
      //send error
      res.status(400).json(error)
    }
};

  module.exports = {
    index,
    seed,
    delete: deletePlayer,
    update,
    create,
    show
  };