const fs = require("fs");
const {
  noviceWords,
  journeymanWords,
  expertWords,
  masterWords
} = require("../../data/definitions/new-words-undefined");
const { getDefinitionsForWords } = require("./init-definitions-oxford");
// const { getDefinitionsForWords } = require("./init-definitions");

// getDefinitionsForWords(noviceWords, "novice", 1000);
// getDefinitionsForWords(journeymanWords, "journeyman", 1400);
// getDefinitionsForWords(expertWords, "expert", 1800);
// getDefinitionsForWords(masterWords, "master", 2800);

const getEntryStringFromResult = result => {
  if (result && result.word) {
    const { word, definition, difficulty, eloRating } = result;

    return `db.definitions.insert({ word: "${word}", definition: "${definition}", difficulty: "${difficulty}", eloRating: ${eloRating} })\n`;
  }

  return "";
};

const getRemovePreviousCommand = results => {
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

getDefinitionsForWords(noviceWords, "novice", 1000).then(results => {
  const entries = results.map(result => getEntryStringFromResult(result));
  const queries = [getRemovePreviousCommand(results), entries.join("")].join("");

  const wordsDev = "use words_dev\n\n";
  const wordsProd = "\n\nuse words_prod\n\n";

  const fileContent = [wordsDev, queries, wordsProd, queries].join("");

  fs.writeFile("migrations/april24-novice-D-L", fileContent, function(err) {
    if (err) throw err;
    console.log("Success!");
  });
});
