const mongoose = require("mongoose");

const DefinitionsSchema = mongoose.Schema({
  word: String,
  definition: String,
  difficulty: String,
  eloRating: Number
});

module.exports = mongoose.model("definitions", DefinitionsSchema);
