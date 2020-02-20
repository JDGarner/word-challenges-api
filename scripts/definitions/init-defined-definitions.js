// const definedHardWords = require("../../data/definitions/hard-words")
//   .definedHardWords;
const easyDefinedWords = require("../../data/definitions/easy-words")
  .easyDefinedWords;
const { insertDefinitionsIntoDb } = require("./insert-definitions-into-db");

// insertDefinitionsIntoDb(definedHardWords, "hard");
insertDefinitionsIntoDb(easyDefinedWords, "easy");
