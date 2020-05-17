const mongoose = require("mongoose");

const SynonymsSchema = mongoose.Schema({
  word: String,
  definition: String,
  synonyms: Array,
  difficulty: String,
  eloRating: Number
});

module.exports = mongoose.model("synonyms", SynonymsSchema);
