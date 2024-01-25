// import the pets array from data.js
const pets = require("./data");

// init express app
const express = require("express");
const app = express();

const port = 8080;

// GET - / - returns homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// hello world route
app.get("/api", (req, res) => {
  res.send("Hello World!");
});

// get all pets from the database
app.get("/api/v1/pets", (req, res) => {
  res.json(pets);
});

// get pet by owner with query string
app.get("/api/v1/pets/:owner", (req, res) => {
  const owner = req.params.owner;
  res.send(`Hello My name is:${req.params.owner}`);

  // find the pet in the pets array
  const pet = pets.find((pet) => pet.owner === owner);

  // send the pet as a response
  res.json(pet);
});

// get pet by name
app.get("/api/v1/pets/:name", (req, res) => {
  // get the name from the request
  const name = req.params.name;

  // find the pet in the pets array
  const pet = pets.find((pet) => pet.name === name);

  // send the pet as a response
  res.json(pet);
});

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});

module.exports = app;
