const definedHardWords = require("../../data/definitions/hard-words").definedHardWords;
const { insertDefinitionsIntoDb } = require("./insert-definitions-into-db");


insertDefinitionsIntoDb(definedHardWords);