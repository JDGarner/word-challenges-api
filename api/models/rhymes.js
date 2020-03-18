const mongoose = require("mongoose");

const RhymeSchema = mongoose.Schema({
  word: String
});

const RhymesSchema = mongoose.Schema({
  word: String,
  rhymes: [RhymeSchema],
  difficulty: String
});

module.exports = mongoose.model("rhymes", RhymesSchema);
