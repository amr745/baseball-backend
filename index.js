///////////////////////////////
// DEPENDENCIES
////////////////////////////////
// get .env variables
require("dotenv").config()
// pull PORT from .env, give default value of 3001
const PORT = process.env.PORT || 3001;
// pull DATABASE_URL from .env
const connectDB = require('./config/connection');
// import express
const express = require("express")
// import colors
const colors = require('colors');
// create application object
const app = express()
// import mongoose
const mongoose = require("mongoose")
// import middlware
const cors = require("cors")
const morgan = require("morgan")
    
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
const playersRouter = require('./routes/playersRouter');
app.use('/', playersRouter);

///////////////////////////////
// LISTENER
////////////////////////////////
const start = async () => {
  try {
    connectDB();
    app.listen(PORT, () => {
      console.log(`Server is live on port: ${PORT}`)
    })
  } catch (error) {
    console.log(`Catch error: ${error}`)
  }
};

start();