const mongoose = require("mongoose");

const RhymesSchema = mongoose.Schema({
  word: String,
  score: Number,
  numSyllables: Number
});

const WordsSchema = mongoose.Schema({
  word: String,
  rhymes: [RhymesSchema]
});

module.exports = mongoose.model("Words", WordsSchema);
