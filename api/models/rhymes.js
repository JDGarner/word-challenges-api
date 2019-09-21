const mongoose = require("mongoose");

const RhymeSchema = mongoose.Schema({
  word: String,
  score: Number,
  numSyllables: Number
});

const RhymesSchema = mongoose.Schema({
  word: String,
  rhymes: [RhymeSchema]
});

module.exports = mongoose.model("rhymes", RhymesSchema);
