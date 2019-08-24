const mongoose = require("mongoose");
const Words = require("../models/words");

const prodDb = process.env.MONGODB_URI;
const devDb = "mongodb://localhost:27017/words";
const dbHost = process.env.NODE_ENV === "production" ? prodDb : devDb;

console.log(">>> connecting to: ", dbHost);
mongoose.connect(dbHost);

function getAllWords(req, res, next) {
  Words.find((err, words) => {
    if (err) res.send(err);
    res.json(words);
  });
}

module.exports = {
  getAllWords: getAllWords
};
