const fs = require("fs");
const {
  noviceWords,
  journeymanWords,
  expertWords,
  masterWords
} = require("../../data/definitions/new-words-undefined");
// const {
//   journeymanWords,
//   expertWords,
//   masterWords,
// } = require("../../data/definitions/new-words-defined");
const { getDefinitionsForWords } = require("./init-definitions-oxford");
// const { getDefinitionsForWords } = require("./init-definitions");

const getEntryStringFromResult = (result) => {
  if (result && result.word) {
    const { word, definition, difficulty, eloRating } = result;

    return `db.definitions.insert({ word: "${word}", definition: "${definition}", difficulty: "${difficulty}", eloRating: ${eloRating} })\n`;
  }

  return "";
};

const getRemovePreviousCommand = (results) => {
  const strings = results.map((result, i) => {
    if (result && result.word) {
      if (i < results.length - 1) {
        return `{ word: "${result.word}" }, `;
      }

      return `{ word: "${result.word}" }`;
    }

    return "";
  });

  return `db.definitions.remove({ $or: [ ${strings.join("")} ] })\n\n`;
};

const createInsertMigrationFile = (words, difficulty, elo, filename) => {
  getDefinitionsForWords(words, difficulty, elo).then((results) => {
    const entries = results.map((result) => getEntryStringFromResult(result));
    const queries = [getRemovePreviousCommand(results), entries.join("")].join("");

    const wordsDev = "use words_dev\n\n";
    const wordsProd = "\n\nuse words_prod\n\n";

    const fileContent = [wordsDev, queries, wordsProd, queries].join("");

    fs.writeFile(`migrations/${filename}`, fileContent, function (err) {
      if (err) throw err;
      console.log("Success!");
    });
  });
};

// const createInsertMigrationFile = (words, filename) => {
//   const entries = words.map(result => getEntryStringFromResult(result));
//   const queries = [getRemovePreviousCommand(words), entries.join("")].join("");

//   const wordsDev = "use words_dev\n\n";
//   const wordsProd = "\n\nuse words_prod\n\n";

//   const fileContent = [wordsDev, queries, wordsProd, queries].join("");

//   fs.writeFile(`migrations/${filename}`, fileContent, function(err) {
//     if (err) throw err;
//     console.log("Success!");
//   });
// };

// createInsertMigrationFile(journeymanWords, "april25-journeyman");
// createInsertMigrationFile(expertWords, "april25-expert");
// createInsertMigrationFile(masterWords, "april25-master");

// createInsertMigrationFile(noviceWords, "novice", 800, "may7-novice");
// createInsertMigrationFile(journeymanWords, "journeyman", 1300, "may7-journeyman-v3");
