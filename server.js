///////////////////////////////
// DEPENDENCIES
////////////////////////////////
// get .env variables
require("dotenv").config()
// pull PORT from .env, give default value of 3001
// pull DATABASE_URL from .env
const { PORT = 3001, DATABASE_URL } = process.env
// import express
const express = require("express")
// create application object
const app = express()
// import mongoose
const mongoose = require("mongoose")
// import middlware
const cors = require("cors")
const morgan = require("morgan")

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
// Establish Connection
mongoose.connect(DATABASE_URL)
// Connection Events
mongoose.connection
  .on("open", () => console.log("You are connected to MongoDB"))
  .on("close", () => console.log("You are disconnected from MongoDB"))
  .on("error", (error) => console.log(error))
    
  ///////////////////////////////
  // MiddleWare
  ////////////////////////////////
  app.use(cors()) // to prevent cors errors, open access to all origins
  app.use(morgan("dev")) // logging
  app.use(express.json()) // parse json bodies

// Import JSON files
const Players = require("./models/PlayersSchema")

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get("/", (req, res) => {
  res.send("hello world")
})

// PLAYERS INDEX ROUTE
app.get("/players", async (req, res) => {
    try {
      // send all players
      res.json(await Players.find({}))
    } catch (error) {
      //send error
      res.status(400).json(error)
    }
  })
  
  // PLAYERS CREATE ROUTE
  app.post("/players", async (req, res) => {
    try {
      // send all players
      res.json(await Players.create(req.body))
    } catch (error) {
      //send error
      res.status(400).json(error)
    }
  })

  // PLAYERS DELETE ROUTE
app.delete("/players/:id", async (req, res) => {
    try {
      // send all players
      res.json(await Players.findByIdAndDelete(req.params.id))
    } catch (error) {
      //send error
      res.status(400).json(error)
    }
  })
  
  // PLAYERS UPDATE ROUTE
  app.put("/players/:id", async (req, res) => {
    try {
      // send all players
      res.json(
        await Players.findByIdAndUpdate(req.params.id, req.body, { new: true })
      )
    } catch (error) {
      //send error
      res.status(400).json(error)
    }
  })

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))