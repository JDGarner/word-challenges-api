const definedHardWords = require("../../data/definitions/hard-words").definedHardWords;
const {
  insertDefinitionsIntoDb,
  insertDefinitionsIntoDbReset
} = require("./insert-definitions-into-db");

// insertDefinitionsIntoDb(definedHardWords, "hard");
insertDefinitionsIntoDbReset(definedHardWords, "hard");
